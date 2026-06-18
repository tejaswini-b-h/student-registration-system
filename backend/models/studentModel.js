const db = require("../config/db");

const getAllStudents = (callback) => {

    const sql = "SELECT * FROM students";

    db.query(sql, callback);
};

const addStudent = (
    name,
    email,
    course,
    callback
) => {

    const sql = `
        INSERT INTO students
        (name,email,course)
        VALUES (?,?,?)
    `;

    db.query(
        sql,
        [name, email, course],
        callback
    );
};

const deleteStudent = (id, callback) => {

    const sql =
    "DELETE FROM students WHERE id=?";

    db.query(
        sql,
        [id],
        callback
    );
};

const updateStudent = (
    id,
    name,
    email,
    course,
    callback
) => {

    const sql = `
        UPDATE students
        SET
            name=?,
            email=?,
            course=?
        WHERE id=?
    `;

    db.query(
        sql,
        [name, email, course, id],
        callback
    );
};

module.exports = {
    getAllStudents,
    addStudent,
    deleteStudent,
    updateStudent
};