package com.example.springapp.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.springapp.Payloads.StudentDto;
import com.example.springapp.model.Student;
import com.example.springapp.repository.StudentRepo;
import com.example.springapp.service.StudentService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
@CrossOrigin("https://8081-adeafdcbcabefdeccdcaedbbeaeaadbdbabf.project.examly.io/")
@RequestMapping("/api/v1/auth/")
public class StudentController {
	private Logger logger = LoggerFactory.getLogger(CourseController.class);
	
	@Autowired
	private StudentRepo studentRepo;
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
	
	//@PreAuthorize("hasRole('ADMIN')")
	@GetMapping("/students")   // localhost:8080/students
	public List<StudentDto> allstudents() {
	return this.studentservice.allstudents();
		
		
	}
	@PostMapping("/students") 
	public String savestudents(@RequestBody Student student){
		return this.studentservice.addStudent(student);
		
		
	}
	
	//@PreAuthorize("hasRole('ROLE_NORMAL')")
	@GetMapping("/students/{id}")
	public StudentDto getStudent(@PathVariable int id) {
		return this.studentservice.getStudent(id);
	}
	@PutMapping("/students/{id}")
	public void updateStudent(@PathVariable int id,@RequestBody Student student) {
		this.studentservice.updateStudent(id,student);
		
	}
	
	@PreAuthorize("hasRole('ADMIN')")
	@DeleteMapping("/students/{id}")
	public void deleteStudent(@PathVariable int id) {
		this.studentservice.deleteStudent(id);
	}
	
    @GetMapping("/students/count")
    public ResponseEntity<Integer> getStudentCount() {
		
	    int count = (int) studentRepo.count();
	    logger.info("Retrieved count of students: " + count);
	    return new ResponseEntity<>(count, HttpStatus.OK);
    }	
	
	
}
