package com.epiis.apibarbershop;

import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.jdbc.core.JdbcTemplate;

@ExtendWith(MockitoExtension.class)
@SuppressWarnings("all")
class DatabaseMigrationRunnerErrorTest {

	@Mock
	private JdbcTemplate jdbcTemplate;

	@InjectMocks
	private DatabaseMigrationRunner target;

	@Test
	void testRun_CatchWhenUpdateFails() throws Exception {
		when(jdbcTemplate.update(anyString())).thenThrow(new RuntimeException("boom"));

		target.run();

		verify(jdbcTemplate).execute(anyString());
	}
}
