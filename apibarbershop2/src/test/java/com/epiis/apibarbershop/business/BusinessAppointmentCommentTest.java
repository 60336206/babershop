package com.epiis.apibarbershop.business;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.epiis.apibarbershop.dto.request.RequestAppointmentCommentInsert;
import com.epiis.apibarbershop.dto.response.ResponseAppointmentCommentGetAll;
import com.epiis.apibarbershop.dto.response.ResponseAppointmentCommentInsert;
import com.epiis.apibarbershop.entity.EntityAppointment;
import com.epiis.apibarbershop.entity.EntityAppointmentComment;
import com.epiis.apibarbershop.entity.EntityUser;
import com.epiis.apibarbershop.repository.RepositoryAppointment;
import com.epiis.apibarbershop.repository.RepositoryAppointmentComment;
import com.epiis.apibarbershop.repository.RepositoryUser;

@ExtendWith(MockitoExtension.class)
@SuppressWarnings("all")
class BusinessAppointmentCommentTest {

	@InjectMocks
	private BusinessAppointmentComment target;

	@Mock
	private RepositoryAppointmentComment repositoryAppointmentComment;

	@Mock
	private RepositoryAppointment repositoryAppointment;

	@Mock
	private RepositoryUser repositoryUser;

	@Test
	void testInsert_AppointmentNotFound() {
		when(repositoryAppointment.findById(anyString())).thenReturn(Optional.empty());

		RequestAppointmentCommentInsert req = new RequestAppointmentCommentInsert();
		req.setIdAppointment("app1");
		ResponseAppointmentCommentInsert res = target.insert(req);
		assertEquals("error", res.getType());
	}

	@Test
	void testInsert_UserNotFound() {
		when(repositoryAppointment.findById(anyString())).thenReturn(Optional.of(new EntityAppointment()));
		when(repositoryUser.findById(anyString())).thenReturn(Optional.empty());

		RequestAppointmentCommentInsert req = new RequestAppointmentCommentInsert();
		req.setIdAppointment("app1");
		req.setIdUser("user1");
		ResponseAppointmentCommentInsert res = target.insert(req);
		assertEquals("error", res.getType());
	}

	@Test
	void testInsert_BlankDescription() {
		when(repositoryAppointment.findById(anyString())).thenReturn(Optional.of(new EntityAppointment()));
		when(repositoryUser.findById(anyString())).thenReturn(Optional.of(new EntityUser()));

		RequestAppointmentCommentInsert req = new RequestAppointmentCommentInsert();
		req.setIdAppointment("app1");
		req.setIdUser("user1");
		req.setDescription("  ");
		ResponseAppointmentCommentInsert res = target.insert(req);
		assertEquals("error", res.getType());
	}

	@Test
	void testInsert_Success() {
		when(repositoryAppointment.findById(anyString())).thenReturn(Optional.of(new EntityAppointment()));
		when(repositoryUser.findById(anyString())).thenReturn(Optional.of(new EntityUser()));

		RequestAppointmentCommentInsert req = new RequestAppointmentCommentInsert();
		req.setIdAppointment("app1");
		req.setIdUser("user1");
		req.setDescription("Excelente atención");
		ResponseAppointmentCommentInsert res = target.insert(req);
		assertEquals("success", res.getType());
		verify(repositoryAppointmentComment).save(any(EntityAppointmentComment.class));
	}

	@Test
	void testGetByAppointment_AppointmentNotFound() {
		when(repositoryAppointment.findById(anyString())).thenReturn(Optional.empty());

		ResponseAppointmentCommentGetAll res = target.getByAppointment("app1");
		assertEquals("error", res.getType());
	}

	@Test
	void testGetByAppointment_Success() {
		when(repositoryAppointment.findById(anyString())).thenReturn(Optional.of(new EntityAppointment()));
		when(repositoryAppointmentComment.findByIdAppointment(anyString()))
				.thenReturn(List.of(new EntityAppointmentComment()));

		ResponseAppointmentCommentGetAll res = target.getByAppointment("app1");
		assertEquals("success", res.getType());
		assertEquals(1, res.listComment.size());
	}
}
