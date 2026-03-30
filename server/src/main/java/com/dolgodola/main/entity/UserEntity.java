package com.dolgodola.main.entity;

import java.time.LocalDateTime;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import com.dolgodola.main.domain.Role;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * UserEntity
 * : 유저 엔티티 클래스
 * 
 * @author 김지성
 * @since 2026-03-26
 * @version 1.0
 */
@Slf4j
@Entity
@Table(name = "users")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@EntityListeners(AuditingEntityListener.class)
public class UserEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(nullable = false, unique = true, length = 50)
	private String email;

	@Column(length = 255)
	private String password;

	@Column(nullable = false, length = 30)
	private String username;

	@Column(length = 1000)
	private String picture;

	@Enumerated(EnumType.STRING)
	@Column(length = 30)
	private Role role;

	@Column(nullable = false)
	private boolean isActive;

	@CreatedDate
	@Column(nullable = false, updatable = false)
	private LocalDateTime createdAt;

	@LastModifiedDate
	private LocalDateTime updatedAt;

	private LocalDateTime lastLoginAt;

	@Builder
	public UserEntity(String email, String password, String username, String picture, Role role) {
		this.email = email;
		this.password = password;
		this.username = username;
		this.picture = picture;
		this.role = role;
		this.isActive = true;
	}

	public void updateUsername(String username) {
		this.username = username;
	}

	public void updateLastLogin() {
		this.lastLoginAt = LocalDateTime.now();
	}

	public String getRoleKey() {
		return this.role.getKey();
	}

	public Object update(String name, String picture) {
		this.username = name;
		this.picture = picture;

		return this;
	}

}
