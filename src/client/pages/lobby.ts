import { Router } from '@vaadin/router';
import { state } from '../state';

class Lobby extends HTMLElement{
  connectedCallback(){
    
        this.render();

        const button = this.querySelector('.next-button')
        button.addEventListener('click', (e) => {
            e.preventDefault()

            Router.go('./instructions') 
        }) 

    };

    render(){
        this.innerHTML = `
            <div class="lobby-section">
                <div class="lobby-items-container">
                    <h3 class="lobby-text">¡Tu oponente se ha unido!</h3>
                    <custom-choose-option-button class="next-button">Siguiente</custom-choose-option-button>
                </div>
            </div>
        `

        const style = document.createElement("style");
        style.innerHTML = `
            .lobby-section{
                height: 100vh;
                padding: 0px 7px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                overflow: auto;
                gap: 45px;
                background: linear-gradient(to left, #0e123b, #0a325c, #206985);
            }
            @media (min-width: 769px){
                .lobby-section{
                    padding-bottom: 20px;
                }
            }

            .lobby-items-container{
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 9px 0px;
                gap: 45px;
            }

            .lobby-first-text{
                max-width: 300px;
                margin: 0px;
                font-weight: 400;
                font-size: 26px;
                text-align: center;
                font-family: 'Roboto', sans-serif;
                color: #ffffff;
            }

            .next-button{
                width: 100%;
                max-width: 340px;
            }
        `;

        this.appendChild(style)
    };
};
customElements.define('lobby-page', Lobby);