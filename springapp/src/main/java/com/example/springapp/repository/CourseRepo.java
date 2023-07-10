package com.example.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.springapp.model.Course;


public interface CourseRepo extends JpaRepository<Course, Integer> {

}


