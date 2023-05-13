package com.examly.AdmissionPortal.Dao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.examly.AdmissionPortal.Entities.Student;

@Repository
	public interface StudentDao extends JpaRepository<Student,Integer>{
	}