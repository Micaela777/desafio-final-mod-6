import { Router } from '@vaadin/router';

class Play extends HTMLElement{
  connectedCallback(){
        this.render();
    };

    render(){
        this.innerHTML = `
            <div class="play-section">
                <div class="names-container">
                    <h3 class="opponent-name">Maguis: 0</h3>
                    <h3 class="my-name">Mica: 0</h3>
                </div>
                <div class="countdown-container">
                    <custom-countdown class="countdown"></custom-countdown>
                </div>
                <div class="my-cat-hands-container">
                    <custom-cat-paper class="my-cat-paper"></custom-cat-paper>
                    <custom-cat-rock class="my-cat-rock"></custom-cat-rock>
                    <custom-cat-scissors class="my-cat-scissors"></custom-cat-scissors>
                </div>
                <div class="room-id-container">
                    <h3 class="room-text">Sala:</h3>
                    <h2 class="room-id">65439</h2>
                </div>
            </div>
        `

        const style = document.createElement("style");
        style.innerHTML = `
            .play-section{
                height: 100vh;
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                grid-template-rows: repeat(3, 1fr);
                grid-template-areas:
                "n1 n4 n4 n3"
                "n1 n4 n4 n3"
                "n2 n2 n2 n2";
                overflow: auto;
                padding: 0px 15px;
                background: linear-gradient(to left, #0e123b, #0a325c, #206985);
            }

            .names-container{
                grid-area: n1;
                display: flex;
                flex-direction: column;
                align-items: center;
                padding-top: 30px;
                gap: 12px;
            }
            @media (min-width: 769px){
                .names-container{
                    padding-left: 100px;
                }
            }

            .countdown-container{
                grid-area: n4;
                display: flex;
                justify-content: center;
            }

            .my-cat-hands-container{
                grid-area: n2;
                display: flex;
                align-items: end;
                justify-content: space-evenly;
            }
            @media (min-width: 769px){
                .my-cat-hands-container{
                    padding: 0px 300px;
                    gap: 40px;
                }
            }

            .room-id-container{
                grid-area: n3;
                display: flex;
                flex-direction: column;
                align-items: center;
                padding-top: 30px;
                gap: 12px;
            }
            @media (min-width: 769px){
                .room-id-container{
                    padding-right: 100px;
                }
            }

            .opponent-name,
            .room-text{
                margin: 0px;
                font-size: 24px;
                font-weight: 400;
                font-family: 'Roboto', sans-serif;
                color: #ffffff;
            }

            .my-name{
                margin: 0px;
                font-size: 24px;
                font-weight: 400;
                font-family: 'Roboto', sans-serif;
                color: #da70db;
            }

            .room-id{
                margin: 0px;
                font-size: 25px;
                font-weight: 400;
                font-family: 'Roboto', sans-serif;
                color: #da70db;
            }

            .my-cat-paper:hover{
                cursor: pointer;
                transform: translateY(-1px);
                transition: all 0.1s;
            }

            .my-cat-rock:hover{
                cursor: pointer;
                transform: translateY(-1px);
                transition: all 0.1s;
            }

            .my-cat-scissors:hover{
                cursor: pointer;
                transform: translateY(-1px);
                transition: all 0.1s;
            }
        `;

        this.appendChild(style)
    };
};
customElements.define('play-page', Play);