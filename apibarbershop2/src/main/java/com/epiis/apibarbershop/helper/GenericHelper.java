package com.epiis.apibarbershop.helper;

import java.security.SecureRandom;

public class GenericHelper {
	private static final SecureRandom RANDOM = new SecureRandom();

	private GenericHelper() {}

	public static String followCodeGeneration() {
		String characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

		StringBuilder sb = new StringBuilder();

		for (int i = 0; i < 7; i++) {
			int index = RANDOM.nextInt(characters.length());
			sb.append(characters.charAt(index));
		}

		return sb.toString();
	}
}
