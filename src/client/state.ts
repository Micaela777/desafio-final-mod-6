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
            const value = snapshot.val()
            const usersData = value.currentGame
            const usersDataArr = Object.entries(usersData)
            

            for (const value of usersDataArr) {
                console.log(value[0])
                return value
            }
        })
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