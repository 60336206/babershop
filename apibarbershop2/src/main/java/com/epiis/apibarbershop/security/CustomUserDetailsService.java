package com.epiis.apibarbershop.security;

import org.springframework.security.core.userdetails.*;
import org.springframework.stereotype.Service;

import com.epiis.apibarbershop.entity.EntityUser;
import com.epiis.apibarbershop.repository.RepositoryUser;

@Service
public class CustomUserDetailsService implements UserDetailsService {

	private final RepositoryUser repositoryUser;

	public CustomUserDetailsService(RepositoryUser repositoryUser) {
		this.repositoryUser = repositoryUser;
	}

	@Override
	public UserDetails loadUserByUsername(String email)
			throws UsernameNotFoundException {

		EntityUser user = repositoryUser
				.findByEmail(email)
				.orElseThrow(() ->
						new UsernameNotFoundException("Usuario no encontrado"));

		return new UserPrincipal(user);
	}
}
