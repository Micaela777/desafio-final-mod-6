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
  const name = req.body.name
  userCollection.doc(userId.toString()).get().then((doc) => {
    if(doc.exists){
      const roomRef = rtdb.ref("rooms/" + nanoid())
      roomRef.set({
        currentGame: {
          [userId]:{
            name: name,
            choise: "",
            online: "false",
            start: "false"
          }
        }
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

  const rtdbReference = rtdb.ref("rooms/" + rtdbLongId + "/currentGame")
  rtdbReference.get().then((snap) => {
    const data = snap.val()
    const dataArr = Object.entries(data)
    const dataLength = dataArr.length

    const id = data.userId[0]

    if(dataLength !== 2){
      rtdbReference.update({
        [userId]:{
          name: name,
          choise: "",
          online: "false",
          start: "false"
        }
      }).then(() => {
        res.send({
          message: "usuario conectado",
        })
      })
    } else if (dataLength == 2){
      res.send({
        message: "sala llena"
      })
    }
  })
})


/*app.post("/rooms/:rtdbLongId/:userId", (req, res) => {
  const rtdbLongId = req.params.rtdbLongId
  const userId = req.params.userId
  const name = req.body.name

  const rtdbReference = rtdb.ref("rooms/" + rtdbLongId + "/currentGame/" + userId)

  rtdbReference.set({
    name: name,
    choise: "",
    online: "false",
    start: "false"
  })

  res.json({
    ok:"todo ok"
  })
})*/


/*app.post("/rooms/:rtdbLongId/:userId", (req, res) => {
  const rtdbLongId = req.params.rtdbLongId
  const userId = req.params.userId
  const name = req.body.name

  const rtdbReference = rtdb.ref("rooms/" + rtdbLongId + "/currentGame")
  rtdbReference.get().then((snap) => {
    const data = snap.val()
    const dataArr = Object.entries(data)
    const dataLength = dataArr.length

    if(dataLength !== 2){
      rtdbReference.child(userId).set({
        name: name,
        choise: "",
        online: "false",
        start: "false"
      })
    } else if (dataLength == 2){
      res.json({ message: "esta lleno"})
    }
  })

})*/


app.patch("/rooms/:rtdbLongId/:userId/online", (req, res) => {
  const rtdbLongId = req.params.rtdbLongId
  const userId = req.params.userId
  const userStatus = req.body.status

  const rtdbReference = rtdb.ref("rooms/" + rtdbLongId + "/currentGame/" + userId)
  rtdbReference.update({
    online: userStatus,
  })

  res.json({
    ok: "todo ok"
  })

})


/*app.get("/rooms/:rtdbLongId/:userId/connected", (req, res) => {
  const rtdbLongId = req.params.rtdbLongId
  const userId = req.params.userId

  const rtdbReference = rtdb.ref("rooms/" + rtdbLongId + "/currentGame")
  rtdbReference.get().then((snap) => {
    const data = snap.val()
    const dataArr = Object.entries(data)
    const dataLength = dataArr.length

    dataArr.map((i) => {

      if(dataLength == 2 && i[0] == userId){
        res.json({
          message: "continuar",
        })
      } else if (dataLength !== 2 && i[0] !== userId){
        res.status(401).json({
          message: "sala llena",
        })
      }
    })
  })
})*/


app.patch("/rooms/:rtdbLongId/:userId/start", (req, res) => {
  const rtdbLongId = req.params.rtdbLongId
  const userId = req.params.userId
  const userStart = req.body.start

  const rtdbReference = rtdb.ref("rooms/" + rtdbLongId + "/currentGame/" + userId)
  rtdbReference.update({
    start: userStart,
  })

  res.json({
    ok: "todo ok"
  })

})

  app.use(express.static("dist"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../../dist/index.html"))
  })

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })