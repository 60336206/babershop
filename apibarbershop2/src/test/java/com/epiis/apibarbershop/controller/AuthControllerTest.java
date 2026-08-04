package com.epiis.apibarbershop.controller;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.lenient;
import static org.mockito.Mockito.when;

import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.epiis.apibarbershop.dto.request.DtoLoginRequest;
import com.epiis.apibarbershop.dto.request.DtoRegisterRequest;
import com.epiis.apibarbershop.dto.response.DtoLoginResponse;
import com.epiis.apibarbershop.entity.EntityUser;
import com.epiis.apibarbershop.repository.RepositoryUser;
import com.epiis.apibarbershop.security.JwtService;

@ExtendWith(MockitoExtension.class)
@SuppressWarnings("all")
class AuthControllerTest {

    @InjectMocks
    private AuthController target;

    @Mock
    private RepositoryUser repositoryUser;

    @Mock
    private JwtService jwtService;

    @Mock
    private PasswordEncoder passwordEncoder;

    private EntityUser mockUser;

    @BeforeEach
    void setUp() {
        mockUser = new EntityUser();
        mockUser.setIdUser("user-id");
        mockUser.setEmail("test@test.com");
        mockUser.setPassword("encoded_pass");
        mockUser.setRole("ADMIN");
        mockUser.setStatus(1);
        mockUser.setFirstName("John");
        mockUser.setSurName("Doe");

        lenient().when(jwtService.generateToken(anyString(), anyString())).thenReturn("mock_token");
        lenient().when(passwordEncoder.encode(anyString())).thenReturn("encoded_pass");
        lenient().when(passwordEncoder.matches(anyString(), anyString())).thenReturn(true);
        lenient().when(repositoryUser.save(any())).thenReturn(mockUser);
    }

    private DtoLoginRequest getValidLoginRequest() {
        DtoLoginRequest req = new DtoLoginRequest();
        req.setEmail("test@test.com");
        req.setPassword("password");
        return req;
    }

    private DtoRegisterRequest getValidRegisterRequest() {
        DtoRegisterRequest req = new DtoRegisterRequest();
        req.setEmail("new@test.com");
        req.setPassword("password");
        req.setFirstName("Jane");
        req.setSurName("Doe");
        req.setRole("BARBER");
        return req;
    }

    @Test
    void testLogin_Success() {
        when(repositoryUser.findByEmail(anyString())).thenReturn(Optional.of(mockUser));
        ResponseEntity<DtoLoginResponse> res = target.actionLogin(getValidLoginRequest());
        assertEquals(200, res.getStatusCode().value());
        assertNotNull(res.getBody().getToken());
    }

    @Test
    void testLogin_UserNotFound() {
        when(repositoryUser.findByEmail(anyString())).thenReturn(Optional.empty());
        ResponseEntity<DtoLoginResponse> res = target.actionLogin(getValidLoginRequest());
        assertEquals(401, res.getStatusCode().value());
    }

    @Test
    void testLogin_UserInactive() {
        mockUser.setStatus(0);
        when(repositoryUser.findByEmail(anyString())).thenReturn(Optional.of(mockUser));
        ResponseEntity<DtoLoginResponse> res = target.actionLogin(getValidLoginRequest());
        assertEquals(401, res.getStatusCode().value());
    }

    @Test
    void testLogin_WrongPassword() {
        when(repositoryUser.findByEmail(anyString())).thenReturn(Optional.of(mockUser));
        when(passwordEncoder.matches(anyString(), anyString())).thenReturn(false);
        ResponseEntity<DtoLoginResponse> res = target.actionLogin(getValidLoginRequest());
        assertEquals(401, res.getStatusCode().value());
    }

    @Test
    void testRegister_Success() {
        when(repositoryUser.findByEmail(anyString())).thenReturn(Optional.empty());
        ResponseEntity<DtoLoginResponse> res = target.actionRegister(getValidRegisterRequest());
        assertEquals(200, res.getStatusCode().value());
        assertNotNull(res.getBody().getToken());
    }

    @Test
    void testRegister_DefaultRole() {
        when(repositoryUser.findByEmail(anyString())).thenReturn(Optional.empty());
        DtoRegisterRequest req = getValidRegisterRequest();
        req.setRole(null);
        ResponseEntity<DtoLoginResponse> res = target.actionRegister(req);
        assertEquals(200, res.getStatusCode().value());
        assertEquals("BARBER", res.getBody().getRole());
    }

    @Test
    void testRegister_EmailExists() {
        when(repositoryUser.findByEmail(anyString())).thenReturn(Optional.of(mockUser));
        ResponseEntity<DtoLoginResponse> res = target.actionRegister(getValidRegisterRequest());
        assertEquals(400, res.getStatusCode().value());
    }
}
