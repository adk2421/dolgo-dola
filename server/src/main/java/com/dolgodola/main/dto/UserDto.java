package com.dolgodola.main.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;

/**
 * UserDto
 * : 유저 DTO 클래스
 * 
 * @author 김지성
 * @since 2026-03-26
 * @version 1.0
 */
@Getter
@NoArgsConstructor
public class UserDto {
	private String email;
	private String password;
	private String username;
}
