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
                <div class="cat-hands-container">
                    <custom-cat-paper></custom-cat-paper>
                    <custom-cat-rock></custom-cat-rock>
                    <custom-cat-scissors></custom-cat-scissors>
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
                display: flex;
                flex-direction: row;
                justify-content: space-evenly;
                padding: 0px 15px;
                background: linear-gradient(to left, #0e123b, #0a325c, #206985);
            }

            .names-container,
            .room-id-container{
                display: flex;
                flex-direction: column;
                padding-top: 30px;
                gap: 12px;
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

            .cat-hands-container{
                display: flex;
                align-items: end;
                gap: 50px;
            }
        `;

        this.appendChild(style)
    };
};
customElements.define('play-page', Play);