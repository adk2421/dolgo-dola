package com.dolgodola.common.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

/**
 * SecurityConfig
 * : 보안 설정 클래스
 * 
 * @author 김지성
 * @since 2026-03-26
 * @version 1.0
 */
@Configuration
public class SecurityConfig {

  @Bean
  public PasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder();
  }

  @Bean
  public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    http
        .csrf(csrf -> csrf.disable()) // POST 요청 테스트를 위해 CSRF 비활성화
        .headers(headers -> headers.frameOptions(frame -> frame.disable())) // H2 콘솔 사용 시 필요
        .authorizeHttpRequests(auth -> auth
            .anyRequest().permitAll() // 모든 요청에 대해 인증 없이 허용
        );

    return http.build();
  }
}