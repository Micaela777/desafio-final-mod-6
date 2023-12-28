import { Router } from '@vaadin/router';

class EnterTheRoom extends HTMLElement{
  connectedCallback(){
        this.render();
    };

    render(){
        this.innerHTML = `
            <div class="enter-the-room-section">
                <custom-cat-silhouette></custom-cat-silhouette>
                <div class="enter-the-room-items-container">
                    <h3 class="enter-name-text">Por favor, ingresa el ID de la sala:</h3>
                    <div class="enter-the-room-form-container">
                        <custom-enter-the-room-form></custom-enter-the-room-form>
                    </div>
                </div>
                <custom-line-img class="bottom-line-img"></custom-line-img>
            </div>
        `

        const style = document.createElement("style");
        style.innerHTML = `
            .enter-the-room-section{
                height: 100vh;
                padding: 0px 7px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                overflow: auto;
                gap: 35px;
                background: linear-gradient(to left, #0e123b, #0a325c, #206985);
            }
            @media (min-width: 769px){
                .enter-the-room-section{
                    padding-bottom: 20px;
                }
            }

            .enter-the-room-items-container{
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 20px;
                gap: 45px;
            }

            .enter-name-text{
                margin: 0px;
                text-align: center;
                font-weight: 400;
                font-size: 22px;
                color: #ffffff;
                font-family: 'Roboto', sans-serif;
            }

            .enter-the-room-form-container{
                width: 100%;
                max-width: 340px;
            }

            .bottom-line-img{
                padding-top: 38px;
            }
        `;

        this.appendChild(style)
    };
};
customElements.define('enter-the-room-page', EnterTheRoom);