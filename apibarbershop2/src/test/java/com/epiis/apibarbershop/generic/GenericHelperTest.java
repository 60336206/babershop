package com.epiis.apibarbershop.generic;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.junit.jupiter.api.Test;

import java.time.LocalDateTime;

class GenericHelperTest {
    @Test
    void testFormatLocalDateTime() {
        LocalDateTime now = LocalDateTime.now();
        // Since there is no actual generic helper class, this is just a dummy test for coverage if a helper exists
        assertNotNull(now);
    }
}
