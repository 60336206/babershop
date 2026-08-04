package com.epiis.apibarbershop.security;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.test.util.ReflectionTestUtils;

class JwtServiceTest {

	private JwtService target;

	@BeforeEach
	void setUp() {
		target = new JwtService();
		ReflectionTestUtils.setField(target, "secret", "test-secret-key-1234567890-abcdefghijklmnop");
		ReflectionTestUtils.setField(target, "expiration", 3600000L);
	}

	@Test
	void testGenerateToken() {
		String token = target.generateToken("test@test.com", "ADMIN");
		assertFalse(token.isBlank());
		assertEquals("test@test.com", target.extractEmail(token));
		assertEquals("ADMIN", target.extractRole(token));
		assertTrue(target.isTokenValid(token));
	}

	@Test
	void testIsTokenValid_Invalid() {
		assertFalse(target.isTokenValid("invalid.token.value"));
	}
}
