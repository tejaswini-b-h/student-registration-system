const API_URL =
"http://localhost:5000/students";

let editId = null;

async function addStudent() {

    const name =
    document.getElementById("name")
    .value.trim();

    const email =
    document.getElementById("email")
    .value.trim();

    const course =
    document.getElementById("course")
    .value.trim();

    // Required field validation
    if (!name || !email || !course) {

        alert(
            "All fields are required!"
        );

        return;
    }

    // Email validation
    const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
        !emailPattern.test(email)
    ) {

        alert(
            "Please enter a valid email address!"
        );

        return;
    }

    const student = {
        name,
        email,
        course
    };

    if(editId) {

        await fetch(
            `${API_URL}/${editId}`,
            {
                method: "PUT",

                headers: {
                    "Content-Type":
                    "application/json"
                },

                body:
                JSON.stringify(student)
            }
        );

        alert("Student Updated Successfully!");

        editId = null;

        document
        .getElementById("submitBtn")
        .innerText =
        "Add Student";

    } else {

        await fetch(
            API_URL,
            {
                method:"POST",

                headers:{
                    "Content-Type":
                    "application/json"
                },

                body:
                JSON.stringify(student)
            }
        );
        alert("Student Added Successfully!");
    }

    document
    .getElementById("name")
    .value = "";

    document
    .getElementById("email")
    .value = "";

    document
    .getElementById("course")
    .value = "";

    loadStudents();
}

async function loadStudents() {

    const response =
    await fetch(API_URL);

    const students =
    await response.json();

    document.getElementById("totalCard")
.innerText = students.length;

document.getElementById("cseCount")
.innerText =
students.filter(
s => s.course.toUpperCase() === "CSE"
).length;

document.getElementById("aimlCount")
.innerText =
students.filter(
s => s.course.toUpperCase() === "AIML"
).length;

document.getElementById("eceCount")
.innerText =
students.filter(
s => s.course.toUpperCase() === "ECE"
).length;

document.getElementById("iseCount")
.innerText =
students.filter(
s => s.course.toUpperCase() === "ISE"
).length;

document.getElementById("eeeCount")
.innerText =
students.filter(
s => s.course.toUpperCase() === "EEE"
).length;

document.getElementById("mechCount")
.innerText =
students.filter(
s => s.course.toUpperCase() === "MECH"
).length;

    document
    .getElementById("studentCount")
    .innerText =
    `Total Students: ${students.length}`;

    const table =
    document.getElementById("studentTable");

    table.innerHTML = "";

    if (students.length === 0) {

    table.innerHTML = `
    <tr>
        <td colspan="5">
            No Students Found
        </td>
    </tr>
    `;

    return;
}

    students.forEach(student => {

        table.innerHTML += `
        <tr>
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.email}</td>
            <td>${student.course}</td>
            <td>
            ${
                student.created_at
                ? new Date(
                    student.created_at
                  ).toLocaleDateString()
                : "-"
            }
        </td>
            <td>
            <button class="edit-btn"
            onclick="editStudent(
            '${student.id}',
            '${student.name}',
            '${student.email}',
            '${student.course}'
            )">
            Edit
            </button>
            
            <button class="delete-btn"
            onclick="deleteStudent(${student.id})">
            Delete
            </button>
            </td>
        </tr>
        `;
    });
}

loadStudents();

async function deleteStudent(id) {

    const confirmDelete =
    confirm(
        `Delete student ID ${id}?`
    );

    if(!confirmDelete) {
        return;
    }

    await fetch(
        `${API_URL}/${id}`,
        {
            method: "DELETE"
        }
    );

    alert("Student Deleted Successfully!");

    loadStudents();
}

function editStudent(
    id,
    name,
    email,
    course
) {

    editId = id;

    document
    .getElementById("name")
    .value = name;

    document
    .getElementById("email")
    .value = email;

    document
    .getElementById("course")
    .value = course;

    document
    .getElementById("submitBtn")
    .innerText =
    "Update Student";
}

function searchStudents() {

    const searchText =
    document
    .getElementById("searchInput")
    .value
    .toLowerCase();

    const rows =
    document
    .querySelectorAll("#studentTable tr");

    rows.forEach(row => {

        const studentName =
        row.children[1]
        .textContent
        .toLowerCase();

        if(
            studentName.includes(searchText)
        ) {
            row.style.display = "";
        }
        else {
            row.style.display = "none";
        }
    });
}