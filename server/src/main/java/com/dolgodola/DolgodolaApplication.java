package com.dolgodola;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class DolgodolaApplication {

	public static void main(String[] args) {
		SpringApplication.run(DolgodolaApplication.class, args);
	}

}
