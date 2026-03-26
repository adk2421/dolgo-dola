package com.dolgodola.main.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dolgodola.main.dto.UserDto;
import com.dolgodola.main.service.UserService;

import lombok.RequiredArgsConstructor;

/**
 * UserApiController
 * : 유저 API 컨트롤러 클래스
 * 
 * @author 김지성
 * @since 2026-03-26
 * @version 1.0
 */
@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserApiController {

	private final UserService userService;

	/**
	 * registUser
	 * : 유저 등록
	 * 
	 * @author 김지성
	 * @since 2026-03-26
	 * @param UserDto
	 * @return ResponseEntity<String>
	 */
	@PostMapping("/registUser")
	public ResponseEntity<String> registUser(@RequestBody UserDto dto) {

		try {
			String userId = userService.join(dto);
			return ResponseEntity.ok("등록 성공! email: " + userId);

		} catch (IllegalArgumentException e) {
			return ResponseEntity.badRequest().body(e.getMessage());

		} catch (Exception e) {
			return ResponseEntity.internalServerError().body("서버 오류가 발생했습니다.");
		}
	}

}