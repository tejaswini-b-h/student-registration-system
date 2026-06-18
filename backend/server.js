require("dotenv").config();

const express = require("express");
const cors = require("cors");

const db = require("./config/db");

const studentRoutes =
require("./routes/studentRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use(
    "/students",
    studentRoutes
);

app.get("/", (req, res) => {
    res.send(
      "Student Registration API Running"
    );
});

app.listen(
    process.env.PORT,
    () => {

        console.log(
            `Server running on port ${process.env.PORT}`
        );
    }
);