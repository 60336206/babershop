package com.epiis.apibarbershop;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class DatabaseMigrationRunnerTest {

    @Autowired
    private DatabaseMigrationRunner databaseMigrationRunner;

    @Test
    void testContextLoads() {
        assertNotNull(databaseMigrationRunner);
    }
}
