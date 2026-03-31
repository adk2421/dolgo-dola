package com.dolgodola.main.dto;

import java.util.Map;
import java.util.UUID;

import com.dolgodola.main.domain.Role;
import com.dolgodola.main.entity.UserEntity;

public record OAuthAttributes(
		Map<String, Object> attributes,
		String nameAttributeKey,
		String name,
		String email,
		String picture
) {

	public static OAuthAttributes of(String registrationId, String userNameAttributeName, Map<String, Object> attributes) {
		if ("naver".equals(registrationId)) {
			return ofNaver("id", attributes);
		}

		if ("kakao".equals(registrationId)) {
			return ofKakao("id", attributes);
		}

		return ofGoogle(userNameAttributeName, attributes);
	}

	private static OAuthAttributes ofGoogle(String userNameAttributeName, Map<String, Object> attributes) {
		return new OAuthAttributes(
				attributes,
				userNameAttributeName,
				(String) attributes.get("name"),
				(String) attributes.get("email"),
				(String) attributes.get("picture"));
	}

	private static OAuthAttributes ofKakao(String userNameAttributeName, Map<String, Object> attributes) {
		// 카카오는 kakao_account에 profile이 있고, profile에 nickname, profile_image가 있음
		Map<String, Object> kakaoAccount = (Map<String, Object>) attributes.get("kakao_account");
		Map<String, Object> kakaoProfile = (Map<String, Object>) kakaoAccount.get("profile");

		return new OAuthAttributes(
				attributes,
				userNameAttributeName,
				(String) kakaoProfile.get("nickname"),
				UUID.randomUUID().toString().substring(0, 10) + "@gmail.com",
				(String) kakaoProfile.get("profile_image_url"));
	}

	private static OAuthAttributes ofNaver(String userNameAttributeName, Map<String, Object> attributes) {
		// 네이버는 모든 데이터가 response에 있음
		Map<String, Object> response = (Map<String, Object>) attributes.get("response");

		return new OAuthAttributes(
				response,
				userNameAttributeName,
				(String) response.get("name"),
				(String) response.get("email"),
				(String) response.get("profile_image"));
	}

	public UserEntity toEntity() {
		return UserEntity.builder()
				.username(name)
				.email(email)
				.picture(picture)
				.role(Role.USER)
				.build();
	}
}