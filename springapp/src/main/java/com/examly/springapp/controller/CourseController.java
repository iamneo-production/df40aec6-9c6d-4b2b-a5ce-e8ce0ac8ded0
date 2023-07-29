package com.examly.springapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.model.Course;
import com.examly.springapp.service.CourseServiceInterface;


@RestController
@CrossOrigin("http://localhost:3000/") // connects the back end with front end
public class CourseController {
	@Autowired
	private CourseServiceInterface courseServices;
	@GetMapping("/courses")
	public List<Course> getCourses() {
		 return this.courseServices.getCourses();
	}
	
	@GetMapping("/courses/{id}")
	public Course getCourse(@PathVariable String id) {
		return this.courseServices.getCourse(Integer.parseInt(id));
	}
	@PostMapping("/courses")
	public String addCourse(@RequestBody Course course) {
		return this.courseServices.addCourse(course);
	}
	@PutMapping("/courses/{id}")
	public Course putCourse(@RequestBody Course course) {
		return this.courseServices.updateCourse(course);
	}
	@DeleteMapping("/courses/{id}")
	public ResponseEntity<HttpStatus> deleteCourse(@PathVariable String id) {
		try {
			this.courseServices.deleteCourse(Integer.parseInt(id));
			return new ResponseEntity<>(HttpStatus.OK);
		}
		catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

}

