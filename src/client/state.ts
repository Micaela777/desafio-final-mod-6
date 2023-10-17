import { rtdb } from "./rtdb";

const API_BASE_URL = "http://localhost:3000"


const state = {

    data: {
        userId: "",
        name:"",
        score: 0,
        choise: "",
        opponentName:"",
        opponentScore: 0,
        opponentChoise: "",
        roomId: "",
        rtdbRoomId: "",
        dataFromDb: [],
    },
    listeners: [],

    getState() {
        return this.data;
    },

    auth(userName){

        const cs = this.getState()
        
        return fetch(API_BASE_URL + "/auth", {
            method: "post",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(userName),
        }).then((res) => {
            return res.json()
        }).then((data) => {
            cs.userId = data.id
            this.setState(cs)
            console.log(cs.userId)
            return data
        });
    },

    askNewRoom(){
        const cs = this.getState();

            return fetch(API_BASE_URL + "/rooms", {
                method: "post",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({userId: cs.userId}),
            }).then((res) => {
                return res.json()
            }).then((data) => {
                cs.roomId = data.id
                console.log(data)
                this.setState(cs)
                console.log(cs.roomId)
                return data
            });
    },

    setRoomUserData(rtdbId, userId){
        const cs = this.getState();

        return fetch(API_BASE_URL + "/rooms/" + rtdbId + "/" + userId,  {
            method: "post",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ name: cs.name }),
        })
        .then((res) => {
            return res.json();
        }).then((data) => {
            
            console.log(data);

            return data;
        });
    },

    getUsersData(){
        
        const rtdbRef = rtdb.ref(`/rooms/${this.data.rtdbRoomId}`)
        rtdbRef.on("value", (snapshot) => {
            const cs = this.getState()

            const value = snapshot.val()
            const usersData = value.currentGame
            const userDataArr = Object.entries(usersData)
          
            cs.dataFromDb = userDataArr

            console.log(cs.dataFromDb, "cuando guardo la rtdb data")
            
            this.setState(cs)
            this.getOpponentName()
        })
        
    },

    getOpponentName(){
        const cs = this.getState()
        
        const nameFromDb = cs.dataFromDb
        nameFromDb.map((i) => {
            if(i[1].name != cs.name){
                cs.opponentName = i[1].name
            }
            console.log(i[1].name)
        })

        console.log(nameFromDb, "la supuesta data que deberia aprecer")
        console.log(cs, "data del state completo")
    },

    setUsersOnline(){}, //lo tengo que llamar en el formulario del nombre

    setUsersStatus(){
        const cs = this.getState();

        const rtdbRef = rtdb.ref(`/rooms/${this.data.rtdbRoomId}`)
        rtdbRef.on("value", (snapshot) => {
            const value = snapshot.val()
            const usersData = value.currentGame
            const userDataArr = Object.entries(usersData)
            userDataArr.map((i) => {
                console.log(i[1]["online"])
                if(i[1]["online"] == "false"){
                    console.log("es falso")
                }
            }) 
            
        })

    },
    
    setName(name: string){
        const cs = this.getState();
        cs.name = name;

        const nameFromDb = cs.dataFromDb
        nameFromDb.map((i) => {
            if(i[1].name != cs.opponentName){
                cs.name = i[1].name
            }
            console.log(i[1].name)
        })

        this.setState(cs)

        console.log(cs.name)
        
    },

    accessToRoom(roomId){
        const cs = this.getState()
        
        return fetch(API_BASE_URL + "/rooms/" + roomId + "?userId=" + cs.userId)
        .then((res) => {
            return res.json();
        }).then((data) => {
            cs.rtdbRoomId = data.rtdbRoomId;
            console.log(data);
            this.setState(cs);
            return data;
        });
    },

    existingRoom(roomId){
        const cs = this.getState();
        cs.roomId = roomId;
        this.setState(cs);
        console.log(cs.roomId)
    },

    listenDatabase() {
        
        const rtdbRef = rtdb.ref(`/rooms/${this.data.roomId}`);
    
        rtdbRef.on("value", (snapshot) => {
          const currentState = this.getState();
          const value = snapshot.val();
          currentState.rtdbRoomId = value.currentGame;
          this.setState(currentState);
        });
    },

    setState(newState) {
        this.data = newState;
        for (const cb of this.listeners) {
            cb();
        }
    },

    subscribe(callback: (any) => any) {
        this.listeners.push(callback)
    },
}

export { state }