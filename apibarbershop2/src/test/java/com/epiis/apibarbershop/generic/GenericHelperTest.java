package com.epiis.apibarbershop.generic;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;

import com.epiis.apibarbershop.helper.GenericHelper;

class GenericHelperTest {
    @Test
    void testFollowCodeGeneration() {
        String code = GenericHelper.followCodeGeneration();
        assertNotNull(code);
        assertEquals(7, code.length());
        assertTrue(code.chars().allMatch(c ->
                Character.isDigit(c) || (c >= 'A' && c <= 'Z')));
    }
}
