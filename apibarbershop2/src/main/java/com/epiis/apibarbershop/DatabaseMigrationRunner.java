package com.epiis.apibarbershop;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

@Component
public class DatabaseMigrationRunner implements CommandLineRunner {

	private static final Logger log = LoggerFactory.getLogger(DatabaseMigrationRunner.class);
	private final JdbcTemplate jdbcTemplate;

	public DatabaseMigrationRunner(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}

	@Override
	public void run(String... args) throws Exception {
		try {
			log.info("Iniciando migración automática de roles y esquemas...");
			
			try {
				jdbcTemplate.execute("ALTER TABLE tuser ADD COLUMN phone VARCHAR(255) NULL");
				log.info("Columna 'phone' agregada a tuser.");
			} catch (Exception ex) {
				log.info("La columna 'phone' ya existe o no se pudo agregar.");
			}

			int updatedToAdmin = jdbcTemplate.update("UPDATE tuser SET role = 'ADMIN' WHERE role = 'Administrador' OR role = 'Super Usuario'");
			int updatedToBarber = jdbcTemplate.update("UPDATE tuser SET role = 'BARBER' WHERE role = 'Barbero'");
			log.info("Migración completada. Usuarios actualizados a ADMIN: {}, a BARBER: {}", updatedToAdmin, updatedToBarber);
		} catch (Exception e) {
			log.error("Fallo al ejecutar la migración de base de datos: {}", e.getMessage());
		}
	}
}
