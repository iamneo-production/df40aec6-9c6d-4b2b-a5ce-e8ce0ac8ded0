package com.example.springapp.controller;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.springapp.model.Notice;
import com.example.springapp.service.NoticeService;

@RestController
@CrossOrigin(origins="https://8081-bacbfabdcabdeaabefdeccdcaedbbeaeaadbdbabf.project.examly.io/")
@RequestMapping("/api/v1/auth/")
public class NoticeController {
	@Autowired
	private NoticeService subjectService ;
	@CrossOrigin(origins="http://localhost:3000")
	@RequestMapping("/notification")
	public List<Notice>getAllSubjects(){
		return subjectService.getAllSubjects();
	}
//	@CrossOrigin(origins="http://localhost:3000/create")
	
	@RequestMapping(method=RequestMethod.POST,value="/notifications")
	public void addSubject(@RequestBody Notice subject) {
		subjectService.addSubject(subject);
	}
//	@CrossOrigin(origins="http://localhost:3000/Edit")
	@RequestMapping(method=RequestMethod.PUT,value="/notification/{id}")
	public void updateSubject(@PathVariable Integer id,@RequestBody Notice subject) {
		subjectService.updateSubject(id,subject);
	}
//	@CrossOrigin(origins="http://localhost:3000/notice")
	@RequestMapping(method=RequestMethod.DELETE,value="/notification/{id}")
//	public void deleteSubject(@PathVariable Integer id,@RequestBody Subject subject) {
//		subjectService.deleteSubject(id,subject);
//	}
	public void deleteSubject(@PathVariable Integer id) {
	    subjectService.deleteSubject(id);
	}
}
