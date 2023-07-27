package com.example.springapp.Payloads;

import java.util.List;

public class AdmissionDTO {

	
    private int adm_id;

    private StudentDto student;
    
    private String status;
    
    private List<String> requiredDocuments;
    
    


	public AdmissionDTO() {
		super();
		// TODO Auto-generated constructor stub
	}

	public AdmissionDTO(int adm_id, StudentDto student, String status, List<String> requiredDocuments) {
		super();
		this.adm_id = adm_id;
		this.student = student;
		this.status = status;
		this.requiredDocuments = requiredDocuments;
	}

	public int getAdm_id() {
		return adm_id;
	}

	public void setAdm_id(int adm_id) {
		this.adm_id = adm_id;
	}

	public StudentDto getStudent() {
		return student;
	}

	public void setStudent(StudentDto student) {
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
