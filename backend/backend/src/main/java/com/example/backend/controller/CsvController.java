package com.example.backend.controller;

import com.example.backend.service.CsvService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/csv")
public class CsvController {

    @Autowired
    private CsvService csvService;

    @PostMapping("/upload")
    public ResponseEntity<?> uploadCsv(@RequestParam("file") MultipartFile file) {
        try {
            List<Map<String, String>> data = csvService.readCsv(file.getInputStream());
            return ResponseEntity.ok(data.subList(0, Math.min(data.size(), 5))); // Return first 5 rows for preview
        } catch (IOException e) {
            return ResponseEntity.status(500).body("Error reading CSV: " + e.getMessage());
        }
    }
}
