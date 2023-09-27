import { Router } from "@vaadin/router";
import { state } from "../state";

export function initEnterTheRoomFormComponent() {

    class EnterTheRoomForm extends HTMLElement {

        shadow = this.attachShadow({ mode: 'open' });
        
        constructor() {
            super();
            this.render()
        
            const form = this.shadow.querySelector('.enter-the-room-form');
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const target = e.target as any;
                const targetRoomId = target.roomid.value;

                state.existingRoom(targetRoomId);
                
                state.accessToRoom(targetRoomId).then((res) => {
                    if (res.rtdbRoomId){
                        const cs = state.getState();
                        const userId = cs.userId;

                        cs.rtdbRoomId = res.rtdbRoomId;
                        state.setState(cs);

                        console.log(cs.rtdbRoomId, userId)

                        state.setRoomUserData(cs.rtdbRoomId, userId).then((res) => {
                            console.log(res)
                        })

                        Router.go("./instructions");

                    } else {
                        const errorText = this.shadow.querySelector(".error-text") as HTMLInputElement;
                        errorText.style.display = "inherit";

                        const enterTheRoomForm = this.shadow.querySelector(".enter-the-room-form") as HTMLInputElement;
                        enterTheRoomForm.style.gap = "21px";

                        setTimeout(() => {
                            errorText.style.display = 'none';
                            enterTheRoomForm.style.gap = "35px";
                        }, 4000);
                    }
                })  
            })
        }
        
        render() {
            this.shadow.innerHTML = `
                <form class="enter-the-room-form">
                    <div class="fieldset-id">
                        <input class="id-input" type="text" name="roomid" placeholder="Ej.1234" required>
                    </div>
                    <custom-error-text class="error-text">✘ Esta sala no existe</custom-error-text>
                    <button class="enter-the-room-button">Siguiente</button>
                </form>   
             `

            const style = document.createElement('style');

            style.innerHTML = `
                .enter-the-room-form{
                    display: flex;
                    flex-direction: column;
                    gap: 35px;
                }

                .fieldset-id{
                    display: flex;
                    flex-direction: column;
                }

                .id-input{
                    border: none;
                    border-radius: 20px;
                    padding: 15px 20px;
                    font-size: 23px;
                    font-family: 'Roboto', sans-serif;
                }

                .error-text{
                    display: none;
                }

                .enter-the-room-button{
                    padding: 13px 0px;
                    border: 3px solid #ffffff;
                    border-radius: 20px;
                    cursor: pointer;
                    font-size: 23px;
                    color: #ffffff;
                    font-family: 'Roboto', sans-serif;
                    background-color: transparent;
                    transition: 0.1s;
                }
                @media (min-width: 860px){
                    .enter-the-room-button:hover{
                        cursor: pointer;
                        text-shadow: 0 0 1px #ffffff;
                        box-shadow: inset 0 0 2px #ffffff, 0 0 2px #ffffff;
                        transition: 0.1s;
                        color: #ffffff;
                        background-color: rgba(227,225,225,0.1);
                    }
                }
                
            `
            
            this.shadow.appendChild(style);

            };
        };
    customElements.define('custom-enter-the-room-form', EnterTheRoomForm);
};