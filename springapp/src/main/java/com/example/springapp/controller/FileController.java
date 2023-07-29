package com.example.springapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.util.List;
import java.util.stream.Collectors;

import com.example.springapp.message.ResponseFile;
import com.example.springapp.message.ResponseMessage;
import com.example.springapp.model.FileDB;
import com.example.springapp.service.FileStorageService;


@Controller
@CrossOrigin("https://8081-adeafdcbcabefdeccdcaedbbeaeaadbdbabf.project.examly.io/")
@RequestMapping("/api/v1/auth/")
public class FileController {

    @Autowired
    private FileStorageService storageService;

    private static int currentStudentId = 1; // Initialize student ID to 1
    private int count=0;
    
    @PostMapping("/upload/{studentId}")
    public ResponseEntity<ResponseMessage> uploadFile(@PathVariable("studentId") String studentId,
                                                      @RequestParam("file") MultipartFile file) {
        String message = "";
        try {
            storageService.store(file, studentId); // Store file with the provided student ID
            message = "Uploaded the file successfully: " + file.getOriginalFilename();
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage(message));
        } catch (Exception e) {
            message = "Could not upload the file: " + file.getOriginalFilename() + "!";
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseMessage(message));
        }
    }
    @PostMapping("/upload")
    public ResponseEntity<ResponseMessage> uploadFile(@RequestParam("file") MultipartFile file) {
        String message = "";
        try {
            storageService.store(file,""+currentStudentId); // Store file with current student ID
            count++;
            message = "Uploaded the file successfully: " + file.getOriginalFilename();
            if (count % 5 == 0) {
                incrementStudentId(); // Increment student ID every 5 uploads
            }
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage(message));
        } catch (Exception e) {
            message = "Could not upload the file: " + file.getOriginalFilename() + "!";
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseMessage(message));
        }
    }

    private void incrementStudentId() {
        currentStudentId++; // Increment student ID
    }

    @GetMapping("/files")
    public ResponseEntity<List<ResponseFile>> getListFiles() {
        List<ResponseFile> files = storageService.getAllFiles().map(dbFile -> {
            String fileDownloadUri = ServletUriComponentsBuilder
                    .fromCurrentContextPath()
                    .path("/api/v1/auth/files/") // Include the "/api/v1/auth" path here
                    .path(dbFile.getId())
                    .toUriString();

            return new ResponseFile(
                    dbFile.getName(),
                    fileDownloadUri,
                    dbFile.getType(),
                    dbFile.getData().length,
                    dbFile.getStudentId());
        }).collect(Collectors.toList());

        return ResponseEntity.status(HttpStatus.OK).body(files);
    }
    @GetMapping("/files/{id}")
    public ResponseEntity<byte[]> getFile(@PathVariable String id) {
        FileDB fileDB = storageService.getFile(id);

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + fileDB.getName() + "\"")
                .body(fileDB.getData());
    }
    @GetMapping("/files/students/{student_id}")
    public ResponseEntity<List<ResponseFile>> getFilesByStudentId(@PathVariable String student_id) {
        List<ResponseFile> files = storageService.getFilesByStudentId(student_id)
                .stream()
                .map(dbFile -> {
                    String fileDownloadUri = ServletUriComponentsBuilder
                            .fromCurrentContextPath()
                            .path("/api/v1/auth/files/")
                            .path(dbFile.getId())
                            .toUriString();

                    return new ResponseFile(
                            dbFile.getName(),
                            fileDownloadUri,
                            dbFile.getType(),
                            dbFile.getData().length,
                            dbFile.getStudentId());
                })
                .collect(Collectors.toList());

        return ResponseEntity.status(HttpStatus.OK).body(files);
    }

}
