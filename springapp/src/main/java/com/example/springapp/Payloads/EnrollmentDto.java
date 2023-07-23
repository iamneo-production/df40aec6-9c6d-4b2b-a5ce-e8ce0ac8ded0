package com.example.springapp.Payloads;

import com.example.springapp.model.Course;
import com.example.springapp.model.Student;


public class EnrollmentDto {

	
	private int enroll_id;
	
	
    private CourseDTO course;
	

    private StudentDto student;
	
	
	private String grade;

	


	

	public EnrollmentDto(int enroll_id, CourseDTO course, StudentDto student, String grade) {
		super();
		this.enroll_id = enroll_id;
		this.course = course;
		this.student = student;
		this.grade = grade;
	}




	public CourseDTO getCourse() {
		return course;
	}




	public void setCourse(CourseDTO course) {
		this.course = course;
	}




	public EnrollmentDto() {
		super();
	}




	public int getEnroll_id() {
		return enroll_id;
	}


	public void setEnroll_id(int enroll_id) {
		this.enroll_id = enroll_id;
	}







	public StudentDto getStudent() {
		return student;
	}


	public void setStudent(StudentDto student) {
		this.student = student;
	}


	public String getGrade() {
		return grade;
	}


	public void setGrade(String grade) {
		this.grade = grade;
	}
	
	
}
