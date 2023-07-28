package com.examly.springapp.controller;

import java.util.List;

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
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.model.Course;
import com.examly.springapp.model.Student;
import com.examly.springapp.model.Enrollment;
import com.examly.springapp.repository.CourseRepo;
import com.examly.springapp.repository.EnrollmentRepo;
import com.examly.springapp.repository.StudentRepo;

import javax.persistence.EntityNotFoundException;

@RestController
@CrossOrigin("http://localhost:3000")
public class EnrollmentController {
	private Logger logger = (Logger) LoggerFactory.getLogger(StudentController.class);

	@Autowired
	EnrollmentRepo eRepo;

	@Autowired
	StudentRepo sRepo;

	@Autowired
	CourseRepo cRepo;

	// Student side enrolling
	@PostMapping("/enroll/{student_id}/{course_id}")
	public ResponseEntity enrollCourse(@PathVariable int student_id, @PathVariable int course_id) {
		Student s = sRepo.findById(student_id).get();
		Course c = cRepo.findById(course_id).get();
		Enrollment e = new Enrollment();
		e.setCourse(c);
		e.setStudent(s);
		e.setGrade("Incomplete");
		eRepo.save(e);
		return new ResponseEntity<Enrollment>(e, HttpStatus.OK);
	}

	@PostMapping("/enroll")
	public ResponseEntity<Enrollment> course(@RequestBody Enrollment enroll) {
		eRepo.save(enroll);
		logger.info("Registered a new course: {}", enroll);
		return new ResponseEntity<Enrollment>(enroll, HttpStatus.OK);
	}

	// Admin side getting all enrolls
	@GetMapping("/allEnrolls")
	public ResponseEntity<List<Enrollment>> getAllEnrolls() {
		List<Enrollment> enroll = eRepo.findAll();
		logger.info("Retrieved all enrolls");
		return new ResponseEntity<List<Enrollment>>(enroll, HttpStatus.OK);
	}

	// Get enrollment by student Id
	@GetMapping("/enrollmentsbyId/{student_id}")
	public ResponseEntity<List<Enrollment>> getEnrollsByStudentId(@PathVariable int student_id) {
		List<Enrollment> enroll = eRepo.findByStudentid(student_id);
		logger.info("Retrieved all enrolls");
		return new ResponseEntity<List<Enrollment>>(enroll, HttpStatus.OK);
	}

	// Delete enrollment
	@DeleteMapping("/delenroll/{enroll_id}")
	public ResponseEntity<?> deleteEnroll(@PathVariable int enroll_id) {

		eRepo.deleteById(enroll_id);
		logger.info("Deleted enroll with ID: {}", enroll_id);
		return ResponseEntity.ok().build();

	}

	// Update grade
	@PutMapping("/GradeChange/{grade}/{enroll_id}")
	public ResponseEntity gradeChange(@PathVariable String grade, @PathVariable int enroll_id) {
		Enrollment e = eRepo.findById(enroll_id).get();
		e.setGrade(grade);
		eRepo.save(e);
		logger.info("updated grade for ID: {}", enroll_id);
		return new ResponseEntity<Enrollment>(e, HttpStatus.OK);

	}

	@GetMapping("/enrollment/count")
	public ResponseEntity<Integer> getEnrollmentCount() {
		int count = (int) eRepo.count();
		logger.info("Retrieved count of enrollments: " + count);
		return new ResponseEntity<>(count, HttpStatus.OK);
	}

}
