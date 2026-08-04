package com.epiis.apibarbershop.service;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.UUID;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

/**
 * Servicio centralizado para validar y guardar imágenes en disco.
 * Usado por BusinessAppointmentFile y BusinessUser para evitar
 * duplicación de la lógica de subida de archivos.
 */
@Service
public class FileStorageService {

	private static final String ALLOWED_EXTENSIONS = "jpg|jpeg|png|webp|gif";

	/**
	 * Resultado de una operación de guardado de archivo.
	 */
	public static class StoredFile {
		private final String fileName;
		private final String extension;

		public StoredFile(String fileName, String extension) {
			this.fileName = fileName;
			this.extension = extension;
		}

		public String getFileName() {
			return fileName;
		}

		public String getExtension() {
			return extension;
		}
	}

	/**
	 * Excepción de validación (archivo vacío, sin extensión válida, etc).
	 */
	public static class FileValidationException extends RuntimeException {
		public FileValidationException(String message) {
			super(message);
		}
	}

	/**
	 * Excepción de error de IO al guardar el archivo.
	 */
	public static class FileStorageException extends RuntimeException {
		public FileStorageException(String message, Throwable cause) {
			super(message, cause);
		}
	}

	/**
	 * Valida y guarda una imagen en el directorio indicado, generando
	 * un nombre único con UUID.
	 *
	 * @param file          archivo recibido en el request
	 * @param uploadPath    carpeta destino (se crea si no existe)
	 * @param emptyFileMsg  mensaje de error cuando el archivo está vacío
	 * @return StoredFile con el nombre generado y la extensión
	 * @throws FileValidationException si el archivo es inválido
	 * @throws FileStorageException    si ocurre un error de IO
	 */
	public StoredFile store(MultipartFile file, String uploadPath, String emptyFileMsg) {
		if (file == null || file.isEmpty()) {
			throw new FileValidationException(emptyFileMsg);
		}

		String originalName = file.getOriginalFilename();
		if (originalName == null || !originalName.contains(".")) {
			throw new FileValidationException("Archivo sin extensión válida.");
		}

		String extension = originalName.substring(originalName.lastIndexOf(".") + 1).toLowerCase();

		if (!extension.matches(ALLOWED_EXTENSIONS)) {
			throw new FileValidationException("Solo se permiten imágenes (jpg, jpeg, png, webp, gif).");
		}

		String uniqueName = UUID.randomUUID().toString() + "." + extension;

		try {
			Path dirPath = Paths.get(uploadPath);
			if (!Files.exists(dirPath)) {
				Files.createDirectories(dirPath);
			}

			Path filePath = dirPath.resolve(uniqueName);
			file.transferTo(new File(filePath.toAbsolutePath().toString()));
		} catch (IOException e) {
			throw new FileStorageException("Error al guardar el archivo: " + e.getMessage(), e);
		}

		return new StoredFile(uniqueName, extension);
	}
}
