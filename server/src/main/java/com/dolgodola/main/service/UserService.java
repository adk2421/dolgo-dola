package com.dolgodola.main.service;

import java.util.Objects;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.dolgodola.main.dto.UserDto;
import com.dolgodola.main.entity.UserEntity;
import com.dolgodola.main.repository.UserRepository;

import lombok.RequiredArgsConstructor;

/**
 * UserService
 * : 유저 서비스 클래스
 * 
 * @author 김지성
 * @since 2026-03-26
 * @version 1.0
 */
@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class UserService {

	private final UserRepository userRepository;
	private final PasswordEncoder passwordEncoder;

	@Transactional
	public String join(UserDto dto) {

		// 이메일 중복 검사
		if (userRepository.existsByEmail(dto.getEmail())) {
			throw new IllegalArgumentException("이미 존재하는 이메일입니다.");
		}

		// 비밀번호 암호화
		String encodedPassword = passwordEncoder.encode(dto.getPassword());

		// 사용자 생성 및 저장
		UserEntity user = UserEntity.builder()
				.email(dto.getEmail())
				.password(encodedPassword)
				.username(dto.getUsername())
				.build();

		return userRepository.save(Objects.requireNonNull(user)).getEmail();
	}
	
}