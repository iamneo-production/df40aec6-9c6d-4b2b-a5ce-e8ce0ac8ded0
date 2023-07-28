package com.example.springapp.controller;

import java.util.ArrayList;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.springapp.Payloads.AdmissionDTO;
import com.example.springapp.Payloads.CourseDTO;
import com.example.springapp.model.Admission;
import com.example.springapp.model.Course;
import com.example.springapp.service.CourseServiceInterface;
import com.example.springapp.repository.CourseRepo;


@RestController
@CrossOrigin("https://8081-febddaaaeddabefdeccdcaedbbeaeaadbdbabf.project.examly.io/") // connects the back end with front end
@RequestMapping("/api/v1/auth/")
public class CourseController {
	@Autowired
	private CourseServiceInterface courseServices;
	private Logger logger = LoggerFactory.getLogger(CourseController.class);
	
	
	@Autowired
	private ModelMapper modelMapper;
	
	@Autowired
	private CourseRepo coursesRepo;
	
	
	@GetMapping("/courses")
	public List<CourseDTO> getCourses() {
		
        List<Course> co =  this.courseServices.getCourses();
        
        List<CourseDTO> ads = new ArrayList<>();
        
        for(Course ad : co) {
        	CourseDTO ans = this.modelMapper.map(ad, CourseDTO.class);
        	ads.add(ans);
        	
        }
        return ads;
        
      
	}
	
	@GetMapping("/courses/{id}")
	public CourseDTO getCourse(@PathVariable String id) {
		//return this.courseServices.getCourse(Integer.parseInt(id));
		
		
		Course admissionOptional = this.courseServices.getCourse(Integer.parseInt(id));

        
        CourseDTO ans = this.modelMapper.map(admissionOptional, CourseDTO.class);
        
        return ans;
        
	}
	@GetMapping("/courses/count")
    public ResponseEntity<Integer> getCourseCount() {
		
	    int count = (int) coursesRepo.count();
	    logger.info("Retrieved count of courses: " + count);
	    return new ResponseEntity<>(count, HttpStatus.OK);
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