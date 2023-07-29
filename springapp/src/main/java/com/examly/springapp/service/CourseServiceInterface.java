package com.examly.springapp.service;

import java.util.List;

import com.examly.springapp.model.Course;

public interface CourseServiceInterface {
	public List<Course> getCourses();
	public Course getCourse(int id); 
	public String addCourse(Course course);
	public Course updateCourse(Course course);
	public void deleteCourse(int id); 
}




