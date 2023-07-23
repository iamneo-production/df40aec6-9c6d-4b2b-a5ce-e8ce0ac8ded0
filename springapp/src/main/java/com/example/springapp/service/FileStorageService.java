package com.example.springapp.service;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;


import java.util.List;
import java.util.stream.Stream;

import com.example.springapp.model.FileDB;
import com.example.springapp.repository.FileDBRepository;


@Service
public class FileStorageService {

    @Autowired
    private FileDBRepository fileDBRepository;

    public FileDB store(MultipartFile file, String studentId) throws IOException {
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        FileDB FileDB = new FileDB(fileName, file.getContentType(), file.getBytes(), studentId);

        return fileDBRepository.save(FileDB);
    }



    public FileDB getFile(String id) {
        return fileDBRepository.findById(id).get();
    }

    public Stream<FileDB> getAllFiles() {
        return fileDBRepository.findAll().stream();

    }

    public List<FileDB> getFilesByStudentId(String studentId) {
        List<FileDB> files = fileDBRepository.findByStudentId(studentId);
        System.out.println("Files retrieved for student ID " + studentId + ": " + files.size());
        return files;
    }

}


