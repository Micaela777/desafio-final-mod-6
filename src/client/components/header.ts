import { state } from "../state";
export function initHeaderComponent() {

    class Header extends HTMLElement {
        constructor() {
            super();
            this.render();
        };
        render() {
            var shadow = this.attachShadow({ mode: 'open' });

            const cs = state.getState();
            const roomId = cs.roomId
            const data = cs.dataFromDb
            const playerOneName = data[0][1].name
            const playerTwoName = data[1][1].name
            const playerOneScore = data[0][1].score
            const playerTwoScore = data[1][1].score

            const div = document.createElement('div');
            div.className = "header-section";
            div.innerHTML = `
                <div class="names-container">
                    <h3 class="opponent-name">${playerTwoName}: <span class="opponent">${playerTwoScore}</span></h3>
                    <h3 class="my-name">${playerOneName}: <span class="player">${playerOneScore}</span></h3>
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
                .room-text,
                .my-name{
                    margin: 0px;
                    font-size: 24px;
                    font-weight: 400;
                    font-family: 'Roboto', sans-serif;
                    color: #ffffff;
                }

                .opponent,
                .player{
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