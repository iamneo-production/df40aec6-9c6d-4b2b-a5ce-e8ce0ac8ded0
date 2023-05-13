package com.examly.AdmissionPortal.Services;

import java.util.List;

import com.examly.AdmissionPortal.Entities.Student;

public interface StudentService {
	public List<Student> allstudents();

	public void addStudent(Student student);
	public Student getStudent( int id);
	public void updateStudent( Student student);

	public void deleteStudent(int id);

}