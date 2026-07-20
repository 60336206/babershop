package com.epiis.apibarbershop.security;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.filter.OncePerRequestFilter;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

	private final JwtService jwtService;
	private final CustomUserDetailsService customUserDetailsService;

	public SecurityConfig(JwtService jwtService, CustomUserDetailsService customUserDetailsService) {
		this.jwtService = jwtService;
		this.customUserDetailsService = customUserDetailsService;
	}

	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

	@Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
		http
			.cors(org.springframework.security.config.Customizer.withDefaults())
			.csrf(csrf -> csrf.disable())
			.sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
			.authorizeHttpRequests(auth -> auth

				// ── Preflight CORS — siempre permitido ──
				.requestMatchers(HttpMethod.OPTIONS, "/**").permitAll()

				// ── Endpoints públicos — sin token ──
				.requestMatchers("/auth/**").permitAll()
				.requestMatchers("/general/**").permitAll()
				.requestMatchers(HttpMethod.GET, "/service/getall").permitAll()
				.requestMatchers(HttpMethod.GET, "/service/getone/**").permitAll()
				.requestMatchers(HttpMethod.GET, "/gallery/getall").permitAll()
				.requestMatchers(HttpMethod.GET, "/setting/getone").permitAll()
				.requestMatchers(HttpMethod.GET, "/user/getall").permitAll()
				.requestMatchers(HttpMethod.GET, "/user/getone/**").permitAll()
				.requestMatchers(HttpMethod.POST, "/customer/insert").permitAll()
				.requestMatchers(HttpMethod.POST, "/appointment/insert").permitAll()
				.requestMatchers(HttpMethod.POST, "/appointment/upload-image/**").permitAll()
				.requestMatchers(HttpMethod.GET, "/uploads/appointments/**").permitAll()
				.requestMatchers(HttpMethod.GET, "/barberschedule/availablehours/**").permitAll()

				// ── ADMINISTRADOR — gestión completa ──
				.requestMatchers("/user/insert").hasAuthority("ROLE_ADMIN")
				.requestMatchers("/user/update").hasAuthority("ROLE_ADMIN")
				.requestMatchers("/user/delete/**").hasAuthority("ROLE_ADMIN")
				.requestMatchers("/user/upload-photo/**").hasAuthority("ROLE_ADMIN")
				.requestMatchers("/customer/**").hasAuthority("ROLE_ADMIN")
				.requestMatchers("/payment/**").hasAuthority("ROLE_ADMIN")
				.requestMatchers("/service/insert").hasAuthority("ROLE_ADMIN")
				.requestMatchers("/service/update").hasAuthority("ROLE_ADMIN")
				.requestMatchers("/service/delete/**").hasAuthority("ROLE_ADMIN")
				.requestMatchers("/gallery/**").hasAuthority("ROLE_ADMIN")
				.requestMatchers("/setting/**").hasAuthority("ROLE_ADMIN")
				.requestMatchers("/report/**").hasAuthority("ROLE_ADMIN")
				.requestMatchers("/barberschedule/getall").hasAuthority("ROLE_ADMIN")

				// ── ADMINISTRADOR — reservas (cancelar) ──
				.requestMatchers(HttpMethod.DELETE, "/appointment/delete/**").hasAuthority("ROLE_ADMIN")

				// ── BARBERO + ADMINISTRADOR — ver y gestionar agenda ──
				.requestMatchers(HttpMethod.GET, "/appointment/getall").hasAnyAuthority("ROLE_BARBER", "ROLE_ADMIN")
				.requestMatchers(HttpMethod.GET, "/appointment/getone/**").hasAnyAuthority("ROLE_BARBER", "ROLE_ADMIN")
				.requestMatchers(HttpMethod.GET, "/appointment/getbybarber/**").hasAnyAuthority("ROLE_BARBER", "ROLE_ADMIN")
				.requestMatchers(HttpMethod.PUT, "/appointment/update").hasAnyAuthority("ROLE_BARBER", "ROLE_ADMIN")

				// ── BARBERO + ADMINISTRADOR — horarios ──
				.requestMatchers("/barberschedule/insert").hasAnyAuthority("ROLE_BARBER", "ROLE_ADMIN")
				.requestMatchers("/barberschedule/update").hasAnyAuthority("ROLE_BARBER", "ROLE_ADMIN")
				.requestMatchers("/barberschedule/delete/**").hasAnyAuthority("ROLE_BARBER", "ROLE_ADMIN")
				.requestMatchers("/barberschedule/getbybarber/**").hasAnyAuthority("ROLE_BARBER", "ROLE_ADMIN")

				// ── BARBERO + ADMINISTRADOR — imágenes de referencia ──
				.requestMatchers("/appointment/upload-image/**").hasAnyAuthority("ROLE_BARBER", "ROLE_ADMIN")
				.requestMatchers("/appointment/getfiles/**").hasAnyAuthority("ROLE_BARBER", "ROLE_ADMIN")

				// ── BARBERO + ADMINISTRADOR — comentarios de reserva ──
				.requestMatchers("/appointmentcomment/**").hasAnyAuthority("ROLE_BARBER", "ROLE_ADMIN")

				// ── Cualquier autenticado ──
				.anyRequest().authenticated()
			)
			.addFilterBefore(jwtAuthFilter(), UsernamePasswordAuthenticationFilter.class);

		return http.build();
	}

	@Bean
	public OncePerRequestFilter jwtAuthFilter() {
		return new OncePerRequestFilter() {
			@Override
			protected void doFilterInternal(
					HttpServletRequest request,
					HttpServletResponse response,
					FilterChain filterChain)
					throws ServletException, IOException {

				String authHeader = request.getHeader("Authorization");

				if (authHeader == null || !authHeader.startsWith("Bearer ")) {
					filterChain.doFilter(request, response);
					return;
				}

				String token = authHeader.substring(7);

				if (!jwtService.isTokenValid(token)) {
					filterChain.doFilter(request, response);
					return;
				}

				String email = jwtService.extractEmail(token);

				if (email != null && SecurityContextHolder.getContext().getAuthentication() == null) {
					UserDetails userDetails = customUserDetailsService.loadUserByUsername(email);
					UsernamePasswordAuthenticationToken authToken =
						new UsernamePasswordAuthenticationToken(
							userDetails, null, userDetails.getAuthorities());
					SecurityContextHolder.getContext().setAuthentication(authToken);
				}

				filterChain.doFilter(request, response);
			}
		};
	}
}