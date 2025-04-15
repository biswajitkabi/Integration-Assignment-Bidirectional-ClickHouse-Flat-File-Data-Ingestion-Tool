package com.example.backend.controller;

import com.example.backend.service.ClickHouseService;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.List;

@RestController
@RequestMapping("/api/clickhouse")
public class ClickHouseController {

    @Autowired
    private ClickHouseService chService;

    @PostMapping("/connect")
    public ResponseEntity<?> connect(@RequestBody ClickHouseConfig config) {
        try {
            Connection conn = chService.connect(config.getHost(), config.getPort(), config.getDatabase(), config.getUser(), config.getToken());
            List<String> tables = chService.fetchTables(conn);
            return ResponseEntity.ok(tables);
        } catch (SQLException e) {
            return ResponseEntity.status(500).body("Connection failed: " + e.getMessage());
        }
    }

    @Data
    public static class ClickHouseConfig {
        private String host;
        private int port;
        private String database;
        private String user;
        private String token;
    }
}
