package com.dolgodola.main.domain;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum Role {

	// Spring Security에서는 권한 코드에 항상 "ROLE_" 접두사가 붙어 있어야 합니다.
	GUEST("ROLE_GUEST", "게스트"),
	USER("ROLE_USER", "일반 사용자"),
	ADMIN("ROLE_ADMIN", "관리자");

	private final String key;
	private final String title;

}