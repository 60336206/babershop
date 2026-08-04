package com.epiis.apibarbershop.security;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.when;

import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.epiis.apibarbershop.entity.EntityUser;
import com.epiis.apibarbershop.repository.RepositoryUser;

@ExtendWith(MockitoExtension.class)
@SuppressWarnings("all")
class CustomUserDetailsServiceTest {

    @InjectMocks
    private CustomUserDetailsService target;

    @Mock
    private RepositoryUser repositoryUser;

    @Test
    void testLoadUserByUsername_Success() {
        EntityUser user = new EntityUser();
        user.setEmail("test@test.com");
        when(repositoryUser.findByEmail(anyString())).thenReturn(Optional.of(user));

        UserDetails details = target.loadUserByUsername("test@test.com");
        assertNotNull(details);
    }

    @Test
    void testLoadUserByUsername_NotFound() {
        when(repositoryUser.findByEmail(anyString())).thenReturn(Optional.empty());

        assertThrows(UsernameNotFoundException.class, () -> {
            target.loadUserByUsername("test@test.com");
        });
    }
}
