import { Router } from '@vaadin/router';
import { state } from '../state';

class Instructions extends HTMLElement{
  connectedCallback(){
        this.render();

        const button = this.querySelector('.play-button')
        button.addEventListener('click', (e) => {
            e.preventDefault()

            const currentGame = state.getState();
            const userId = currentGame.userId;
            const rtdbLongId = currentGame.rtdbRoomId;

            state.changeStartData(rtdbLongId, userId).then((res) => {
                // console.log(res)
                Router.go('./play')
                
            })
        })
    };

    render(){
        this.innerHTML = `
            <div class="instructions-section">
                
                <div class="instructions-items-container">
                    <h3 class="instructions-text">A continuación, presioná jugar y elegí: <span class="text-color">Piedra, Papel o Tijera</span> antes de que pasen los 5 segundos.</h3>
                    <custom-choose-option-button class="play-button">¡Jugar!</custom-choose-option-button>
                </div>
                
            </div>
        `

        const style = document.createElement("style");
        style.innerHTML = `
            .instructions-section{
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
                .instructions-section{
                    padding-bottom: 20px;
                }
            }

            .instructions-items-container{
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 9px 0px;
                gap: 45px;
            }

            .instructions-text{
                max-width: 300px;
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
        `;

        this.appendChild(style)
    };
};
customElements.define('instructions-page', Instructions);