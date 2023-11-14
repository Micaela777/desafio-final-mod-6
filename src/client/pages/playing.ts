import { Router } from '@vaadin/router';
import { state } from '../state';

class Playing extends HTMLElement{
  connectedCallback(){
    this.render()

    const currentGame = state.getState();
    const userId = currentGame.userId;
    const rtdbLongId = currentGame.rtdbRoomId;

    };

    render(){

        const currentState = state.getState()
        const opponentName = currentState.opponentName

        this.innerHTML = `
            <div class="play-section">
                <div class="play-items-container">
                    <h2 class="waiting-for-text">Holandaaaa</h2>
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
            .play-section{
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

            .play-items-container{
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 10px;
            }

            .waiting-for-text{
                max-width: 350px;
                text-align: center;
                font-size: 28px;
                font-weight: 400;
                font-family: 'Roboto', sans-serif;
                color: #ffffff;
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
customElements.define('playing-page', Playing);