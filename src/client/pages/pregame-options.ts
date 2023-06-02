import { Router } from '@vaadin/router';

class PreGameOptions extends HTMLElement{
  connectedCallback(){
        this.render();

        const newGameButton = this.querySelector('.new-game-button')
        newGameButton.addEventListener('click', (e) => {
            e.preventDefault();
            Router.go('./play');
        });

        const enterTheRoomButton = this.querySelector('.enter-the-room-button')
        enterTheRoomButton.addEventListener('click', (e) => {
            e.preventDefault();
            Router.go('./enter-the-room');
        });
    };

    render(){
        this.innerHTML = `
            <div class="pregame-section">
                
                
                <button class="new-game-button">Nuevo Juego</button>
                <button class="enter-the-room-button">Ingresar a una sala</button>
                
                
            </div>
        `

        const style = document.createElement("style");
        style.innerHTML = `
            .pregame-section{
                height: 100vh;
                display: flex;
                flex-direction: column;
                align-items: center;
                overflow: auto;
                background-color: #1c2c46;
            }
            @media (min-width: 769px){
                .pregame-section{
                    padding-top: 15px;
                }
            }
  
            .hands-comp{
                display: flex;
                align-items: end;
                gap: 55px;
            }
        `;

        this.appendChild(style)
    };
};
customElements.define('pregame-options-page', PreGameOptions);