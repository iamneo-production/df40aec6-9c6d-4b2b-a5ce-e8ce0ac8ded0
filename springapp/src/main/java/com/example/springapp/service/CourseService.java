package com.example.springapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.springapp.model.Course;
import com.example.springapp.repository.CourseRepo;


import org.modelmapper.ModelMapper;
import com.example.springapp.Payloads.AdmissionDTO;
import com.example.springapp.Payloads.CourseDTO;
import com.example.springapp.model.Admission;
import com.example.springapp.service.CourseServiceInterface;

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
