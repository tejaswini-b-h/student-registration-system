# 🎓 Student Registration System

A Full Stack Student Registration System developed using **HTML, CSS, JavaScript, Node.js, Express.js, and MySQL**.

This application allows users to manage student records efficiently with features such as adding, viewing, updating, deleting, searching, and tracking students through an interactive dashboard.

---

## Features

* Add New Students
* View All Students
* Update Student Information
* Delete Student Records
* Search Students by Name
* Course-wise Statistics Dashboard
* Student Count Dashboard
* Form Validation
* Responsive User Interface
* MySQL Database Integration

---

## Tech Stack

### Frontend

* HTML5
* CSS3
* JavaScript
* Bootstrap 5

### Backend

* Node.js
* Express.js

### Database

* MySQL

### Tools

* VS Code
* Git
* GitHub
* MySQL Workbench

---

## Project Structure

```text
student_registration/
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── config/
│   ├── server.js
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## Installation & Setup

### 1. Clone Repository

```bash
git clone https://github.com/tejaswini-b-h/student-registration-system.git
```

### 2. Open Project

```bash
cd student-registration-system
```

### 3. Install Backend Dependencies

```bash
cd backend
npm install
```

### 4. Configure MySQL Database

Create a database:

```sql
CREATE DATABASE studentdb;
```

Create table:

```sql
CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    course VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 5. Start Backend Server

```bash
node server.js
```

### 6. Run Frontend

Open:

```text
frontend/index.html
```

using Live Server or any browser.

---

## Project Highlights

* Implemented CRUD Operations using REST APIs.
* Connected Frontend and Backend using Fetch API.
* Integrated MySQL Database for persistent storage.
* Built Course-wise Dashboard Statistics.
* Implemented Form Validation for Data Integrity.
* Designed Modern Responsive UI.

---

## Author

**Tejaswini B H**

* GitHub: https://github.com/tejaswini-b-h
* LinkedIn: https://www.linkedin.com/in/tejaswini-hugar-823ba92b8?utm_source=share_via&utm_content=profile&utm_medium=member_android

---

## Future Enhancements

* User Authentication
* Admin Login Dashboard
* Export Student Data to Excel
* Student Profile Images
* Course Analytics Charts
* Email Notifications
