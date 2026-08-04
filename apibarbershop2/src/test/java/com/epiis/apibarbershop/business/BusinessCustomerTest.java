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

import com.epiis.apibarbershop.dto.request.RequestCustomerInsert;
import com.epiis.apibarbershop.dto.request.RequestCustomerUpdate;
import com.epiis.apibarbershop.dto.response.ResponseCustomerDelete;
import com.epiis.apibarbershop.dto.response.ResponseCustomerGetAll;
import com.epiis.apibarbershop.dto.response.ResponseCustomerGetOne;
import com.epiis.apibarbershop.dto.response.ResponseCustomerInsert;
import com.epiis.apibarbershop.dto.response.ResponseCustomerUpdate;
import com.epiis.apibarbershop.entity.EntityCustomer;
import com.epiis.apibarbershop.entity.EntityUser;
import com.epiis.apibarbershop.repository.RepositoryCustomer;
import com.epiis.apibarbershop.repository.RepositoryUser;

@ExtendWith(MockitoExtension.class)
@SuppressWarnings("all")
class BusinessCustomerTest {

    @InjectMocks
    private BusinessCustomer target;

    @Mock
    private RepositoryCustomer repositoryCustomer;
    
    @Mock
    private RepositoryUser repositoryUser;

    @Mock
    private PasswordEncoder passwordEncoder;

    @BeforeEach
    void setUp() {
        EntityCustomer customer = new EntityCustomer();
        customer.setIdCustomer("customer-id");
        customer.setEmail("test@test.com");
        customer.setPhone("123456789");
        lenient().when(repositoryCustomer.findById(anyString())).thenReturn(Optional.of(customer));
        lenient().when(repositoryCustomer.findAll()).thenReturn(List.of(customer));
        lenient().when(repositoryCustomer.save(any())).thenReturn(customer);
        lenient().when(passwordEncoder.encode(anyString())).thenReturn("encoded-password");
        
        lenient().when(repositoryUser.findByEmail(anyString())).thenReturn(Optional.empty());
        lenient().when(repositoryUser.findByPhone(anyString())).thenReturn(Optional.empty());
        lenient().when(repositoryCustomer.findByEmail(anyString())).thenReturn(Optional.empty());
        lenient().when(repositoryCustomer.findByPhone(anyString())).thenReturn(Optional.empty());
    }

    @Test
    void testInsert_Success() {
        RequestCustomerInsert req = new RequestCustomerInsert();
        req.setFirstName("First");
        req.setSurName("Last");
        req.setEmail("new@test.com");
        req.setPhone("987654321");
        // req.setPassword("Password123"); password is in User entity not CustomerInsert wait
        ResponseCustomerInsert res = target.insert(req);
        assertEquals("success", res.getType());
    }

    @Test
    void testInsert_Validation() {
        RequestCustomerInsert req = new RequestCustomerInsert(); // Empty
        ResponseCustomerInsert res = target.insert(req);
        assertEquals("error", res.getType());
    }

    @Test
    void testUpdate_Success() {
        RequestCustomerUpdate req = new RequestCustomerUpdate();
        req.setIdCustomer("customer-id");
        req.setFirstName("First");
        req.setSurName("Last");
        req.setEmail("new@test.com");
        req.setPhone("987654321");
        ResponseCustomerUpdate res = target.update(req);
        assertEquals("success", res.getType());
    }

    @Test
    void testUpdate_Validation() {
        RequestCustomerUpdate req = new RequestCustomerUpdate();
        req.setIdCustomer("customer-id");
        ResponseCustomerUpdate res = target.update(req);
        assertEquals("error", res.getType());
    }

    @Test
    void testGetAll() {
        ResponseCustomerGetAll res = target.getall();
        assertEquals("success", res.getType());
    }

    @Test
    void testGetOne() {
        ResponseCustomerGetOne res = target.getone("customer-id");
        assertEquals("success", res.getType());
    }

    @Test
    void testInsert_SurNameTooShort() {
        RequestCustomerInsert req = new RequestCustomerInsert();
        req.setFirstName("First");
        req.setSurName("La");
        ResponseCustomerInsert res = target.insert(req);
        assertEquals("error", res.getType());
    }

    @Test
    void testInsert_PhoneEmpty() {
        RequestCustomerInsert req = new RequestCustomerInsert();
        req.setFirstName("First");
        req.setSurName("Last");
        req.setPhone("");
        ResponseCustomerInsert res = target.insert(req);
        assertEquals("error", res.getType());
    }

    @Test
    void testInsert_PhoneInvalidFormat() {
        RequestCustomerInsert req = new RequestCustomerInsert();
        req.setFirstName("First");
        req.setSurName("Last");
        req.setPhone("123");
        ResponseCustomerInsert res = target.insert(req);
        assertEquals("error", res.getType());
    }

    @Test
    void testInsert_PhoneExists() {
        EntityCustomer other = new EntityCustomer();
        other.setIdCustomer("other-id");
        when(repositoryCustomer.findByPhone(anyString())).thenReturn(Optional.of(other));

        RequestCustomerInsert req = new RequestCustomerInsert();
        req.setFirstName("First");
        req.setSurName("Last");
        req.setPhone("987654321");
        ResponseCustomerInsert res = target.insert(req);
        assertEquals("error", res.getType());
    }

