import { Router } from '@vaadin/router';

class LogIn extends HTMLElement{
  connectedCallback(){
        this.render();
    };

    render(){
        this.innerHTML = `
            <div class="log-in-section">
                <custom-cat-silhouette></custom-cat-silhouette>
                <h3 class="enter-email-text">Por favor, ingresa tu correo electrónico:</h3>
                <div class="log-in-form-container">
                    <custom-log-in-form></custom-log-in-form>
                </div>
                <custom-line-img class="bottom-line-img"></custom-line-img>
            </div>
        `

        const style = document.createElement("style");
        style.innerHTML = `
            .log-in-section{
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
                .log-in-section{
                    padding-bottom: 20px;
                }
            }

            .enter-email-text{
                margin: 0px;
                text-align: center;
                font-weight: 400;
                font-size: 22px;
                padding-top: 25px;
                color: #ffffff;
                font-family: 'Roboto', sans-serif;
            }

            .log-in-form-container{
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
customElements.define('log-in-page', LogIn);