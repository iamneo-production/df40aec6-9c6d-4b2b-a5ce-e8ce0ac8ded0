package com.example.springapp.repository;


	import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.springapp.model.Student;



@Repository
	public interface StudentRepo extends JpaRepository<Student,Integer>{

	Optional<Student> findByEmail(String name);
	
    @Query(value = "select * from student where email =:userEmail", nativeQuery = true)
    Student findByUserEmail(@Param("userEmail") String userEmail);

	
		
		
}


