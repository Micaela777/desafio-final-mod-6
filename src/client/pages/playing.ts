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
            .playing-section{
                height: 100vh;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                background: linear-gradient(to left, #0e123b, #0a325c, #206985);
            }

            .top-hands{
                display: flex;
                align-items: flex-end;
                gap: 55px;
                transform: rotate(180deg);
            }

            .top-paper{
                display: none;
            }

            .top-rock{
                display: none;
            }

            .top-scissors{
                display: none;
            }

            .bottom-hands{
                display: flex;
                align-items: flex-end;
                gap: 55px;
            }

            .bottom-paper:hover{
                cursor: pointer;
                transform: translateY(-1px);
                transition: all 0.1s;
            }

            .bottom-rock:hover{
                cursor: pointer;
                transform: translateY(-1px);
                transition: all 0.1s;
            }

            .bottom-scissors:hover{
                cursor: pointer;
                transform: translateY(-1px);
                transition: all 0.1s;
            }
        `;

        this.appendChild(style)

    };

    addListeners(){
        const countdown = this.querySelector(".countdown")

        const bottomPaper = this.querySelector('.paper') as any;
        const bottomPaperComponentImg = bottomPaper.shadowRoot.querySelector('.paper-img') as any;
        bottomPaperComponentImg.style.height = '292px';
        bottomPaperComponentImg.style.width = '116px';

        const bottomRock = this.querySelector('.rock') as any;
        const bottomRockComponentImg = bottomRock.shadowRoot.querySelector('.rock-img') as any;
        bottomRockComponentImg.style.height = '281px';
        bottomRockComponentImg.style.width = '96px';

        const bottomScissors = this.querySelector('.scissors') as any;
        const bottomScissorsComponentImg = bottomScissors.shadowRoot.querySelector('.scissors-img') as any;
        bottomScissorsComponentImg.style.height = '281px';
        bottomScissorsComponentImg.style.width = '96px';
    }
};
customElements.define('playing-page', Playing);