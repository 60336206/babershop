package com.epiis.apibarbershop.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.any;
import static org.mockito.Mockito.doThrow;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.web.multipart.MultipartFile;

import com.epiis.apibarbershop.service.FileStorageService.FileStorageException;
import com.epiis.apibarbershop.service.FileStorageService.FileValidationException;
import com.epiis.apibarbershop.service.FileStorageService.StoredFile;

@SuppressWarnings("all")
class FileStorageServiceTest {

	private final FileStorageService target = new FileStorageService();

	private Path tempDir;

	@BeforeEach
	void setUp() throws IOException {
		tempDir = Files.createTempDirectory("upload-test");
	}

	@AfterEach
	void tearDown() {
		try {
			Files.walk(tempDir).sorted(java.util.Comparator.reverseOrder()).forEach(path -> path.toFile().delete());
		} catch (IOException ignored) {
		}
	}

	@Test
	void testStore_NullFile() {
		assertThrows(FileValidationException.class, () -> target.store(null, tempDir.toString(), "empty-msg"));
	}

	@Test
	void testStore_EmptyFile() {
		MultipartFile empty = mock(MultipartFile.class);
		when(empty.isEmpty()).thenReturn(true);
		FileValidationException ex = assertThrows(FileValidationException.class,
				() -> target.store(empty, tempDir.toString(), "empty-msg"));
		assertEquals("empty-msg", ex.getMessage());
	}

	@Test
	void testStore_NoExtension() {
		MultipartFile file = mock(MultipartFile.class);
		when(file.isEmpty()).thenReturn(false);
		when(file.getOriginalFilename()).thenReturn("photo");
		FileValidationException ex = assertThrows(FileValidationException.class,
				() -> target.store(file, tempDir.toString(), "empty-msg"));
		assertEquals("Archivo sin extensión válida.", ex.getMessage());
	}

	@Test
	void testStore_NotAllowedExtension() {
		MultipartFile file = mock(MultipartFile.class);
		when(file.isEmpty()).thenReturn(false);
		when(file.getOriginalFilename()).thenReturn("photo.exe");
		FileValidationException ex = assertThrows(FileValidationException.class,
				() -> target.store(file, tempDir.toString(), "empty-msg"));
		assertEquals("Solo se permiten imágenes (jpg, jpeg, png, webp, gif).", ex.getMessage());
	}

	@Test
	void testStore_Success() throws Exception {
		MultipartFile file = mock(MultipartFile.class);
		when(file.isEmpty()).thenReturn(false);
		when(file.getOriginalFilename()).thenReturn("MyPhoto.PNG");

		StoredFile result = target.store(file, tempDir.resolve("nested").resolve("dir").toString(), "empty-msg");

		assertNotNull(result.getFileName());
		assertTrue(result.getFileName().endsWith(".png"));
		assertEquals("png", result.getExtension());
		verify(file).transferTo(any(File.class));
	}

	@Test
	void testStore_IOException() throws Exception {
		MultipartFile file = mock(MultipartFile.class);
		when(file.isEmpty()).thenReturn(false);
		when(file.getOriginalFilename()).thenReturn("photo.png");
		doThrow(new IOException("disk full")).when(file).transferTo(any(File.class));

		FileStorageException ex = assertThrows(FileStorageException.class,
				() -> target.store(file, tempDir.toString(), "empty-msg"));
		assertTrue(ex.getMessage().contains("disk full"));
	}
}
