
const API_BASE_URL = "http://localhost:3000"

const state = {

    data: {
        name:"",
        email:"",
        userId: "",
        roomId: "",
        rtdbRoomId: "",
        messages: []
    },
    listeners: [],

    getState() {
        return this.data;
    },

    setEmailAndName(name: string, email:string,){
        const cs = this.getState();

        cs.name = name;
        cs.email = email;
        
        this.setState(cs)

        //console.log(cs.name)
        //console.log(cs.email)
    },

    signUp(newUser){

        const cs = this.getState()
        
        return fetch(API_BASE_URL + "/signup", {
            method: "post",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newUser),
        }).then((res) => {
            return res.json()
        }).then((data) => {
            cs.userId = data.id
            //console.log(data)
            this.setState(cs)
            return data
        });
    },

    signIn(userEmail){

        const cs = this.getState()

        return fetch(API_BASE_URL + "/auth", {
            method: "post",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(userEmail),
        }).then((res) => {
            return res.json()
        }).then((data) => {
            cs.userId = data.id
            console.log(data)
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