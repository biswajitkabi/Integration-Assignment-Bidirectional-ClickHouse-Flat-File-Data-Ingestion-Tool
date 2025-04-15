package com.example.backend.service;

import org.apache.commons.csv.*;
import org.springframework.stereotype.Service;

import java.io.*;
import java.util.*;

@Service
public class CsvService {

    public List<Map<String, String>> readCsv(InputStream inputStream) throws IOException {
        List<Map<String, String>> records = new ArrayList<>();

        try (Reader reader = new InputStreamReader(inputStream);
             CSVParser parser = CSVFormat.DEFAULT.withFirstRecordAsHeader().parse(reader)) {

            for (CSVRecord record : parser) {
                Map<String, String> row = new HashMap<>();
                for (String header : parser.getHeaderMap().keySet()) {
                    row.put(header, record.get(header));
                }
                records.add(row);
            }
        }

        return records;
    }

    public void writeCsv(List<Map<String, Object>> data, OutputStream outputStream) throws IOException {
        if (data.isEmpty()) return;

        List<String> headers = new ArrayList<>(data.get(0).keySet());

        try (CSVPrinter printer = new CSVPrinter(new OutputStreamWriter(outputStream),
                CSVFormat.DEFAULT.withHeader(headers.toArray(new String[0])))) {
            for (Map<String, Object> row : data) {
                List<Object> values = new ArrayList<>();
                for (String header : headers) {
                    values.add(row.get(header));
                }
                printer.printRecord(values);
            }
        }
    }
}
