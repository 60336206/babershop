package com.epiis.apibarbershop.controller;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import static org.junit.jupiter.api.Assertions.assertDoesNotThrow;
import java.util.Date;
import java.util.Optional;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.web.multipart.MultipartFile;
import com.epiis.apibarbershop.repository.*;
import com.epiis.apibarbershop.business.*;
import com.epiis.apibarbershop.security.*;
import org.springframework.security.crypto.password.PasswordEncoder;
import com.epiis.apibarbershop.service.TwilioService;
import com.epiis.apibarbershop.dto.request.*;

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

    private void fillDto(Object dto) {
        for (java.lang.reflect.Method m : dto.getClass().getMethods()) {
            if (m.getName().startsWith("set") && m.getParameterCount() == 1) {
                Class<?> type = m.getParameterTypes()[0];
                try {
                    if (type == String.class) m.invoke(dto, "999999999");
                    else if (type == Integer.class || type == int.class) m.invoke(dto, 1);
                    else if (type == Boolean.class || type == boolean.class) m.invoke(dto, true);
                    else if (type == Date.class) m.invoke(dto, new Date());
                    else if (type == Double.class || type == double.class) m.invoke(dto, 1.0);
                } catch(Exception e) {}
            }
        }
    }

    @Test
    void testActionLogin() {
        assertDoesNotThrow(() -> {
            DtoLoginRequest req = new DtoLoginRequest();
            fillDto(req);
            target.actionLogin(req);
        });
    }

    @Test
    void testActionRegister() {
        assertDoesNotThrow(() -> {
            DtoRegisterRequest req = new DtoRegisterRequest();
            fillDto(req);
            target.actionRegister(req);
        });
    }

}
