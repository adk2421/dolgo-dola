package com.dolgodola.main.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dolgodola.main.entity.UserEntity;

/**
 * UserRepository
 * : 유저 데이터 제어 인터페이스 클래스
 * 
 * @author 김지성
 * @since 2026-03-26
 * @version 1.0
 */
@Repository
public interface UserRepository extends JpaRepository<UserEntity, Long> {

	Optional<UserEntity> findByEmail(String email);

	boolean existsByEmail(String email);

	boolean existsByUsername(String username);

	Optional<UserEntity> findByEmailAndIsActiveTrue(String email);

}
