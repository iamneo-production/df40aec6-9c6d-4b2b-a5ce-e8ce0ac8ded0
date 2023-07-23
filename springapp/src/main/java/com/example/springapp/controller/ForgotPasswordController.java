package com.example.springapp.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.springapp.repository.StudentRepo;
import com.example.springapp.service.StudentService;

import javax.mail.MessagingException;

@RestController
public class ForgotPasswordController {

    @Autowired
    private StudentRepo usersDao;

    @Autowired
    private StudentService usersServices;

    @PostMapping("api/v1/send-otp")
    public String forgotPassword(@RequestParam String email) throws MessagingException {
        return this.usersServices.forgotPassword(email);
    }


    @PutMapping("api/v1/verify-otp")
    public String verifyOtp(@RequestParam String email, @RequestParam String otp){
        return this.usersServices.verifyOtp(email,otp);
    }

    @PutMapping("api/v1/set-password")
    public String setPassword(@RequestParam String email , @RequestBody String newPassword){
        return this.usersServices.setPassword(email,newPassword);
    }

}
