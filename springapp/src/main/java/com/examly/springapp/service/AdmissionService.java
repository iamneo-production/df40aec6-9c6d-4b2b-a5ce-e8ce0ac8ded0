package com.examly.springapp.service;


import com.examly.springapp.model.Admission;
import com.examly.springapp.repository.AdmissionRepo;
import com.examly.springapp.repository.StudentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdmissionService {
    private final AdmissionRepo admissionRepository;
    private final StudentRepo studentRepository;

    @Autowired
    public AdmissionService(AdmissionRepo admissionRepository, StudentRepo studentRepository) {
        this.admissionRepository = admissionRepository;
        this.studentRepository = studentRepository;
    }



    public Admission createAdmission(Admission admission) {
        return admissionRepository.save(admission);
    }


    public Admission getAdmissionById(int id) {
        return admissionRepository.findById(id).orElse(null);
    }

    public Admission updateAdmission(int id, Admission updatedAdmission) {
        Admission admission = admissionRepository.findById(id).orElse(null);
        if (admission != null) {
            admission.setStatus(updatedAdmission.getStatus());
            admission.setRequiredDocuments(updatedAdmission.getRequiredDocuments());
            return admissionRepository.save(admission);
        }
        return null;
    }


    public void deleteAdmission(int id) {
        admissionRepository.deleteById(id);
    }

    public List<Admission> getAllAdmissions() {
        return admissionRepository.findAll();
    }
}
