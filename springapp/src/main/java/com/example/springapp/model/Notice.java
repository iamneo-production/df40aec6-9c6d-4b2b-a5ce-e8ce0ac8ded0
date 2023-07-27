package com.example.springapp.model;



import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="tbl_notice")
public class Notice {
	@Id
	 @GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private String title;
	private String description;
	public int getId() {
		return id;
	}
//	@Id
//	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	public void setId(int id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
}
