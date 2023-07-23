package com.example.springapp.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.examly.springapp.exceptions.ResourceNotFoundException;
import com.examly.springapp.model.Student;
import com.examly.springapp.repository.StudentRepo;


@Service
public class CustomUserDetailService implements UserDetailsService {

	@Autowired
	private StudentRepo userRepo;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

		// loading user from database by username
		Student user = this.userRepo.findByEmail(username)
				.orElseThrow(() -> new ResourceNotFoundException("User ", " email : " + username, 0));

		return  user;
	}

}
