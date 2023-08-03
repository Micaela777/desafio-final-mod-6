import { Router } from '@vaadin/router';

class Registration extends HTMLElement{
  connectedCallback(){
        this.render();
    };

    render(){
        this.innerHTML = `
            <div class="registration-section">
                <custom-cat-silhouette></custom-cat-silhouette>
                <div class="registration-form-container">
                    <custom-registration-form></custom-registration-form>
                </div>
                <custom-line-img class="bottom-line-img"></custom-line-img>
            </div>
        `

        const style = document.createElement("style");
        style.innerHTML = `
            .registration-section{
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
                .registration-section{
                    padding-bottom: 20px;
                }
            }

            .registration-form-container{
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
customElements.define('registration-page', Registration);