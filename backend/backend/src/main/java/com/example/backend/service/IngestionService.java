package com.example.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.io.OutputStream;
import java.sql.*;
import java.util.*;

@Service
public class IngestionService {

    @Autowired
    private CsvService csvService;

    public void clickHouseToCsv(Connection conn, String query, OutputStream outputStream) throws SQLException, IOException {
        List<Map<String, Object>> data = new ArrayList<>();
        Statement stmt = conn.createStatement();
        ResultSet rs = stmt.executeQuery(query);

        ResultSetMetaData meta = rs.getMetaData();
        int columnCount = meta.getColumnCount();

        while (rs.next()) {
            Map<String, Object> row = new HashMap<>();
            for (int i = 1; i <= columnCount; i++) {
                row.put(meta.getColumnLabel(i), rs.getObject(i));
            }
            data.add(row);
        }

        csvService.writeCsv(data, outputStream);
    }
}
