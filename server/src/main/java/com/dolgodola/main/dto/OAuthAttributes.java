package com.dolgodola.main.dto;

import java.util.Map;

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
        // 소셜 서비스가 추가될 때 여기서 분기 처리 (예: "naver".equals(registrationId))
        return ofGoogle(userNameAttributeName, attributes);
    }

    private static OAuthAttributes ofGoogle(String userNameAttributeName, Map<String, Object> attributes) {
        return new OAuthAttributes(
            attributes,
            userNameAttributeName,
            (String) attributes.get("name"),
            (String) attributes.get("email"),
            (String) attributes.get("picture")
        );
    }

    public UserEntity toEntity() {
        return UserEntity.builder()
            .username(name)
            .email(email)
            .picture(picture)
            .role(Role.USER) // 기본 권한 설정
            .build();
    }
}