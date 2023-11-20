import { Router } from '@vaadin/router';
import { state } from '../state';

class Instructions extends HTMLElement{
  connectedCallback(){
        this.render();

        const currentGame = state.getState();
        const rtdbId = currentGame.rtdbRoomId;

        state.changePlayerOneOnlineFalse(rtdbId).then((res) => {
            console.log(res)
        })
        state.changePlayerTwoOnlineFalse(rtdbId).then((res) => {
            console.log(res)
        })

        const button = this.querySelector('.play-button')
        button.addEventListener('click', (e) => {
            e.preventDefault()

            const currentGame = state.getState();
            const rtdbId = currentGame.rtdbRoomId;
            const userId = currentGame.userId

            state.changePlayersStartStatus(rtdbId, userId).then((res) => {
                console.log(res)
            })

            Router.go('./play')
            
        })
    };

    render(){
        this.innerHTML = `
            <div class="instructions-section">
                <custom-header class="header"></custom-header>
                <div class="instructions-items-container">
                    <div class="text-container">
                        <h3 class="instructions-text">A continuación, presioná jugar y elegí: <span class="text-color">Piedra, Papel o Tijera</span> antes de que pasen los 5 segundos.</h3>
                        <custom-choose-option-button class="play-button">¡Jugar!</custom-choose-option-button>
                    </div>
                    <div class="hands-container">
                        <custom-cat-paper></custom-cat-paper>
                        <custom-cat-rock></custom-cat-rock>
                        <custom-cat-scissors></custom-cat-scissors>
                    </div>
                </div>
            </div>
        `

        const style = document.createElement("style");
        style.innerHTML = `
            .instructions-section{
                height: 100vh;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: flex-end;
                overflow: auto;
                gap: 45px;
                background: linear-gradient(to left, #0e123b, #0a325c, #206985);
            }

            .header{
                height: 100%;
                width: 100%;
            }

            .text-container{
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 35px;
            }

            .instructions-items-container{
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
            }

            .instructions-text{
                max-width: 600px;
                margin: 0px;
                font-weight: 400;
                font-size: 26px;
                text-align: center;
                font-family: 'Roboto', sans-serif;
                color: #ffffff;
            }

            .text-color{
                color: #da70db;
            }

            .play-button{
                width: 100%;
                max-width: 340px;
            }

            .hands-container{
                width: 100%;
                display: flex;
                align-items: flex-end;
                justify-content: space-around;
                padding: 0px 200px;
                gap: 10px;
            }
        `;

        this.appendChild(style)
    };
};
customElements.define('instructions-page', Instructions);