package com.example.springapp.service;

import java.util.List;

import com.example.springapp.model.Course;

import com.example.springapp.Payloads.AdmissionDTO;
import com.example.springapp.Payloads.CourseDTO;
import com.example.springapp.model.Admission;
import com.example.springapp.service.CourseServiceInterface;
public interface CourseServiceInterface {
	public List<Course> getCourses();
	public Course getCourse(int id); 
	public String addCourse(Course course);
	public Course updateCourse(Course course);
	public void deleteCourse(int id); 
}



