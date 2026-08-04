package com.epiis.apibarbershop.security;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;

import com.epiis.apibarbershop.entity.EntityUser;

class UserPrincipalTest {

    @Test
    void testUserPrincipal() {
        EntityUser user = new EntityUser();
        user.setIdUser("user-id");
        user.setEmail("test@test.com");
        user.setPassword("password");
        user.setRole("ADMIN");
        user.setStatus(1); // Set status to avoid NPE
        
        UserPrincipal principal = new UserPrincipal(user);

        assertEquals("test@test.com", principal.getUsername());
        assertEquals("password", principal.getPassword());
        assertTrue(principal.isAccountNonExpired());
        assertTrue(principal.isAccountNonLocked());
        assertTrue(principal.isCredentialsNonExpired());
        assertTrue(principal.isEnabled());
    }
}
