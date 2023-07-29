package com.examly.springapp.service;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springapp.model.Student;
import com.examly.springapp.repository.StudentRepo;
@Service
public class StudentService implements StudentServiceInterface {
	@Autowired
	private StudentRepo studentdao;

	@Override
	public List<Student> allstudents() {
		// TODO Auto-generated method stub
		
		return studentdao.findAll();
		
	}

	@Override
	public String addStudent(Student student) {
		// TODO Auto-generated method stub
		studentdao.save(student);
		return "true";
	}

	@Override
	public Student getStudent(int id) {
		// TODO Auto-generated method stub
		return studentdao.findById(id).get();
	}

	@Override
	public void updateStudent(Student student) {
		// TODO Auto-generated method stub
		studentdao.save(student);
	}

	@Override
	public void deleteStudent(int id) {
		// TODO Auto-generated method stub
		Student Stu = studentdao.findById(id).get(); 
		studentdao.delete(Stu);
		
	}

}

