package com.example.springapp.model;


import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;

@Entity

public class Role {

	@Id	
	private int id;
	
	private String name;
	@ManyToMany(mappedBy = "roles",cascade={CascadeType.PERSIST, CascadeType.MERGE})
	private Set<Student> students = new HashSet<>();
	
	
	public Role() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Set<Student> getStudents() {
		return students;
	}
	public void setStudents(Set<Student> students) {
		this.students = students;
	}
	
	
}

