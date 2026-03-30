package com.dolgodola.main.service;

import java.util.Collections;

import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.DefaultOAuth2User;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

import com.dolgodola.main.dto.OAuthAttributes;
import com.dolgodola.main.entity.UserEntity;
import com.dolgodola.main.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CustomOAuth2UserService extends DefaultOAuth2UserService {

	private final UserRepository userRepository;

	@Override
	public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
		// 1. 기본 설정으로 유저 정보를 가져옴
		OAuth2User oAuth2User = super.loadUser(userRequest);

		// 2. 서비스 구분 (google, kakao 등)
		String registrationId = userRequest.getClientRegistration().getRegistrationId();

		// 3. OAuth2 로그인 진행 시 키가 되는 필드값 (Primary Key 역할)
		String userNameAttributeName = userRequest.getClientRegistration()
				.getProviderDetails().getUserInfoEndpoint().getUserNameAttributeName();

		// 4. 추출한 attributes를 가공
		OAuthAttributes attributes = OAuthAttributes.of(registrationId, userNameAttributeName,
				oAuth2User.getAttributes());

		// 5. 유저 정보 저장 및 업데이트 (Dirty Checking 활용)
		UserEntity user = saveOrUpdate(attributes);

		// 6. Spring Security에서 사용할 권한과 속성값 반환
		return new DefaultOAuth2User(
				Collections.singleton(new SimpleGrantedAuthority(user.getRoleKey())),
				attributes.attributes(),
				attributes.nameAttributeKey());
	}

	private UserEntity saveOrUpdate(OAuthAttributes attributes) {
		UserEntity user = (UserEntity) userRepository.findByEmail(attributes.email())
				.map(entity -> entity.update(attributes.name(), attributes.picture()))
				.orElse(attributes.toEntity());

		return userRepository.save(user);
	}
}
