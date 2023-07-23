package com.example.springapp.repository;



import org.springframework.data.jpa.repository.JpaRepository;

import com.example.springapp.model.Notice;

public interface NoticeRepository extends JpaRepository<Notice, Integer> {

}
