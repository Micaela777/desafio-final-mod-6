"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("./db");
const express = require("express");
const nanoid = require("nanoid");
const cors = require("cors");
const path = require("path");
const port = 3000;
const app = express();
app.use(express.json());
app.use(cors());
const userCollection = db_1.firestore.collection("users");
const roomsCollection = db_1.firestore.collection("rooms");
app.post("/auth", (req, res) => {
    const name = req.body.name;
    userCollection.where("name", "==", name).get().then((searchResponse) => {
        if (searchResponse.empty) {
            userCollection.add({
                name,
            }).then((newUserRef) => {
                res.json({
                    id: newUserRef.id,
                    message: "user created"
                });
            });
        }
        else {
            res.json({
                message: "this user already exists",
                id: searchResponse.docs[0].id,
            });
        }
    });
});
app.post("/rooms", (req, res) => {
    const userId = req.body.userId;
    const name = req.body.name;
    userCollection.doc(userId.toString()).get().then((doc) => {
        if (doc.exists) {
            const roomRef = db_1.rtdb.ref("rooms/" + nanoid());
            roomRef.set({
                currentGame: {
                    playerOne: {
                        id: userId,
                        name: name,
                        choise: "",
                        online: "false",
                        start: "false"
                    },
                    playerTwo: {
                        id: "",
                        name: "",
                        choise: "",
                        online: "false",
                        start: "false"
                    }
                }
            }).then(() => {
                const roomLongId = roomRef.key;
                const roomId = 10000 + Math.floor(Math.random() * 9999);
                roomsCollection.doc(roomId.toString()).set({
                    rtdbRoomId: roomLongId
                }).then(() => {
                    res.json({
                        id: roomId.toString(),
                        roomLongId
                    });
                });
            });
        }
        else {
            res.status(401).json({
                message: "no existís"
            });
        }
    });
});
app.get("/rooms/:roomId", (req, res) => {
    const userId = req.query.userId;
    const roomId = req.params.roomId;
    userCollection.doc(userId.toString()).get().then((doc) => {
        if (doc.exists) {
            roomsCollection.doc(roomId).get().then((snap) => {
                if (snap.exists) {
                    const data = snap.data();
                    res.json(data);
                }
                else {
                    res.status(401).json({
                        message: "el room no existe"
                    });
                }
            });
        }
        else {
            res.status(401).json({
                message: "no existis"
            });
        }
    });
});
app.post("/rooms/:rtdbLongId/:userId", (req, res) => {
    const rtdbLongId = req.params.rtdbLongId;
    const userId = req.params.userId;
    const userName = req.body.name;
    const rtdbReference = db_1.rtdb.ref("rooms/" + rtdbLongId + "/currentGame");
    rtdbReference.get().then((snap) => {
        const data = snap.val();
        const playerOneId = data.playerOne.id;
        const playerTwoId = data.playerTwo.id;
        const playerTwoName = data.playerTwo.name;
        if (playerOneId == userId || playerTwoId == userId || playerTwoId == "") {
            if (playerTwoId == "" && playerTwoName == "") {
                const playerTwoRef = db_1.rtdb.ref("rooms/" + rtdbLongId + "/currentGame" + "/playerTwo");
                playerTwoRef.update({
                    id: userId,
                    name: userName
                });
            }
            res.json({
                message: "usuario conectado",
            });
        }
        else {
            res.json({
                message: "sala llena"
            });
        }
    });
});
app.patch("/rooms/:rtdbLongId/playerOne/online", (req, res) => {
    const rtdbLongId = req.params.rtdbLongId;
    const userStatus = req.body.online;
    const rtdbReference = db_1.rtdb.ref("rooms/" + rtdbLongId + "/currentGame" + "/playerOne");
    rtdbReference.update({
        online: userStatus,
    }).then(() => {
        res.json({
            ok: "todo ok"
        });
    });
});
app.patch("/rooms/:rtdbLongId/playerTwo/online", (req, res) => {
    const rtdbLongId = req.params.rtdbLongId;
    const userStatus = req.body.online;
    const rtdbReference = db_1.rtdb.ref("rooms/" + rtdbLongId + "/currentGame" + "/playerTwo");
    rtdbReference.update({
        online: userStatus,
    }).then(() => {
        res.json({
            ok: "todo ok"
        });
    });
});
app.patch("/rooms/:rtdbLongId/playerOne/online/false", (req, res) => {
    const rtdbLongId = req.params.rtdbLongId;
    const userStatus = req.body.online;
    const rtdbReference = db_1.rtdb.ref("rooms/" + rtdbLongId + "/currentGame" + "/playerOne");
    rtdbReference.update({
        online: userStatus,
    }).then(() => {
        res.json({
            ok: "todo ok"
        });
    });
});
app.patch("/rooms/:rtdbLongId/playerTwo/online/false", (req, res) => {
    const rtdbLongId = req.params.rtdbLongId;
    const userStatus = req.body.online;
    const rtdbReference = db_1.rtdb.ref("rooms/" + rtdbLongId + "/currentGame" + "/playerTwo");
    rtdbReference.update({
        online: userStatus,
    }).then(() => {
        res.json({
            ok: "todo ok"
        });
    });
});
app.patch("/rooms/:rtdbLongId/:userId/start", (req, res) => {
    const rtdbLongId = req.params.rtdbLongId;
    const userId = req.params.userId;
    const userStatus = req.body.start;
    const rtdbReference = db_1.rtdb.ref("rooms/" + rtdbLongId + "/currentGame");
    rtdbReference.get().then((snap) => {
        const value = snap.val();
        const user = value.playerOne.id;
        const opponent = value.playerTwo.id;
        if (userId == user) {
            const playerOne = db_1.rtdb.ref("rooms/" + rtdbLongId + "/currentGame" + "/playerOne");
            playerOne.update({
                start: userStatus,
            }).then(() => {
                res.json({
                    ok: "true"
                });
            });
        }
        else if (userId == opponent) {
            const playerTwo = db_1.rtdb.ref("rooms/" + rtdbLongId + "/currentGame" + "/playerTwo");
            playerTwo.update({
                start: userStatus,
            }).then(() => {
                res.json({
                    ok: "true"
                });
            });
        }
    });
});
app.patch("/rooms/:rtdbLongId/nochoise", (req, res) => {
    const rtdbLongId = req.params.rtdbLongId;
    const userChoise = req.body.choise;
    const playerOne = db_1.rtdb.ref("rooms/" + rtdbLongId + "/currentGame" + "/playerOne");
    playerOne.update({
        choise: userChoise,
    });
    const playerTwo = db_1.rtdb.ref("rooms/" + rtdbLongId + "/currentGame" + "/playerTwo");
    playerTwo.update({
        choise: userChoise,
    });
    res.json({
        message: "ok"
    });
});
/*app.patch("/rooms/:rtdbLongId/playerTwo/choise", (req, res) => {
  const rtdbLongId = req.params.rtdbLongId
  const userStatus = req.body.choise

  const rtdbReference = rtdb.ref("rooms/" + rtdbLongId + "/currentGame" + "/playerTwo")
  rtdbReference.update({
    choise: userStatus,
  }).then(() => {
    res.json({
      message: "ok"
    })
  })
})


app.patch("/rooms/:rtdbLongId/choise", (req, res) => {
  const rtdbLongId = req.params.rtdbLongId
  const user = req.body.user
  const userStatus = req.body.choise

  const rtdbReference = rtdb.ref("rooms/" + rtdbLongId + "/currentGame" + user)
  rtdbReference.update({
    choise: userStatus,
  }).then(() => {
    res.json({
      message: "ok"
    })
  })
})*/
app.patch("/rooms/:rtdbLongId/:userId/play", (req, res) => {
    const rtdbLongId = req.params.rtdbLongId;
    const userId = req.params.userId;
    const userStatus = req.body.choise;
    const rtdbReference = db_1.rtdb.ref("rooms/" + rtdbLongId + "/currentGame");
    rtdbReference.get().then((snap) => {
        const value = snap.val();
        const user = value.playerOne.id;
        const opponent = value.playerTwo.id;
        if (userId == user) {
            const playerOne = db_1.rtdb.ref("rooms/" + rtdbLongId + "/currentGame" + "/playerOne");
            playerOne.update({
                choise: userStatus,
            }).then(() => {
                res.json({
                    message: "playerOne"
                });
            });
        }
        else if (userId == opponent) {
            const playerTwo = db_1.rtdb.ref("rooms/" + rtdbLongId + "/currentGame" + "/playerTwo");
            playerTwo.update({
                choise: userStatus,
            }).then(() => {
                res.json({
                    message: "playerTwo"
                });
            });
        }
    });
});
app.get("/rooms/:rtdbLongId/:userId/getchoise", (req, res) => {
    const rtdbLongId = req.params.rtdbLongId;
    const userId = req.params.userId;
    const rtdbReference = db_1.rtdb.ref("rooms/" + rtdbLongId + "/currentGame");
    rtdbReference.get().then((snap) => {
        const value = snap.val();
        const user = value.playerOne.id;
        const opponent = value.playerTwo.id;
        if (user == userId) {
            res.json({
                message: "playerOne"
            });
        }
        else if (opponent == userId) {
            res.json({
                message: "playerTwo"
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
