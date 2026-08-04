package com.epiis.apibarbershop.business;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.test.util.ReflectionTestUtils;

import com.epiis.apibarbershop.dto.response.ResponseAppointmentFileGetAll;
import com.epiis.apibarbershop.dto.response.ResponseAppointmentFileUpload;
import com.epiis.apibarbershop.entity.EntityAppointment;
import com.epiis.apibarbershop.entity.EntityAppointmentFile;
import com.epiis.apibarbershop.repository.RepositoryAppointment;
import com.epiis.apibarbershop.repository.RepositoryAppointmentFile;
import com.epiis.apibarbershop.service.FileStorageService;

@ExtendWith(MockitoExtension.class)
@SuppressWarnings("all")
class BusinessAppointmentFileTest {

	@InjectMocks
	private BusinessAppointmentFile target;

	@Mock
	private RepositoryAppointmentFile repositoryAppointmentFile;

	@Mock
	private RepositoryAppointment repositoryAppointment;

	@Mock
	private FileStorageService fileStorageService;

	@BeforeEach
	void setUp() {
		ReflectionTestUtils.setField(target, "uploadPath", "uploads/appointments/");
	}

	@Test
	void testUploadImage_AppointmentNotFound() {
		when(repositoryAppointment.findById(anyString())).thenReturn(Optional.empty());

		ResponseAppointmentFileUpload res = target.uploadImage("app1", null);
		assertEquals("error", res.getType());
	}

	@Test
	void testUploadImage_StorageValidationException() {
		when(repositoryAppointment.findById(anyString())).thenReturn(Optional.of(new EntityAppointment()));
		when(fileStorageService.store(any(), anyString(), anyString()))
				.thenThrow(new FileStorageService.FileValidationException("Debe seleccionar un archivo."));

		ResponseAppointmentFileUpload res = target.uploadImage("app1", null);
		assertEquals("error", res.getType());
	}

	@Test
	void testUploadImage_Success() {
		when(repositoryAppointment.findById(anyString())).thenReturn(Optional.of(new EntityAppointment()));
		when(fileStorageService.store(any(), anyString(), anyString()))
				.thenReturn(new FileStorageService.StoredFile("file.png", "png"));

		ResponseAppointmentFileUpload res = target.uploadImage("app1", null);
		assertEquals("success", res.getType());
		assertEquals("file.png", res.fileName);
		assertEquals("png", res.extension);
		verify(repositoryAppointmentFile).save(any(EntityAppointmentFile.class));
	}

	@Test
	void testGetByAppointment_AppointmentNotFound() {
		when(repositoryAppointment.findById(anyString())).thenReturn(Optional.empty());

		ResponseAppointmentFileGetAll res = target.getByAppointment("app1");
		assertEquals("error", res.getType());
	}

	@Test
	void testGetByAppointment_Success() {
		when(repositoryAppointment.findById(anyString())).thenReturn(Optional.of(new EntityAppointment()));
		when(repositoryAppointmentFile.findByIdAppointment(anyString()))
				.thenReturn(List.of(new EntityAppointmentFile()));

		ResponseAppointmentFileGetAll res = target.getByAppointment("app1");
		assertEquals("success", res.getType());
		assertEquals(1, res.listFile.size());
	}
}
