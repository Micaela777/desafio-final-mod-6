import { Router } from '@vaadin/router';
import { state } from '../state';

class Hands extends HTMLElement{
  connectedCallback(){
    
        this.render();
 
        state.getUsersData()
        

        const currentState = state.getState();

        const rtdbId = currentState.rtdbRoomId
        const userId = currentState.userId
        const playerOneChoise = currentState.choise
        const playerTwoChoise = currentState.opponentChoise

        console.log(playerOneChoise, playerTwoChoise)

        

    };

    render(){
        this.innerHTML = `
            <div class="hands-section">
                <div class="top-hands">
                    <custom-cat-paper class="top-paper"></custom-cat-paper>
                    <custom-cat-rock class="top-rock"></custom-cat-rock>
                    <custom-cat-scissors class="top-scissors"></custom-cat-scissors>
                </div>
                <div class="bottom-hands">
                    <custom-cat-paper class="bottom-paper"></custom-cat-paper>
                    <custom-cat-rock class="bottom-rock"></custom-cat-rock>
                    <custom-cat-scissors class="bottom-scissors"></custom-cat-scissors>
                </div>
            </div>
        `

        const style = document.createElement("style");
        style.innerHTML = `
            .hands-section{
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
                .hands-section{
                    padding-bottom: 20px;
                }
            }

            .hands-items-container{
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 9px 0px;
                gap: 45px;
            }

            .hands-text{
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
customElements.define('hands-page', Hands);