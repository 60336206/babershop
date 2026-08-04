package com.epiis.apibarbershop.generic;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.junit.jupiter.api.Assertions.fail;

import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;

import org.junit.jupiter.api.Test;

@SuppressWarnings("all")
class ValidationConstantsTest {

	@Test
	void testConstructorThrows() throws Exception {
		Constructor<ValidationConstants> constructor = ValidationConstants.class.getDeclaredConstructor();
		constructor.setAccessible(true);
		try {
			constructor.newInstance();
			fail("Se esperaba una excepción al instanciar la clase utilitaria");
		} catch (InvocationTargetException e) {
			assertTrue(e.getCause() instanceof IllegalStateException);
			assertEquals("Utility class", e.getCause().getMessage());
		}
	}

	@Test
	void testConstants() {
		assertEquals("ROLE_ADMIN", ValidationConstants.ROLE_ADMIN);
		assertEquals("ROLE_BARBER", ValidationConstants.ROLE_BARBER);
		assertEquals("ROLE_CUSTOMER", ValidationConstants.ROLE_CUSTOMER);
		assertEquals("whatsapp:+", ValidationConstants.WHATSAPP_PREFIX);
	}
}
