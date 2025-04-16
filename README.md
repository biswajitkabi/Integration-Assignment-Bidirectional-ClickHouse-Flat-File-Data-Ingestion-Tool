# Bidirectional Data Ingestion Tool: ClickHouse ↔ Flat File

A web-based application that enables seamless, bidirectional data ingestion between a ClickHouse database and flat files (CSV). Developed as part of a Software Engineer Intern Assignment, this tool supports both importing CSV data into ClickHouse and exporting selected ClickHouse table columns to flat files. The tool also supports JWT-based authentication for secure ClickHouse access.

---

## 🚀 Features

✅ Bidirectional data flow:

- ClickHouse → Flat File (CSV)
- Flat File (CSV) → ClickHouse

✅ Column-level selection for export/import  
✅ JWT token-based authentication for ClickHouse  
✅ Schema discovery and column preview  
✅ User-friendly React UI  
✅ Backend powered by Java (Spring Boot)  
✅ Dockerized ClickHouse setup with sample datasets  
✅ Result summary and error status display

---

## 📁 Project Structure

project-root/
├── backend/                 # Java Spring Boot backend  
│   └── src/main/...        # REST APIs, services, configs  
│   └── application.properties  
├── frontend/               # React frontend  
│   └── src/components/     # UI Components: ConfigForm, SchemaViewer, etc.  
│   └── src/api/            # API calls to backend  
├── docker-compose.yml      # ClickHouse + sample datasets  
├── README.md               # You're here  
└── prompts.txt             # AI prompts used (see below)  

---

## 🛠️ Setup & Run Instructions

### ⚙️ Prerequisites

- Java 17+
- Node.js (v16+ recommended)
- Docker & Docker Compose

---

### 🔧 1. Clone the Repository

git clone https://github.com/biswajitkabi/Integration-Assignment-Bidirectional-ClickHouse-Flat-File-Data-Ingestion-Tool.git  
cd bidirectional-ingestion-tool

---

### 🐳 2. Start ClickHouse via Docker

docker-compose up -d

✅ This sets up a ClickHouse instance with uk_price_paid and ontime example datasets.

---

### 💻 3. Run Backend (Spring Boot)

Navigate to backend folder:

cd backend  
./mvnw spring-boot:run

Ensure backend is running at http://localhost:8123

application.properties:

clickhouse.url=http://localhost:8123  
clickhouse.database=default  
clickhouse.user=default  
clickhouse.jwt.token=  

---

### 🖥️ 4. Run Frontend (React)

In a separate terminal:

cd frontend  
npm install  
npm start

Access the app at: http://localhost:3000

---

## ✅ Test Cases

1. ✅ ClickHouse table → CSV (selected columns) → Verify row count  
2. ✅ CSV → New ClickHouse table → Verify inserted data  
3. ⚠️ (Bonus) Joined ClickHouse tables → CSV  
4. ✅ Tested connection/auth failure handling  
5. ✅ (Optional) Previewed first 100 rows of table  

---

## 🧪 Example Datasets

Loaded into ClickHouse via Docker:

- uk_price_paid
- ontime

Reference: 
1.https://clickhouse.com/docs/en/getting-started/example-datasets/
2.https://clickhouse.com/docs/getting-started/example-datasets/ontime
3.https://clickhouse.com/docs/getting-started/example-datasets/uk_price_paid

---

## 📸 Screenshots

![Logo] (frontend/images/image1)
![Logo] (frontend/images/image2)

---