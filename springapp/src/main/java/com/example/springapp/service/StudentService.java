package com.example.springapp.service;

import java.util.List;


import com.example.springapp.Payloads.StudentDto;
import com.example.springapp.model.Student;

import jakarta.mail.MessagingException;


public interface StudentService {
	
	StudentDto registerNewUser(StudentDto user);
	public List<StudentDto> allstudents();

	public String addStudent(Student student);
	public StudentDto getStudent( int id);
	public Student  updateStudent( int id ,Student student);

	public void deleteStudent(int id);
	StudentDto registerNewAdmin(StudentDto user); 
    String forgotPassword(String email) throws MessagingException;

    String setPassword(String email, String newPassword);

    //String resendOtp(String email) throws MessagingException;

    String verifyOtp(String email, String otp);

}
