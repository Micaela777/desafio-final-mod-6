import { Router } from '@vaadin/router';

class FormOptions extends HTMLElement{
  connectedCallback(){
        this.render();

        const registrationButton = this.querySelector('.registration-button')
        registrationButton.addEventListener('click', (e) => {
            e.preventDefault();
            Router.go('./registration');
        });

        const logInButton = this.querySelector('.log-in-button')
        logInButton.addEventListener('click', (e) => {
            e.preventDefault();
            Router.go('./log-in');
        });
    };

    render(){
        this.innerHTML = `
            <div class="form-options-section">
                <div class="form-options-section-container">
                    <custom-choose-option-button class="registration-button">Registrarse</custom-choose-option-button>
                    <h3 class="aux-letter">- O -</h3>
                    <custom-choose-option-button class="log-in-button">Iniciar Sesión</custom-choose-option-button>
                </div>
            </div>
        `

        const style = document.createElement("style");
        style.innerHTML = `
            .form-options-section{
                height: 100vh;
                padding: 0px 7px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                background: linear-gradient( to left, #0e123b, #0a325c, #206985 );
            }

            .form-options-section-container{
                width: 100%;
                max-width: 320px;
            }
            @media (min-width: 730px){
                .form-options-section-container{
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
customElements.define('form-options-page', FormOptions);