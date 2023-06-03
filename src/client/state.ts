
const API_BASE_URL = "http://localhost:3000"

const state = {

    data: {
        name:"",
        userId: "",
        roomId: "",
        rtdbRoomId: "",
        messages: []
    },
    listeners: [],

    getState() {
        return this.data;
    },

    setName(name: string,){
        const cs = this.getState();

        cs.name = name;
        
        this.setState(cs)
        console.log(cs.name)
    },

    newUser(newUser){

        const cs = this.getState()
        
        return fetch(API_BASE_URL + "/newUser", {
            method: "post",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newUser),
        }).then((res) => {
            return res.json()
        }).then((data) => {
            cs.userId = data.id
            console.log(data)
            this.setState(cs)
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