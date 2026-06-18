const Student =
require("../models/studentModel");

exports.getStudents =
(req, res) => {

    Student.getAllStudents(
        (err, results) => {

            if (err) {
                return res
                .status(500)
                .json(err);
            }

            res.json(results);
        }
    );
};

exports.addStudent =
(req, res) => {

    const {
        name,
        email,
        course
    } = req.body;

    Student.addStudent(
        name,
        email,
        course,
        (err, result) => {

            if (err) {
                return res
                .status(500)
                .json(err);
            }

            res.json({
                message:
                "Student Added Successfully"
            });
        }
    );
};

exports.deleteStudent =
(req, res) => {

    Student.deleteStudent(
        req.params.id,

        (err, result) => {

            if (err) {
                return res
                .status(500)
                .json(err);
            }

            res.json({
                message:
                "Student Deleted"
            });
        }
    );
};

exports.updateStudent =
(req, res) => {

    const id =
    req.params.id;

    const {
        name,
        email,
        course
    } = req.body;

    Student.updateStudent(
        id,
        name,
        email,
        course,

        (err, result) => {

            if (err) {
                return res
                .status(500)
                .json(err);
            }

            res.json({
                message:
                "Student Updated"
            });
        }
    );
};