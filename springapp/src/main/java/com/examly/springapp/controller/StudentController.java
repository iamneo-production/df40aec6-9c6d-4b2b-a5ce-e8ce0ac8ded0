package com.examly.springapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.model.Student;
import com.examly.springapp.service.StudentService;

@RestController
@CrossOrigin
public class StudentController {
	@Autowired
	private StudentService studentservice;
//	POST /students: create a new student
//
//	 GET /students/{id}: get a specific student by ID
//
//	 PUT /students/{id}: update a specific student by ID
//
//	 DELETE /students/{id}: delete a specific student by ID
//
//	 GET /students: get a list of all students
	@GetMapping("/students")   // localhost:8080/students
	public List<Student> allstudents() {
	return this.studentservice.allstudents();
		
		
	}
	@PostMapping("/students") 
	public String savestudents(@RequestBody Student student){
		return this.studentservice.addStudent(student);
		
		
	}
	@GetMapping("/students/{id}")
	public Student getStudent(@PathVariable int id) {
		return this.studentservice.getStudent(id);
	}
	@PutMapping("/students/{id}")
	public void updateStudent(@RequestBody Student student) {
		this.studentservice.updateStudent(student);
		
	}
	@DeleteMapping("/students/{id}")
	public void deleteStudent(@PathVariable int id) {
		this.studentservice.deleteStudent(id);
	}
	
	
	

}
