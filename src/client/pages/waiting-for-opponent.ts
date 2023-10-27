import { Router } from '@vaadin/router';
import { state } from '../state';

class WaitingForOpponent extends HTMLElement{
  connectedCallback(){
    
        this.render();

        const button = this.querySelector('.next-button')
        button.addEventListener('click', (e) => {
            e.preventDefault()

            Router.go('./instructions') 
        }) 

        state.getUsersData()
        state.setUsersOnline()
        const currentState = state.getState();

        const rtdbId = currentState.rtdbRoomId
        const userId = currentState.userId
        const users = currentState.numberOfUsers

        if(users == 0){
            console.log("es 0")
        } else if (users == 1){
            console.log("es 1")
        }
        
         console.log(users)

        state.changeData(rtdbId, userId).then((res) => {
           // console.log(res)
        })

    };

    render(){
        this.innerHTML = `
            <div class="waiting-section">
                <div class="waiting-items-container">
                    <h3 class="waiting-first-text">Esperando a que tu oponente se una a la sala...</h3>
                    <h3 class="waiting-second-text">¡Tu oponente se ha unido!</h3>
                    <button class="next-button" disabled>Siguiente</button>
                </div>
            </div>
        `

        const style = document.createElement("style");
        style.innerHTML = `
            .waiting-section{
                height: 100vh;
                padding: 0px 7px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                overflow: auto;
                gap: 45px;
                background: linear-gradient(to left, #0e123b, #0a325c, #206985);
            }
            @media (min-width: 769px){
                .waiting-section{
                    padding-bottom: 20px;
                }
            }

            .waiting-items-container{
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 9px 0px;
                gap: 45px;
            }

            .waiting-first-text{
                max-width: 300px;
                margin: 0px;
                font-weight: 400;
                font-size: 26px;
                text-align: center;
                font-family: 'Roboto', sans-serif;
                color: #ffffff;
            }

            .next-button{
                width: 100%;
                max-width: 340px;
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
                .next-button:hover{
                    cursor: pointer;
                    text-shadow: 0 0 1px #ffffff;
                    box-shadow: inset 0 0 2px #ffffff, 0 0 2px #ffffff;
                    transition: 0.1s;
                    color: #ffffff;
                    background-color: rgba(227,225,225,0.1);
                }
        `;

        this.appendChild(style)
    };
};
customElements.define('waiting-page', WaitingForOpponent);