package com.examly.springapp.service;

import java.util.List;


import com.examly.springapp.model.Student;

public interface StudentServiceInterface {
	public List<Student> allstudents();
	public String addStudent(Student student);
	public Student getStudent( int id);
	public void updateStudent( Student student);
	public void deleteStudent(int id); 

}
