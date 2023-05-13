package com.examly.AdmissionPortal.Entities;


import javax.persistence.Entity;
import javax.persistence.Id;
// // import jakarta.persistence.Entity;
// // import jakarta.persistence.Id;
// import jakarta.persistence.Entity;
// import jakarta.persistence.Id;

@Entity
public class Student {
	@Id
	 private int id;
	 private String firstName;
	 private String lastName;
	 private String email;
	 private String password;
	 private String address;
	 private String phoneNumber;
	 
	public Student() {
		super();
	}
	public Student(int id, String firstName, String lastName, String email, String password, String address,
			String phoneNumber) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.address = address;
		this.phoneNumber = phoneNumber;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getPhoneNumber() {
		return phoneNumber;
	}
	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

}