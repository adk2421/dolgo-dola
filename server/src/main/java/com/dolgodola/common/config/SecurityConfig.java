package com.dolgodola.common.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.HttpStatusEntryPoint;

import com.dolgodola.main.service.CustomOAuth2UserService;

import lombok.RequiredArgsConstructor;

/**
 * SecurityConfig
 * : 보안 설정 클래스
 * 
 * @author 김지성
 * @since 2026-03-26
 * @version 1.0
 */
@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {

  private final CustomOAuth2UserService customOAuth2UserService;

  @Bean
  public PasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder();
  }

  @Bean
  public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    http
        .csrf(csrf -> csrf.disable()) // POST 요청 테스트를 위해 CSRF 비활성화
        .authorizeHttpRequests(auth -> auth
            // .anyRequest().permitAll() // 모든 요청에 대해 인증 없이 허용
            .requestMatchers("/", "/shop/login/**").permitAll()
            .anyRequest().authenticated()

        )
        .exceptionHandling(e -> e
            // 인증되지 않은 사용자가 접근 시 401 에러를 내보내거나 React 로그인 페이지로 리다이렉트
            .authenticationEntryPoint(new HttpStatusEntryPoint(HttpStatus.UNAUTHORIZED)))
        .oauth2Login(oauth2 -> oauth2
            .loginPage("http://localhost:5173/shop/login")
            .userInfoEndpoint(userInfo -> userInfo
                .userService(customOAuth2UserService) // 핵심: 커스텀 서비스 등록
            )
            .defaultSuccessUrl("http://localhost:5173/shop", true) // 로그인 성공 시 이동할 페이지
        );

    return http.build();
  }
}