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
    
    };

    render(){

        this.innerHTML = `
            <div class="playing-section">
                <custom-countdown class="countdown"></custom-countdown>
                <div class="player-hands">
                    <custom-cat-paper class="paper"></custom-cat-paper>
                    <custom-cat-rock class="rock"></custom-cat-rock>
                    <custom-cat-scissors class="scissors"></custom-cat-scissors>
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

            .player-hands{
                display: flex;
                align-items: flex-end;
                gap: 55px;
            }

            .paper:hover{
                cursor: pointer;
                transform: translateY(-1px);
                transition: all 0.1s;
            }

            .rock:hover{
                cursor: pointer;
                transform: translateY(-1px);
                transition: all 0.1s;
            }

            .scissors:hover{
                cursor: pointer;
                transform: translateY(-1px);
                transition: all 0.1s;
            }
        `;

        this.appendChild(style)

        const countdown = this.querySelector(".countdown")

        const playerPaper = this.querySelector('.paper') as any;
        const playerPaperComponentImg = playerPaper.shadowRoot.querySelector('.paper-img') as any;
        playerPaperComponentImg.style.height = '292px';
        playerPaperComponentImg.style.width = '116px';

        const playerRock = this.querySelector('.rock') as any;
        const playerRockComponentImg = playerRock.shadowRoot.querySelector('.rock-img') as any;
        playerRockComponentImg.style.height = '281px';
        playerRockComponentImg.style.width = '96px';

        const playerScissors = this.querySelector('.scissors') as any;
        const playerScissorsComponentImg = playerScissors.shadowRoot.querySelector('.scissors-img') as any;
        playerScissorsComponentImg.style.height = '281px';
        playerScissorsComponentImg.style.width = '96px';
    };
};
customElements.define('playing-page', Playing);