package com.examly.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.examly.springapp.model.Course;


public interface CourseRepo extends JpaRepository<Course, Integer> {

}


