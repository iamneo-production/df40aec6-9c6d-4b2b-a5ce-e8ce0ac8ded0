package com.examly.springapp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.examly.springapp.model.Enrollment;



public interface EnrollmentRepo extends JpaRepository <Enrollment, Integer>{
	@Query(value="update enroll set status=:status where enroll_id=:enroll_id;", nativeQuery = true)
	public List<Enrollment> alterStatus(@Param(value="status")String status,@Param(value="enroll_id")int enroll_id);

	@Query(value="select * from enrollment where student_id=:student_id",nativeQuery = true)
    public List<Enrollment> findByStudentid(@Param(value="student_id")int student_id);

	

}
