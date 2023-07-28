package com.examly.springapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springapp.model.Course;
import com.examly.springapp.repository.CourseRepo;

@Service
public class CourseService implements CourseServiceInterface{
	
	@Autowired
	private CourseRepo coursesDao;
	
	public CourseService() {

	}
	
	@Override
	public List<Course> getCourses() {
		return coursesDao.findAll();
	}
	@Override
	public Course getCourse(int id) {
		return coursesDao.findById(id).get();	 
	}
	@Override
	public String addCourse(Course course) {
		coursesDao.save(course);
		return "true";
	}
	@Override
	public Course updateCourse(Course course) {
		
		coursesDao.save(course);
		return course;
	}
	@Override
	public void deleteCourse(int id) {
		
		coursesDao.deleteById(id);
		
	}
}