    @Test
    void testInsert_InvalidEmail() {
        RequestCustomerInsert req = new RequestCustomerInsert();
        req.setFirstName("First");
        req.setSurName("Last");
        req.setPhone("987654321");
        req.setEmail("bad-email");
        ResponseCustomerInsert res = target.insert(req);
        assertEquals("error", res.getType());
    }

    @Test
    void testInsert_EmailExists() {
        EntityCustomer other = new EntityCustomer();
        other.setIdCustomer("other-id");
        when(repositoryCustomer.findByEmail(anyString())).thenReturn(Optional.of(other));

        RequestCustomerInsert req = new RequestCustomerInsert();
        req.setFirstName("First");
        req.setSurName("Last");
        req.setPhone("987654321");
        req.setEmail("taken@test.com");
        ResponseCustomerInsert res = target.insert(req);
        assertEquals("error", res.getType());
    }

    @Test
    void testUpdate_NotFound() {
        when(repositoryCustomer.findById(anyString())).thenReturn(Optional.empty());
        RequestCustomerUpdate req = new RequestCustomerUpdate();
        req.setIdCustomer("missing");
        ResponseCustomerUpdate res = target.update(req);
        assertEquals("error", res.getType());
    }

    @Test
    void testUpdate_PhoneExistsOtherCustomer() {
        EntityCustomer other = new EntityCustomer();
        other.setIdCustomer("other-id");
        when(repositoryCustomer.findByPhone(anyString())).thenReturn(Optional.of(other));

        RequestCustomerUpdate req = new RequestCustomerUpdate();
        req.setIdCustomer("customer-id");
        req.setFirstName("First");
        req.setSurName("Last");
        req.setPhone("987654321");
        ResponseCustomerUpdate res = target.update(req);
        assertEquals("error", res.getType());
    }

    @Test
    void testUpdate_PhoneExistsInUsers() {
        when(repositoryUser.findByPhone(anyString())).thenReturn(Optional.of(new EntityUser()));

        RequestCustomerUpdate req = new RequestCustomerUpdate();
        req.setIdCustomer("customer-id");
        req.setFirstName("First");
        req.setSurName("Last");
        req.setPhone("987654321");
        ResponseCustomerUpdate res = target.update(req);
        assertEquals("error", res.getType());
    }

    @Test
    void testUpdate_InvalidEmail() {
        RequestCustomerUpdate req = new RequestCustomerUpdate();
        req.setIdCustomer("customer-id");
        req.setFirstName("First");
        req.setSurName("Last");
        req.setPhone("987654321");
        req.setEmail("bad-email");
        ResponseCustomerUpdate res = target.update(req);
        assertEquals("error", res.getType());
    }

    @Test
    void testUpdate_EmailExistsOtherCustomer() {
        EntityCustomer other = new EntityCustomer();
        other.setIdCustomer("other-id");
        when(repositoryCustomer.findByEmail(anyString())).thenReturn(Optional.of(other));

        RequestCustomerUpdate req = new RequestCustomerUpdate();
        req.setIdCustomer("customer-id");
        req.setFirstName("First");
        req.setSurName("Last");
        req.setPhone("987654321");
        req.setEmail("taken@test.com");
        ResponseCustomerUpdate res = target.update(req);
        assertEquals("error", res.getType());
    }

    @Test
    void testUpdate_EmailExistsInUsers() {
        when(repositoryUser.findByEmail(anyString())).thenReturn(Optional.of(new EntityUser()));

        RequestCustomerUpdate req = new RequestCustomerUpdate();
        req.setIdCustomer("customer-id");
        req.setFirstName("First");
        req.setSurName("Last");
        req.setPhone("987654321");
        req.setEmail("taken@test.com");
        ResponseCustomerUpdate res = target.update(req);
        assertEquals("error", res.getType());
    }

    @Test
    void testUpdate_WithStatus() {
        RequestCustomerUpdate req = new RequestCustomerUpdate();
        req.setIdCustomer("customer-id");
        req.setFirstName("First");
        req.setSurName("Last");
        req.setEmail("new@test.com");
        req.setPhone("987654321");
        req.setStatus(1);
        ResponseCustomerUpdate res = target.update(req);
        assertEquals("success", res.getType());
    }

    @Test
    void testDelete_Success() {
        ResponseCustomerDelete res = target.delete("customer-id");
        assertEquals("success", res.getType());
    }

    @Test
    void testDelete_NotFound() {
        when(repositoryCustomer.findById(anyString())).thenReturn(Optional.empty());
        ResponseCustomerDelete res = target.delete("missing");
        assertEquals("error", res.getType());
    }

    @Test
    void testGetOne_NotFound() {
        when(repositoryCustomer.findById(anyString())).thenReturn(Optional.empty());
        ResponseCustomerGetOne res = target.getone("missing");
        assertEquals("error", res.getType());
    }
}
