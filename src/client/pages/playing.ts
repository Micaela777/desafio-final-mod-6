import { Router } from '@vaadin/router';
import { state } from '../state';

class Playing extends HTMLElement{
  connectedCallback(){
    this.render()

    let counter = 5;

    /*const intervalId = setInterval(() => {
        counter--;
        if (counter < 1) {
            clearInterval(intervalId);
            Router.go('./no-choise');
        };
    }, 1000);*/

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

            .playerOne-paper:hover{
                cursor: pointer;
                transform: translateY(-1px);
                transition: all 0.1s;
            }

            .playerOne-rock:hover{
                cursor: pointer;
                transform: translateY(-1px);
                transition: all 0.1s;
            }

            .playerOne-scissors:hover{
                cursor: pointer;
                transform: translateY(-1px);
                transition: all 0.1s;
            }
        `;

        this.appendChild(style)

        const countdown = this.querySelector(".countdown")

        const playerOnePaper = this.querySelector('.playerOne-paper') as any;
        const playerOnePaperComponentImg = playerOnePaper.shadowRoot.querySelector('.paper-img') as any;
        playerOnePaperComponentImg.style.height = '292px';
        playerOnePaperComponentImg.style.width = '116px';

        const playerOneRock = this.querySelector('.playerOne-rock') as any;
        const playerOneRockComponentImg = playerOneRock.shadowRoot.querySelector('.rock-img') as any;
        playerOneRockComponentImg.style.height = '281px';
        playerOneRockComponentImg.style.width = '96px';

        const playerOneScissors = this.querySelector('.playerOne-scissors') as any;
        const playerOneScissorsComponentImg = playerOneScissors.shadowRoot.querySelector('.scissors-img') as any;
        playerOneScissorsComponentImg.style.height = '281px';
        playerOneScissorsComponentImg.style.width = '96px';
    };
};
customElements.define('playing-page', Playing);