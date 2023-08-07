import { Router } from '@vaadin/router';
import { state } from '../state';

class PreGameOptions extends HTMLElement{
  connectedCallback(){
        this.render();

        const newGameButton = this.querySelector('.new-game-button')
        newGameButton.addEventListener('click', (e) => {
            e.preventDefault();

            state.askNewRoom().then((res) => {

                const cs = state.getState()
                cs.rtdbRoomId = res.roomLongId

                console.log(cs.userId)

                Router.go('./new-game');
            })
        });

        const enterTheRoomButton = this.querySelector('.enter-the-room-button')
        enterTheRoomButton.addEventListener('click', (e) => {
            e.preventDefault();
            Router.go('/enter-the-room');
        });
    };

    render(){
        this.innerHTML = `
            <div class="pregame-section">
                <div class="pre-game-section-container">
                    <custom-choose-option-button class="new-game-button">Nuevo Juego</custom-choose-option-button>
                    <h3 class="aux-letter">- O -</h3>
                    <custom-choose-option-button class="enter-the-room-button">Ingresar a una Sala</custom-choose-option-button>
                </div>
            </div>
        `

        const style = document.createElement("style");
        style.innerHTML = `
            .pregame-section{
                height: 100vh;
                padding: 0px 7px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                background: linear-gradient( to left, #0e123b, #0a325c, #206985 );
            }

            .pre-game-section-container{
                width: 100%;
                max-width: 320px;
            }
            @media (min-width: 730px){
                .pre-game-section-container{
                    max-width: 370px;
                }
            }
  
            .aux-letter{
                padding: 7px 0px;
                font-weight: 400;
                text-align: center;
                color: rgba(255,255,255,0.8);
                font-family: 'Roboto', sans-serif;
            }
        `;

        this.appendChild(style)
    };
};
customElements.define('pregame-options-page', PreGameOptions);