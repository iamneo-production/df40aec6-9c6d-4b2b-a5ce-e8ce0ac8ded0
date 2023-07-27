package com.example.springapp.service;



import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.springapp.model.Notice;
import com.example.springapp.repository.NoticeRepository;

@Service
public class NoticeService {
	@Autowired
	public NoticeRepository subjectRepo;
public List<Notice>getAllSubjects(){
	List<Notice>subjects=new ArrayList<>();
	subjectRepo.findAll().forEach(subjects::add);
	return subjects;
}
public void addSubject(Notice subject) {
	subject.setId(0);
	subjectRepo.save(subject);	
}
public void updateSubject(Integer id,Notice subject) {
	subjectRepo.save(subject);	
	
}
//public void deleteSubject(Integer id, Subject subject) {
//	subjectRepo.deleteById(id);
//	
//}
public void deleteSubject(Integer id) {
    subjectRepo.deleteById(id);
}
}
