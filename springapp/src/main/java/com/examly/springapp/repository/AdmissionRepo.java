package com.examly.springapp.repository;



import com.examly.springapp.model.Admission;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AdmissionRepo extends JpaRepository<Admission, Integer> {
//    @Query(value="update adm set status=:status where adm=:adm_id;", nativeQuery = true)
//    public List<Admission> alterStatus(@Param(value="status")String status, @Param(value="adm_id")int adm_id);

    List<Admission> findByStudentId(int studentId);


}
