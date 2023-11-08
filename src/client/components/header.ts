import { state } from "../state";
export function initHeaderComponent() {

    class Header extends HTMLElement {
        constructor() {
            super();
            this.render();
        };
        render() {
            var shadow = this.attachShadow({ mode: 'open' });

            const dataFromState = state.getState();
            const name = dataFromState.name;
            const score = dataFromState.score;
            const opponentName = dataFromState.opponentName;
            const opponentScore = dataFromState.opponentScore;
            const roomId = dataFromState.roomId;

            const div = document.createElement('div');
            div.className = "header-section";
            div.innerHTML = `
                <div class="names-container">
                    <h3 class="opponent-name">${opponentName}: ${opponentScore}</h3>
                    <h3 class="my-name">${name}: ${score}</h3>
                </div>
                <div class="room-id-container">
                    <h3 class="room-text">Sala:</h3>
                    <h2 class="room-id">${roomId}</h2>
                </div>
            `

            const style = document.createElement('style');

            style.innerHTML = `
                .header-section{
                    display: flex;
                    align-items: center;
                    justify-content: space-around;
                    margin-top: 50px;
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
                
            `;

            shadow.appendChild(div);
            shadow.appendChild(style);
        };
    };
    
    customElements.define('custom-header', Header); 
}