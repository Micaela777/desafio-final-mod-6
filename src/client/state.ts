import { rtdb } from "./rtdb";

const API_BASE_URL = "http://localhost:3000"

const state = {

    data: {
        name:"",
        opponentName:"",
        userId: "",
        roomId: "",
        rtdbRoomId: "",
    },
    listeners: [],

    listenDatabase() {
        
        const rtdbRef = rtdb.ref(`/rooms/${this.data.roomId}`);
    
        rtdbRef.on("value", (snapshot) => {
          const currentState = this.getState();
          const value = snapshot.val();
          currentState.rtdbRoomId = value.currentGame;
          this.setState(currentState);
        });
      },

    getState() {
        return this.data;
    },

    setName(name: string){

        const cs = this.getState();
        cs.name = name;
        this.setState(cs)

        console.log(cs.name)
        
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
            //console.log(data)
            this.setState(cs)
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