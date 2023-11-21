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

        this.innerHTML = `
            <div class="playing-section">
                <div class="playerTwo-hands">
                    <custom-cat-paper class="playerTwo-paper"></custom-cat-paper>
                    <custom-cat-rock class="playerTwo-rock"></custom-cat-rock>
                    <custom-cat-scissors class="playerTwo-scissors"></custom-cat-scissors>
                </div>
                <custom-countdown class="countdown"></custom-countdown>
                <div class="playerOne-hands">
                    <custom-cat-paper class="playerOne-paper"></custom-cat-paper>
                    <custom-cat-rock class="playerOne-rock"></custom-cat-rock>
                    <custom-cat-scissors class="playerOne-scissors"></custom-cat-scissors>
                </div>
            </div>
        `

        const style = document.createElement("style");
        style.innerHTML = `
            .playing-section{
                height: 100vh;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                background: linear-gradient(to left, #0e123b, #0a325c, #206985);
            }

            
            .playerTwo-paper{
                display: none;
                align-items: start;
                transform: rotate(180deg);
            }

            .playerTwo-rock{
                display: none;
                align-items: start;
                transform: rotate(180deg);
            }

            .playerTwo-scissors{
                display: none;
                align-items: start;
                transform: rotate(180deg);
            }

            .playerOne-hands{
                display: flex;
                align-items: flex-end;
                gap: 55px;
            }
        `;

        this.appendChild(style)
    };
};
customElements.define('playing-page', Playing);