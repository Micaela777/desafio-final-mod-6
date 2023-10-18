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


app.post("/auth", (req, res) => {
  const name = req.body.name
  userCollection.where("name", "==", name).get().then((searchResponse)=>{
    if (searchResponse.empty){
      userCollection.add({
        name,
      }).then((newUserRef) => {
        res.json({
          id: newUserRef.id,
          message: "user created"
        })
      })
    } else {
      res.json({
        message: "this user already exists",
        id: searchResponse.docs[0].id,
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
        currentGame: {}
      }).then(() => {
        const roomLongId = roomRef.key
        const roomId = 10000 + Math.floor(Math.random() * 9999)
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


app.get("/rooms/:roomId", (req, res) => {
  const userId = req.query.userId
  const roomId = req.params.roomId
  userCollection.doc(userId.toString()).get().then((doc) => {
    if(doc.exists){
      roomsCollection.doc(roomId).get().then((snap) => {
        if(snap.exists){
          const data = snap.data()
          res.json(data)
        }else{
          res.status(401).json({
            message: "el room no existe"
          })
        }
      })
    } else {
      res.status(401).json({
        message: "no existis"
      })
    }
  })
})


app.post("/rooms/:rtdbLongId/:userId", (req, res) => {
  const rtdbLongId = req.params.rtdbLongId
  const userId = req.params.userId
  const name = req.body.name

  const rtdbReference = rtdb.ref("rooms/" + rtdbLongId + "/currentGame/" + userId)
  rtdbReference.set({
    name: name,
    choise: "",
    online: false,
    start: false
  })

  res.json({
    ok:"todo ok"
  })

})


  app.use(express.static("dist"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../../dist/index.html"))
  })

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })