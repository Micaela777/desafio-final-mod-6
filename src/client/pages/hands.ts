import { Router } from '@vaadin/router';
import { state } from '../state';

class Hands extends HTMLElement{
  connectedCallback(){
    
        this.render();
 
        state.getUsersData()
        

        const currentState = state.getState();

        const rtdbId = currentState.rtdbRoomId
        const userId = currentState.userId

        

    };

    render(){
        this.innerHTML = `
            <div class="loading-data-section">
                <div class="loading-data-items-container">
                    <h3 class="loading-data-text">Cargando...</h3>
                </div>
            </div>
        `

        const style = document.createElement("style");
        style.innerHTML = `
            .loading-data-section{
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
                .loading-data-section{
                    padding-bottom: 20px;
                }
            }

            .loading-data-items-container{
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 9px 0px;
                gap: 45px;
            }

            .loading-data-text{
                max-width: 300px;
                margin: 0px;
                font-weight: 400;
                font-size: 26px;
                text-align: center;
                font-family: 'Roboto', sans-serif;
                color: #ffffff;
            }
        `;

        this.appendChild(style)
    };
};
customElements.define('hands-page', Hands);