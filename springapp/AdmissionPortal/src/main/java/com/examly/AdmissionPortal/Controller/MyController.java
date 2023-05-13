package com.examly.AdmissionPortal.Controller;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
@RestController
public class MyController {
	
	
	@GetMapping("/home")
	public String home() {
		return "This is Home page";
	}
	}