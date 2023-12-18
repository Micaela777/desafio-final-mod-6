import { Router } from '@vaadin/router';
import { state } from '../state';

class Hands extends HTMLElement{
  connectedCallback(){
    
        this.render();
 
        const topPaper = this.querySelector('.top-paper') as any;
        const topPaperComponentImg = topPaper.shadowRoot.querySelector('.paper-img') as any;
        topPaperComponentImg.style.height = '310px';
        topPaperComponentImg.style.width = '120px';

        const topRock = this.querySelector('.top-rock') as any;
        const topRockComponentImg = topRock.shadowRoot.querySelector('.rock-img') as any;
        topRockComponentImg.style.height = '310px';
        topRockComponentImg.style.width = '95px';

        const topScissors = this.querySelector('.top-scissors') as any;
        const topScissorsComponentImg = topScissors.shadowRoot.querySelector('.scissors-img') as any;
        topScissorsComponentImg.style.height = '310px';
        topScissorsComponentImg.style.width = '95px';

        //--------------------------------------------------------------

        const bottomPaper = this.querySelector('.bottom-paper') as any;
        const bottomPaperComponentImg = bottomPaper.shadowRoot.querySelector('.paper-img') as any;
        bottomPaperComponentImg.style.height = '310px';
        bottomPaperComponentImg.style.width = '120px'; 

        const bottomRock = this.querySelector('.bottom-rock') as any;
        const bottomRockComponentImg = bottomRock.shadowRoot.querySelector('.rock-img') as any;
        bottomRockComponentImg.style.height = '310px';
        bottomRockComponentImg.style.width = '95px';

        const bottomScissors = this.querySelector('.bottom-scissors') as any;
        const bottomScissorsComponentImg = bottomScissors.shadowRoot.querySelector('.scissors-img') as any;
        bottomScissorsComponentImg.style.height = '310px';
        bottomScissorsComponentImg.style.width = '95px';


        const cs = state.getState();

        const roomId = cs.rtdbRoomId
        const userId = cs.userId

       state.getChoiseResult(roomId, userId).then((res) => {

        if(res.message == "playerOne"){

            if(cs.choise == "papel"){
                bottomPaper.style.display = "inherit"
            } else if (cs.choise == "piedra"){
                bottomRock.style.display = "inherit"
            } else if (cs.choise == "tijeras"){
                bottomScissors.style.display = "inherit"
            }

            if (cs.opponentChoise == "papel"){
                topPaper.style.display  = "inherit"
            } else if (cs.opponentChoise == "piedra"){
                topRock.style.display = "inherit"
            } else if (cs.opponentChoise == "tijeras"){
                topScissors.style.display = "inherit"
            }

        } else if (res.message == "playerTwo"){
            
            if(cs.opponentChoise == "papel"){
                bottomPaper.style.display = "inherit"
            } else if (cs.opponentChoise == "piedra"){
                bottomRock.style.display = "inherit"
            } else if (cs.opponentChoise == "tijeras"){
                bottomScissors.style.display = "inherit"
            }

            if(cs.choise == "papel"){
                topPaper.style.display = "inherit"
            } else if (cs.choise == "piedra"){
                topRock.style.display = "inherit"
            } else if (cs.choise == "tijeras"){
                topScissors.style.display = "inherit"
            }
        }

        setTimeout(() => {
            Router.go("./results")
        }, 3000);
       })
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

            .bottom-paper{
                display: none;
            }

            .bottom-rock{
                display: none;
            }

            .bottom-scissors{
                display: none;
            }
        `;

        this.appendChild(style)
    };
};
customElements.define('hands-page', Hands);