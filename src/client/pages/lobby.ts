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
                <custom-header class="header"></custom-header>
                <div class="lobby-items-container">
                    <div class="text-container">
                        <h3 class="lobby-text">¡Tu oponente se ha unido!</h3>
                        <custom-choose-option-button class="next-button">Siguiente</custom-choose-option-button>
                    </div>
                    <div class="hands-container">
                        <custom-cat-paper></custom-cat-paper>
                        <custom-cat-rock></custom-cat-rock>
                        <custom-cat-scissors></custom-cat-scissors>
                    </div>
                </div>
            </div>
        `

        const style = document.createElement("style");
        style.innerHTML = `
            .lobby-section{
                height: 100vh;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: flex-end;
                overflow: auto;
                gap: 45px;
                background: linear-gradient(to left, #0e123b, #0a325c, #206985);
            }

            .header{
                height: 100%;
                width: 100%;
            }

            .lobby-items-container{
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 10px;
            }

            .text-container{
                display: flex;
                flex-direction: column;
                gap: 35px;
            }

            .lobby-text{
                max-width: 300px;
                margin: 0px;
                font-weight: 400;
                font-size: 26px;
                text-align: center;
                font-family: 'Roboto', sans-serif;
                color: #fd7aff;
            }

            .next-button{
                width: 100%;
                max-width: 340px;
            }

            .hands-container{
                width: 100%;
                display: flex;
                align-items: flex-end;
                justify-content: space-evenly;
                gap: 10px;
            }
            @media (min-width: 769px){
                .hands-container{
                    padding: 0px 150px;
                }
            }
        `;

        this.appendChild(style)
    };
};
customElements.define('lobby-page', Lobby);