package com.example.springapp.controller;


import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.springapp.Payloads.AdmissionDTO;
import com.example.springapp.Payloads.EnrollmentDto;
import com.example.springapp.model.*;
import com.example.springapp.repository.AdmissionRepo;
import com.example.springapp.repository.StudentRepo;

import javax.persistence.EntityNotFoundException;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/auth/")
public class AdmissionController {

    private Logger logger = LoggerFactory.getLogger(AdmissionController.class);

    @Autowired
    AdmissionRepo admissionRepo;

    @Autowired
    StudentRepo studentRepo;

    
	@Autowired
	private ModelMapper modelMapper;
	
	
	
    @PostMapping("/admissions/{id}")
    public String createAdmission(@PathVariable int id) {
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

//            return new ResponseEntity<>(admission, HttpStatus.OK);
            return "hi";
        } else {
            logger.info("Student with ID " + id + " not found");
            //turn new ResponseEntity<>(HttpStatus.NOT_FOUND);
            return "bye";
        }
    }

    @GetMapping("/admissions")
    public List<AdmissionDTO> getAllAdmissions() {
        List<Admission> admissions = admissionRepo.findAll();
    
        List<AdmissionDTO> ads = new ArrayList<>();
        
        for(Admission ad : admissions) {
        	AdmissionDTO ans = this.modelMapper.map(ad, AdmissionDTO.class);
        	ads.add(ans);
        	
        }
        return ads;
        

//        
//        
//        logger.info("Retrieved all admissions");
//        return new ResponseEntity<>(admissions, HttpStatus.OK);
    }

    @GetMapping("/admissions/{id}")
    public AdmissionDTO getAdmissionById(@PathVariable int id) {
        Admission admissionOptional = admissionRepo.findById(id).orElseThrow(()->new RuntimeException("User Id is not found"));

        
        AdmissionDTO ans = this.modelMapper.map(admissionOptional, AdmissionDTO.class);
        
        return ans;
        

//        if (admissionOptional.isPresent()) {
//            Admission admission = admissionOptional.get();
//            logger.info("Retrieved admission with ID: " + id);
//            return new ResponseEntity<>(admission, HttpStatus.OK);
//        } else {
//            logger.info("Admission with ID: " + id + " not found");
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//        }
    }
    @GetMapping("/admissions/student/{studentId}")
    public List<AdmissionDTO> getAdmissionsByStudentId(@PathVariable int studentId) {
    	
    	
    	
    	
    	
        List<Admission> admissions = admissionRepo.findByStudentId(studentId);
        
        List<AdmissionDTO> ads = new ArrayList<>();
        
        for(Admission a : admissions) {
        	AdmissionDTO ans = this.modelMapper.map(a, AdmissionDTO.class);
        	ads.add(ans);
        	
        }
        return ads;
        
        
        

//        if (!admissions.isEmpty()) {
//            logger.info("Retrieved admissions for student with ID: " + studentId);
//            return new ResponseEntity<>(admissions, HttpStatus.OK);
//        } else {
//            logger.info("Admissions not found for student with ID: " + studentId);
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//        }
    }
    @GetMapping("/admissions/count")
    public ResponseEntity<Integer> getAdmissionsCount() {
        int count = (int) admissionRepo.count();
        logger.info("Retrieved count of admissions: " + count);
        return new ResponseEntity<>(count, HttpStatus.OK);
    }

    @PutMapping("/admissions/{id}/status")
    public String changeAdmissionStatus(@PathVariable int id, @RequestBody String status) {
        Optional<Admission> admissionOptional = admissionRepo.findById(id);

        if (admissionOptional.isPresent()) {
            Admission admission = admissionOptional.get();
            admission.setStatus(status);
            admissionRepo.save(admission);
            logger.info("Changed status of admission with ID: " + id);
            return "Done";
        } else {
            logger.info("Admission with ID: " + id + " not found");
            return "Failed";
        }
    }
    @PutMapping("/admissions/student/{studentId}/status")
    public String changeAdmissionStatusByStudentid(@PathVariable int studentId, @RequestBody String status) {
        List<Admission> admissions = admissionRepo.findByStudentId(studentId);
    
        if (!admissions.isEmpty()) {
            Admission admission = admissions.get(0);
            admission.setStatus(status);
            admissionRepo.save(admission);
            logger.info("Changed status of admission for student ID: " + studentId);
            return "Done";
        } else {
            logger.info("Admission for student ID: " + studentId + " not found");
            return "Failed";
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
    @DeleteMapping("/admission/student/{studentId}")
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




























//package com.example.admission.controller;
//
//import java.util.ArrayList;
//import java.util.List;
//import java.util.Optional;
//
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import com.example.admission.model.*;
//import com.example.admission.repository.AdmissionRepo;
//import com.example.admission.repository.StudentRepo;
//
//@RestController
//@CrossOrigin
//public class AdmissionController {
//
//    private Logger logger = (Logger) LoggerFactory.getLogger(StudentController.class);
//
//    @Autowired
//    AdmissionRepo eRepo;
//
//    @Autowired
//    StudentRepo sRepo;
//
//
//    @PostMapping("/admissions/{id}")
//    public ResponseEntity createAdmission(@PathVariable int id) {
//        Student s = sRepo.findById(id).get();
//        List<String> reqdoc=new ArrayList<>();
//        reqdoc.add("passport_photo");
//        reqdoc.add("Aadhar");
//        reqdoc.add("10th Marksheet");
//        reqdoc.add("12th Marksheet");
//        reqdoc.add("bonofied certificate");
//        Admission e = new Admission();
//        e.setStudent(s);
//        e.setStatus("Pending");
//        e.setRequiredDocuments(reqdoc);
//        eRepo.save(e);
//        return new ResponseEntity<Admission>(e, HttpStatus.OK);
//    }
//
//    @GetMapping("/admissions")
//    public ResponseEntity<List<Admission>> getAllAdmissions() {
//        List<Admission> adm = eRepo.findAll();
//        logger.info("Retrieved all enrolls");
//        return new ResponseEntity<List<Admission>>(adm, HttpStatus.OK);
//    }
//    @GetMapping("/admissions/{id}")
//    public ResponseEntity<Admission> getAdmissionById(@PathVariable int id) {
//        Optional<Admission> admission = eRepo.findById(id);
//
//        if (admission.isPresent()) {
//            logger.info("Retrieved admission with ID: " + id);
//            return new ResponseEntity<>(admission.get(), HttpStatus.OK);
//        } else {
//            logger.info("Admission with ID: " + id + " not found");
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//        }
//    }
//
//
//    @PutMapping("/admissions/{status}/{id}")
//    public ResponseEntity statusChange(@PathVariable String status, @PathVariable int id) {
//        Admission e=eRepo.findById(id).get();
//        e.setStatus(status);
//        eRepo.save(e);
//        return new ResponseEntity<Admission>(e, HttpStatus.OK);
//
//    }
//    @DeleteMapping("/admissions/{id}")
//    public ResponseEntity<Void> deleteAdmission(@PathVariable int id) {
//        Optional<Admission> admissionOptional = eRepo.findById(id);
//
//        if (admissionOptional.isPresent()) {
//            eRepo.deleteById(id);
//            logger.info("Deleted admission with ID: " + id);
//            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//        } else {
//            logger.info("Admission with ID " + id + " not found");
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//        }
//    }
//}