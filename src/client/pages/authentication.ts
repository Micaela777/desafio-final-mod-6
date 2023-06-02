import { Router } from '@vaadin/router';

class Authentication extends HTMLElement{
  connectedCallback(){
        this.render();

        /*const button = this.querySelector('.boton')
        button.addEventListener('click', (e) => {
            e.preventDefault()
            Router.go('./choose-cat')
        })*/
    };

    render(){
        this.innerHTML = `
            <div class="authentication-section">
                <div>soy autenticacion</div>
                <custom-authentication-form></custom-authentication-form>
            </div>
        `

        const style = document.createElement("style");
        style.innerHTML = `
            .authentication-section{
                height: 100vh;
                display: flex;
                flex-direction: column;
                align-items: center;
                overflow: auto;
                background-color: #1c2c46;
            }
            @media (min-width: 769px){
                .authentication-section{
                    padding-top: 15px;
                }
            }
        `;

        this.appendChild(style)
    };
};
customElements.define('authentication-page', Authentication);