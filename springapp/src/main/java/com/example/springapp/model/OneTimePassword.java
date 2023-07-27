package com.example.springapp.model;


import javax.persistence.*;


import java.time.LocalDateTime;

@Entity
public class OneTimePassword {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String otpValue;

    private LocalDateTime expirationTime;

    @OneToOne
    @JoinColumn(name ="user_id")
    private Student student;
    
    


	public Student getStudent() {
		return student;
	}

	public void setStudent(Student student) {
		this.student = student;
	}

	public OneTimePassword(long id, String otpValue, LocalDateTime expirationTime) {
        this.id = id;
        this.otpValue = otpValue;
        this.expirationTime = expirationTime;
    }

    public OneTimePassword() {
        super();
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getOtpValue() {
        return otpValue;
    }

    public void setOtpValue(String otpValue) {
        this.otpValue = otpValue;
    }

    public LocalDateTime getExpirationTime() {
        return expirationTime;
    }

    public void setExpirationTime(LocalDateTime expirationTime) {
        this.expirationTime = expirationTime;
    }
}
