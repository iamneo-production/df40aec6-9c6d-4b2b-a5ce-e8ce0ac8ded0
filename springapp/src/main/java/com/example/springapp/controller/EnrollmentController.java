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

import com.example.springapp.Payloads.EnrollmentDto;
import com.example.springapp.model.Course;
import com.example.springapp.model.Enrollment;
import com.example.springapp.model.Student;
import com.example.springapp.repository.CourseRepo;
import com.example.springapp.repository.EnrollmentRepo;
import com.example.springapp.repository.StudentRepo;

import javax.persistence.EntityNotFoundException;




@RestController
@CrossOrigin("https://8081-cedbebdcdafeedaabefdeccdcaedbbeaeaadbdbabf.project.examly.io/")
@RequestMapping("/api/v1/auth/")
public class EnrollmentController {
	private Logger logger = (Logger) LoggerFactory.getLogger(StudentController.class);

	@Autowired
	EnrollmentRepo eRepo;

	@Autowired
	StudentRepo sRepo;

	@Autowired
	CourseRepo cRepo;
	
	@Autowired
	private ModelMapper modelMapper;
    
	//Student side enrolling
	@PostMapping("/enroll/{student_id}/{course_id}")
	public String  enrollCourse(@PathVariable int student_id, @PathVariable int course_id) {
		Student s = sRepo.findById(student_id).get();
		Course c = cRepo.findById(course_id).get();
		Enrollment e = new Enrollment();
		e.setCourse(c);
		e.setStudent(s);
		e.setGrade("Incomplete");
		eRepo.save(e);
		return "Added";
	}
	
	
	
	 @PostMapping("/enroll")
	    public EnrollmentDto course(@RequestBody Enrollment enroll) {
	        eRepo.save(enroll);
	        logger.info("Registered a new course: {}", enroll);
	        
	        return this.modelMapper.map(enroll, EnrollmentDto.class);
	        
	        
	    }
	
	
	 //Admin side getting all enrolls
	 @GetMapping("/allEnrolls")
	    public List<EnrollmentDto> getAllEnrolls() {
		 
		 
	        List<Enrollment> enroll = eRepo.findAll();
		    logger.info("Retrieved all enrolls");

		    List<EnrollmentDto> enrollmentDtos = new ArrayList<>();

		    for (Enrollment enrollment : enroll) {
		        EnrollmentDto enrollmentDto = modelMapper.map(enrollment, EnrollmentDto.class);
		        enrollmentDtos.add(enrollmentDto);
		    }

		    return enrollmentDtos;
	    }
	 
	 
	 //Get enrollment by student Id 
	 @GetMapping("/enrollmentsbyId/{student_id}")
	 public List<EnrollmentDto> getEnrollsByStudentId(@PathVariable int student_id) {
		    List<Enrollment> enrollments = eRepo.findByStudentid(student_id);
		    logger.info("Retrieved all enrolls");

		    List<EnrollmentDto> enrollmentDtos = new ArrayList<>();

		    for (Enrollment enrollment : enrollments) {
		        EnrollmentDto enrollmentDto = modelMapper.map(enrollment, EnrollmentDto.class);
		        enrollmentDtos.add(enrollmentDto);
		    }

		    return enrollmentDtos;
	        
	    }
	 
	 
	 //Delete enrollment
	 @DeleteMapping("/delenroll/{enroll_id}")
	    public ResponseEntity<?> deleteEnroll(@PathVariable int enroll_id) {
	       
	            eRepo.deleteById(enroll_id);
	            logger.info("Deleted enroll with ID: {}", enroll_id);
	            return ResponseEntity.ok().build();
	           
	    }
	 @DeleteMapping("/enrollment/student/{student_id}")
	 public ResponseEntity<Void> deleteEnrollmentsByStudentId(@PathVariable int student_id) {
	     try {
	         Student student = sRepo.getById(student_id);
	         List<Enrollment> enrollments = student.getEnroll();
	         
	         if (!enrollments.isEmpty()) {
	             eRepo.deleteAll(enrollments);
	             enrollments.clear(); 
	             return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	         } else {
	             return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	         }
	     } catch (EntityNotFoundException e) {
	         return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	     }
	 }
	 
	 //Update grade
	 @PutMapping("/GradeChange/{grade}/{enroll_id}")
	 public ResponseEntity gradeChange(@PathVariable String grade, @PathVariable int enroll_id) {
		 Enrollment e=eRepo.findById(enroll_id).get();
		 e.setGrade(grade);
		 eRepo.save(e); 
		 logger.info("updated grade for ID: {}", enroll_id);
			return new ResponseEntity<Enrollment>(e, HttpStatus.OK);
		 
	 }
	 @DeleteMapping("/enrollment/course/{course_id}")
	 public ResponseEntity<Void> deleteEnrollmentsByCourseId(@PathVariable int course_id) {
	     try {
	         Course course = cRepo.getById(course_id);
	         List<Enrollment> enrollments = course.getEnroll();

	         if (!enrollments.isEmpty()) {
	             eRepo.deleteAll(enrollments);
	             enrollments.clear(); 
	             return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	         } else {
	             return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	         }
	     } catch (EntityNotFoundException e) {
	         return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	     }
	 }
	 
	 @GetMapping("/enrollment/count")
	    public ResponseEntity<Integer> getEnrollmentCount() {
	        int count = (int) eRepo.count();
	        logger.info("Retrieved count of enrollments: " + count);
	        return new ResponseEntity<>(count, HttpStatus.OK);
	    }

}

