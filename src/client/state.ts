import { Router } from "@vaadin/router";
import { rtdb } from "./rtdb";

const API_BASE_URL = "http://localhost:3000"

type Jugada = "piedra" | "papel" | "tijeras";

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
                body: JSON.stringify({ userId: cs.userId, name: cs.name }),
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

    setNewUserAndFullRoom(rtdbId, userId){
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

    changePlayerOneOnlineTrue(rtdbId){
        const cs = this.getState();

        return fetch(API_BASE_URL + "/rooms/" + rtdbId + "/playerOne" + "/online",  {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ online: "true" }),
        })
        .then((res) => {
            return res.json();
        }).then((data) => {
            
            console.log(data);

            return data;
        });
    },

    changePlayerTwoOnlineTrue(rtdbId){
        const cs = this.getState();

        return fetch(API_BASE_URL + "/rooms/" + rtdbId + "/playerTwo" + "/online",  {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ online: "true" }),
        })
        .then((res) => {
            return res.json();
        }).then((data) => {
            
            console.log(data);

            return data;
        });
    },

    changePlayerOneOnlineFalse(rtdbId){
        const cs = this.getState();

        return fetch(API_BASE_URL + "/rooms/" + rtdbId + "/playerOne" + "/online" + "/false",  {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ online: "false" }),
        })
        .then((res) => {
            return res.json();
        }).then((data) => {
            
            console.log(data);

            return data;
        });
    },

    changePlayerTwoOnlineFalse(rtdbId){
        const cs = this.getState();

        return fetch(API_BASE_URL + "/rooms/" + rtdbId + "/playerTwo" + "/online" + "/false",  {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ online: "false" }),
        })
        .then((res) => {
            return res.json();
        }).then((data) => {
            
            console.log(data);

            return data;
        });
    },

    setOnline(){
        const rtdbRef = rtdb.ref(`/rooms/${this.data.rtdbRoomId}`)
        rtdbRef.on("value", (snapshot) => {

            const value = snapshot.val()
            const playerOne = value.currentGame.playerOne.online
            const playerTwo = value.currentGame.playerTwo.online

            console.log(playerOne, playerTwo)

            if(playerOne == "true" && playerTwo == "true"){
                Router.go('./lobby')
            }
        })
    }, 

    changePlayersStartStatus(rtdbId, userId){
        const cs = this.getState();

        return fetch(API_BASE_URL + "/rooms/" + rtdbId + "/" + userId + "/start",  {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ start: "true" }),
        })
        .then((res) => {
            return res.json();
        }).then((data) => {
            
            console.log(data);

            return data;
        });
    },

    setStart(){
        const rtdbRef = rtdb.ref(`/rooms/${this.data.rtdbRoomId}`)
        rtdbRef.on("value", (snapshot) => {

            const value = snapshot.val()
            const playerOne = value.currentGame.playerOne.start
            const playerTwo = value.currentGame.playerTwo.start

            console.log(playerOne, playerTwo )

            if(playerOne == "true" && playerTwo == "true"){
                Router.go('./playing')
            }
        })
    },

    setPlayerChoise(move: Jugada, roomId, userId){

        return fetch(API_BASE_URL + "/rooms/" + roomId + "/" + userId + "/play",  {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ choise: move }),
        })
        .then((res) => {
            return res.json();
        }).then((data) => {
            console.log(data);
            return data;
        });
    },

    setStateChoise(){

        const rtdbRef = rtdb.ref(`/rooms/${this.data.rtdbRoomId}`)
        rtdbRef.on("value", (snapshot) => {

            const cs = state.getState()

            const value = snapshot.val()
            const playerOneChoise = value.currentGame.playerOne.choise
            const playerTwoChoise= value.currentGame.playerTwo.choise

            cs.choise = playerOneChoise
            cs.opponentChoise = playerTwoChoise

            this.setState(cs)
            console.log(cs.choise)
            console.log(cs.opponentChoise)
        })

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