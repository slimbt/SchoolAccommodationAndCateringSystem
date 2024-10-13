package com.St2i.pfe;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class PfeApplication {

	public static void main(String[] args) {
		SpringApplication.run(PfeApplication.class, args);
	}


@Bean
public WebMvcConfigurer corsConfigurer() {
	return new WebMvcConfigurer() {
		@Override
		public void addCorsMappings(CorsRegistry registry) {
			registry.addMapping("/api/**")
					.allowedOrigins("http://localhost:4200") // Autoriser les requêtes provenant de localhost:4200
					.allowedMethods("GET", "POST", "PUT", "DELETE","OPTIONS")
					.allowedHeaders("*")
					.allowCredentials(true);
		}
	};
}
}