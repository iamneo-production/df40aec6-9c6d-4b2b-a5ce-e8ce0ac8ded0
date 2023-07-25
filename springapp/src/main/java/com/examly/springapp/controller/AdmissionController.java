package com.examly.springapp.controller;


import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.model.Admission;
import com.examly.springapp.model.Student;
import com.examly.springapp.repository.AdmissionRepo;
import com.examly.springapp.repository.StudentRepo;

import jakarta.persistence.EntityNotFoundException;

@RestController
@CrossOrigin
public class AdmissionController {

    private Logger logger = LoggerFactory.getLogger(AdmissionController.class);

    @Autowired
    AdmissionRepo admissionRepo;

    @Autowired
    StudentRepo studentRepo;

    @PostMapping("/admissions/{id}")
    public ResponseEntity<Admission> createAdmission(@PathVariable int id) {
        Optional<Student> studentOptional = studentRepo.findById(id);
        if (studentOptional.isPresent()) {
            Student student = studentOptional.get();
            List<String> reqDoc = new ArrayList<>();
            reqDoc.add("passport_photo");
            reqDoc.add("Aadhar");
            reqDoc.add("10th_Marksheet");
            reqDoc.add("12th_Marksheet");
            reqDoc.add("bonafide_certificate");

            Admission admission = new Admission();
            admission.setStudent(student);
            admission.setStatus("Pending");
            admission.setRequiredDocuments(reqDoc);

            admissionRepo.save(admission);

            logger.info("Created admission with ID: " + admission.getAdm_id());

            return new ResponseEntity<>(admission, HttpStatus.OK);
        } else {
            logger.info("Student with ID " + id + " not found");
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/admissions")
    public ResponseEntity<List<Admission>> getAllAdmissions() {
        List<Admission> admissions = admissionRepo.findAll();
        logger.info("Retrieved all admissions");
        return new ResponseEntity<>(admissions, HttpStatus.OK);
    }

    @GetMapping("/admissions/{id}")
    public ResponseEntity<Admission> getAdmissionById(@PathVariable int id) {
        Optional<Admission> admissionOptional = admissionRepo.findById(id);

        if (admissionOptional.isPresent()) {
            Admission admission = admissionOptional.get();
            logger.info("Retrieved admission with ID: " + id);
            return new ResponseEntity<>(admission, HttpStatus.OK);
        } else {
            logger.info("Admission with ID: " + id + " not found");
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/admissions/student/{studentId}")
    public ResponseEntity<List<Admission>> getAdmissionsByStudentId(@PathVariable int studentId) {
        List<Admission> admissions = admissionRepo.findByStudentId(studentId);

        if (!admissions.isEmpty()) {
            logger.info("Retrieved admissions for student with ID: " + studentId);
            return new ResponseEntity<>(admissions, HttpStatus.OK);
        } else {
            logger.info("Admissions not found for student with ID: " + studentId);
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


    @PutMapping("/admissions/{id}/status")
    public ResponseEntity<Admission> changeAdmissionStatus(@PathVariable int id, @RequestBody String status) {
        Optional<Admission> admissionOptional = admissionRepo.findById(id);

        if (admissionOptional.isPresent()) {
            Admission admission = admissionOptional.get();
            admission.setStatus(status);
            admissionRepo.save(admission);
            logger.info("Changed status of admission with ID: " + id);
            return new ResponseEntity<>(admission, HttpStatus.OK);
        } else {
            logger.info("Admission with ID: " + id + " not found");
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


    @PutMapping("/admissions/student/{studentId}/status")
    public ResponseEntity<Admission> changeAdmissionStatusByStudentid(@PathVariable int studentId, @RequestBody String status) {
        List<Admission> admissions = admissionRepo.findByStudentId(studentId);
    
        if (!admissions.isEmpty()) {
            Admission admission = admissions.get(0);
            admission.setStatus(status);
            admissionRepo.save(admission);
            logger.info("Changed status of admission for student ID: " + studentId);
            return new ResponseEntity<>(admission, HttpStatus.OK);
        } else {
            logger.info("Admission for student ID: " + studentId + " not found");
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    




    @DeleteMapping("/admissions/{id}")
    public ResponseEntity<Void> deleteAdmission(@PathVariable int id) {
        Optional<Admission> admissionOptional = admissionRepo.findById(id);

        if (admissionOptional.isPresent()) {
            admissionRepo.deleteById(id);
            logger.info("Deleted admission with ID: " + id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            logger.info("Admission with ID: " + id + " not found");
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


    @GetMapping("/admissions/count")
    public ResponseEntity<Integer> getAdmissionsCount() {
        int count = (int) admissionRepo.count();
        logger.info("Retrieved count of admissions: " + count);
        return new ResponseEntity<>(count, HttpStatus.OK);
    }

    @DeleteMapping("/admissions/student/{studentId}")
    public ResponseEntity<Void> deleteAdmissionByStudentId(@PathVariable int studentId) {
        try {
            Student student = studentRepo.getById(studentId);
            Admission admission = null;
            for (Admission adm : student.getAdmissions()) {
                if (adm.getStudent().getId() == studentId) {
                    admission = adm;
                    break;
                }
            }
            if (admission != null) {
                admissionRepo.delete(admission);

                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }


        } catch (EntityNotFoundException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}