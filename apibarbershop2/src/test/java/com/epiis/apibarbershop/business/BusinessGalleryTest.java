package com.epiis.apibarbershop.business;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.lenient;
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

import com.epiis.apibarbershop.dto.request.RequestGalleryInsert;
import com.epiis.apibarbershop.dto.request.RequestGalleryUpdate;
import com.epiis.apibarbershop.dto.response.ResponseGalleryDelete;
import com.epiis.apibarbershop.dto.response.ResponseGalleryGetAll;
import com.epiis.apibarbershop.dto.response.ResponseGalleryInsert;
import com.epiis.apibarbershop.dto.response.ResponseGalleryUpdate;
import com.epiis.apibarbershop.entity.EntityGallery;
import com.epiis.apibarbershop.repository.RepositoryGallery;

@ExtendWith(MockitoExtension.class)
@SuppressWarnings("all")
class BusinessGalleryTest {

    @InjectMocks
    private BusinessGallery target;

    @Mock
    private RepositoryGallery repositoryGallery;

    @BeforeEach
    void setUp() {
        EntityGallery gallery = new EntityGallery();
        gallery.setIdGallery("gallery-id");
        lenient().when(repositoryGallery.findById(anyString())).thenReturn(Optional.of(gallery));
        lenient().when(repositoryGallery.findAll()).thenReturn(List.of(gallery));
        lenient().when(repositoryGallery.save(any())).thenReturn(gallery);
    }

    @Test
    void testInsert_Success() {
        RequestGalleryInsert req = new RequestGalleryInsert();
        req.setTitle("title");
        req.setDescription("desc");
        req.setImage("image");
        ResponseGalleryInsert res = target.insert(req);
        assertEquals("success", res.getType());
    }

    @Test
    void testUpdate_Success() {
        RequestGalleryUpdate req = new RequestGalleryUpdate();
        req.setIdGallery("gallery-id");
        req.setTitle("title");
        req.setDescription("desc");
        req.setImage("image");
        ResponseGalleryUpdate res = target.update(req);
        assertEquals("success", res.getType());
    }

    @Test
    void testUpdate_NotFound() {
        when(repositoryGallery.findById("invalid")).thenReturn(Optional.empty());
        RequestGalleryUpdate req = new RequestGalleryUpdate();
        req.setIdGallery("invalid");
        ResponseGalleryUpdate res = target.update(req);
        assertEquals("error", res.getType());
    }



    @Test
    void testDelete_Success() {
        ResponseGalleryDelete res = target.delete("gallery-id");
        assertEquals("success", res.getType());
    }

    @Test
    void testDelete_NotFound() {
        when(repositoryGallery.findById("invalid")).thenReturn(Optional.empty());
        ResponseGalleryDelete res = target.delete("invalid");
        assertEquals("error", res.getType());
    }

    @Test
    void testGetAll() {
        ResponseGalleryGetAll res = target.getall();
        assertEquals("success", res.getType());
    }
}
