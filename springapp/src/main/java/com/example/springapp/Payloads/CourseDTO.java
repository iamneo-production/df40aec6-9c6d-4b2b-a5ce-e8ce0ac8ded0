package com.example.springapp.Payloads;



public class CourseDTO {
    private int id;
    private String name;
    private String description;
    private String prerequisites;
    private int credits;
    // Add other necessary fields

    public CourseDTO() {
    }

    public CourseDTO(int id, String name, String description, String prerequisites, int credits) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.prerequisites = prerequisites;
        this.credits = credits;
    }

    // Getters and Setters

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
