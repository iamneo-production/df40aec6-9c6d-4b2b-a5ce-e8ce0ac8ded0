package com.examly.springapp.model;

import javax.persistence.*;

import java.util.List;

@Entity
public class Admission {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int adm_id;

    @ManyToOne
    private Student student;

    private String status;
    @ElementCollection
    private List<String> requiredDocuments;

    public int getAdm_id() {
        return adm_id;
    }

    public void setAdm_id(int enroll_id) {
        this.adm_id = adm_id;
    }

    public Student getStudent() {
        return student;
    }

    public void setStudent(Student student) {
        this.student = student;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public List<String> getRequiredDocuments() {
        return requiredDocuments;
    }

    public void setRequiredDocuments(List<String> requiredDocuments) {
        this.requiredDocuments = requiredDocuments;
    }

}
