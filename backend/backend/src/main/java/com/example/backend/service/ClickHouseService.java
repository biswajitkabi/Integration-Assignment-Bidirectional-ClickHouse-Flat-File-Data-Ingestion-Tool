package com.example.backend.service;


import org.springframework.stereotype.Service;

import java.sql.*;
import java.util.*;

@Service
public class ClickHouseService {

    public Connection connect(String host, int port, String db, String user, String token) throws SQLException {
        String url = String.format("jdbc:clickhouse://%s:%d/%s?ssl=false", host, port, db);


        Properties props = new Properties();
        props.setProperty("user", user);
        props.setProperty("password", token);  // JWT passed as password
        props.setProperty("ssl", "false");
        props.setProperty("compress", "0");

        return DriverManager.getConnection(url, props);
    }

    public List<String> fetchTables(Connection conn) throws SQLException {
        List<String> tables = new ArrayList<>();
        Statement stmt = conn.createStatement();
        ResultSet rs = stmt.executeQuery("SHOW TABLES");

        while (rs.next()) {
            tables.add(rs.getString(1));
        }

        return tables;
    }
}
