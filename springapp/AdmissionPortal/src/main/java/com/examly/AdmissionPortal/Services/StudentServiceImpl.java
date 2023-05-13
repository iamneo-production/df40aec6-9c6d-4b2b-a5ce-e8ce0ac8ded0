package com.examly.AdmissionPortal.Services;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.examly.AdmissionPortal.Dao.StudentDao;
import com.examly.AdmissionPortal.Entities.Student;

@Service
public class StudentServiceImpl implements StudentService {
	@Autowired
	private StudentDao studentdao;

	@Override
	public List<Student> allstudents() {
		return studentdao.findAll();
		
	}

	@Override
	public void addStudent(Student student) {
		studentdao.save(student);
		
	}

	@Override
	public Student getStudent(int id) {
		return studentdao.findById(id).get();
	}

	@Override
	public void updateStudent(Student student) {
		studentdao.save(student);
	}

	@Override
	public void deleteStudent(int id) {
		Student Stu = studentdao.findById(id).get(); 
		studentdao.delete(Stu);
		
	}

}