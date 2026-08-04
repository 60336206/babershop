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
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.util.ReflectionTestUtils;

import com.epiis.apibarbershop.dto.request.RequestUserInsert;
import com.epiis.apibarbershop.dto.request.RequestUserUpdate;
import com.epiis.apibarbershop.dto.response.ResponseUserDelete;
import com.epiis.apibarbershop.dto.response.ResponseUserGetAll;
import com.epiis.apibarbershop.dto.response.ResponseUserGetOne;
import com.epiis.apibarbershop.dto.response.ResponseUserInsert;
import com.epiis.apibarbershop.dto.response.ResponseUserUpdate;
import com.epiis.apibarbershop.entity.EntityUser;
import com.epiis.apibarbershop.repository.RepositoryCustomer;
import com.epiis.apibarbershop.repository.RepositoryUser;

@ExtendWith(MockitoExtension.class)
@SuppressWarnings("all")
class BusinessUserTest {

    @InjectMocks
    private BusinessUser target;

    @Mock
    private RepositoryUser repositoryUser;

    @Mock
    private RepositoryCustomer repositoryCustomer;

    @Mock
    private PasswordEncoder passwordEncoder;

    @BeforeEach
    void setUp() {
        EntityUser user = new EntityUser();
        user.setIdUser("user-id");
        user.setEmail("test@test.com");
        user.setPhone("123456789");
        
        lenient().when(repositoryUser.findById(anyString())).thenReturn(Optional.of(user));
        lenient().when(repositoryUser.findAll()).thenReturn(List.of(user));
        lenient().when(repositoryUser.save(any())).thenReturn(user);
        lenient().when(passwordEncoder.encode(anyString())).thenReturn("encoded");
        
        lenient().when(repositoryUser.findByEmail(anyString())).thenReturn(Optional.empty());
        lenient().when(repositoryUser.findByPhone(anyString())).thenReturn(Optional.empty());
        lenient().when(repositoryCustomer.findByEmail(anyString())).thenReturn(Optional.empty());
        lenient().when(repositoryCustomer.findByPhone(anyString())).thenReturn(Optional.empty());

        ReflectionTestUtils.setField(target, "uploadUsersPath", "uploads/users/");
    }

    @Test
    void testInsert_Success() {
        RequestUserInsert req = new RequestUserInsert();
        req.setFirstName("First");
        req.setSurName("Last");
        req.setEmail("new@test.com");
        req.setPhone("987654321");
        req.setPassword("Password123");
        req.setRole("ADMIN");

        ResponseUserInsert res = target.insert(req);
        assertEquals("success", res.getType());
    }

    @Test
    void testInsert_Validation_MissingEmail() {
        RequestUserInsert req = new RequestUserInsert();
        ResponseUserInsert res = target.insert(req);
        assertEquals("error", res.getType());
    }

    @Test
    void testUpdate_Success() {
        RequestUserUpdate req = new RequestUserUpdate();
        req.setIdUser("user-id");
        req.setFirstName("First");
        req.setSurName("Last");
        req.setEmail("new@test.com");
        req.setPhone("987654321");
        req.setRole("ADMIN");

        ResponseUserUpdate res = target.update(req);
        assertEquals("success", res.getType());
    }

    @Test
    void testUpdate_NotFound() {
        when(repositoryUser.findById(anyString())).thenReturn(Optional.empty());
        RequestUserUpdate req = new RequestUserUpdate();
        req.setIdUser("invalid");

        ResponseUserUpdate res = target.update(req);
        assertEquals("error", res.getType());
    }

    @Test
    void testDelete_Success() {
        ResponseUserDelete res = target.delete("user-id");
        assertEquals("success", res.getType());
    }

    @Test
    void testDelete_NotFound() {
        when(repositoryUser.findById(anyString())).thenReturn(Optional.empty());
        ResponseUserDelete res = target.delete("invalid");
        assertEquals("error", res.getType());
    }

    @Test
    void testGetAll() {
        ResponseUserGetAll res = target.getall();
        assertEquals("success", res.getType());
    }

    @Test
    void testGetOne() {
        ResponseUserGetOne res = target.getone("user-id");
        assertEquals("success", res.getType());
    }

    @Test
    void testGetOne_NotFound() {
        when(repositoryUser.findById(anyString())).thenReturn(Optional.empty());
        ResponseUserGetOne res = target.getone("invalid");
        assertEquals("error", res.getType());
    }
}
