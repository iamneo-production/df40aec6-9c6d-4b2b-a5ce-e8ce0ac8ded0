package com.example.springapp.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Course {
	public Course(int id, String name, String description, String prerequisites, int credits) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.prerequisites = prerequisites;
		this.credits = credits;
	}
	public Course() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Id
	private int id;
	private String name;
	private String description;
	private String prerequisites;
	private int credits;
	@Override
	public String toString() {
		return "Course [id=" + id + ", name=" + name + ", description=" + description + ", prerequisites="
				+ prerequisites + ", credits=" + credits + ", getClass()=" + getClass() + ", hashCode()=" + hashCode()
				+ ", toString()=" + super.toString() + "]";
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
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getPrerequisites() {
		return prerequisites;
	}
	public void setPrerequisites(String prerequisites) {
		this.prerequisites = prerequisites;
	}
	public int getCredits() {
		return credits;
	}
	public void setCredits(int credits) {
		this.credits = credits;
	}
}