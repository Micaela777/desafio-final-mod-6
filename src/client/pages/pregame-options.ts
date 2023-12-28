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

                //console.log(cs.userId)

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
            <div class="pre-game-section">
                <custom-cat-silhouette></custom-cat-silhouette>
                <div class="pre-game-items-container">
                    <h3 class="hi-text">¡Hola <span class="user-name">${state.data.name}</span>! Elige una de las siguentes opciones:</h3>
                    <div class="pre-game-buttons-container">
                        <custom-choose-option-button class="new-game-button">Nuevo Juego</custom-choose-option-button>
                        <custom-choose-option-button class="enter-the-room-button">Ingresar a una Sala</custom-choose-option-button>
                    </div>
                </div>
                <custom-line-img class="bottom-line-img"></custom-line-img>
            </div>
        `

        const style = document.createElement("style");
        style.innerHTML = `
            .pre-game-section{
                height: 100vh;
                padding: 0px 7px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 45px;
                background: linear-gradient( to left, #0e123b, #0a325c, #206985 );
            }
            @media (min-width: 769px){
                .pre-game-section{
                    padding-bottom: 20px;
                }
            }

            .pre-game-buttons-container{
                width: 100%;
                max-width: 320px;
                display: flex;
                flex-direction: column;
                gap: 35px;
            }
            @media (min-width: 730px){
                .pre-game-buttons-container{
                    max-width: 370px;
                }
            }

            .pre-game-items-container{
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 18px 0px;
                gap: 45px;
            }
  
            .hi-text{
                margin: 0px;
                text-align: center;
                font-weight: 400;
                font-size: 22px;
                color: #ffffff;
                font-family: 'Roboto', sans-serif;
            }

            .user-name{
                color: #fd7aff;
            }

            .bottom-line-img{
                padding-top: 20px;
            }
        `;

        this.appendChild(style)
    };
};
customElements.define('pre-game-options-page', PreGameOptions);