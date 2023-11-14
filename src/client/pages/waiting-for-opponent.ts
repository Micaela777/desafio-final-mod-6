import { Router } from '@vaadin/router';
import { state } from '../state';

class WaitingForOpponent extends HTMLElement{
  connectedCallback(){
    
        this.render();
 
        state.getUsersData()
        

        const currentState = state.getState();

        const rtdbId = currentState.rtdbRoomId
        const userId = currentState.userId

        state.changeData(rtdbId, userId).then((res) => {
           // console.log(res)
        })
        state.setUsersOnline()
    };

    render(){
        this.innerHTML = `
            <div class="waiting-section">
                <div class="waiting-items-container">
                    <h3 class="waiting-text">Esperando a que tu oponente se una a la sala...</h3>
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

            .waiting-text{
                max-width: 300px;
                margin: 0px;
                font-weight: 400;
                font-size: 26px;
                text-align: center;
                font-family: 'Roboto', sans-serif;
                color: #ffffff;
            }
        `;

        this.appendChild(style)
    };
};
customElements.define('waiting-page', WaitingForOpponent);