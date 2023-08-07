import { firestore, rtdb } from "./db";
import * as express from "express";
import * as nanoid from "nanoid";
import * as cors from "cors";
import * as path from "path";

const port = 3000;

const app = express();

app.use(express.json());
app.use(cors());

const userCollection = firestore.collection("users");
const roomsCollection = firestore.collection("rooms");

app.post("/signup", (req, res) => {
  const name = req.body.name
  const email = req.body.email;
  userCollection.where("email", "==", email).get().then((searchResponse)=>{
    if (searchResponse.empty){
      userCollection.add({
        name,
        email
      }).then((newUserRef) => {
        res.json({
          id: newUserRef.id,
          new: "new user created",
          message: "user created"
        })
      })
    } else {
      res.status(400).json({
        message: "this user already exists"
      })
    }
  })
})



app.post("/auth", (req, res) => {
  const email = req.body.email
  userCollection.where("email", "==", email).get().then((searchResponse)=>{
    if (searchResponse.empty){
      res.status(404).json({
        message: "user not found"
      })
    } else {
      res.json({
        message: "user found",
        id: searchResponse.docs[0].id
      })
    }
  })
})


  app.post("/rooms", (req, res) => {
    const userId = req.body.userId
    userCollection.doc(userId.toString()).get().then((doc) => {
      if(doc.exists){
        const roomRef = rtdb.ref("rooms/" + nanoid())
        roomRef.set({
          owner: userId
        }).then(() => {
          const roomLongId = roomRef.key
          const roomId = 1000 + Math.floor(Math.random() * 999)
          roomsCollection.doc(roomId.toString()).set({
            rtdbRoomId: roomLongId
          }).then(() => {
            res.json({
              id: roomId.toString(),
              roomLongId
            })
          })
        })
      } else {
        res.status(401).json({
          message: "no existís"
        })
      }
    })
  })

  app.use(express.static("dist"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../../dist/index.html"))
  })

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })