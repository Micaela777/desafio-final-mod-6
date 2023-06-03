"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("./db");
const express = require("express");
const cors = require("cors");
const path = require("path");
const port = process.env.PORT || 3003;
const app = express();
app.use(express.json());
app.use(cors());
const userCollection = db_1.firestore.collection("users");
app.get("/users", function (req, res) {
    userCollection.get().then((snapshot) => {
        const usersData = snapshot.docs;
        for (const users of usersData) {
            const usersJson = users.data();
            console.log(usersJson);
        }
        res.json({
            message: "He aquí todos users"
        });
    });
});
app.post("/newUser", (req, res) => {
    const name = req.body.name;
    userCollection.where("name", "==", name).get().then((searchResponse) => {
        if (searchResponse.empty) {
            userCollection.add({
                name,
            }).then((newUserRef) => {
                res.json({
                    id: newUserRef.id,
                    message: "Usuario creado"
                });
            });
        }
        else {
            res.status(400).json({
                message: "Este usuario ya existe"
            });
        }
    });
});
app.use(express.static("dist"));
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../../dist/index.html"));
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
