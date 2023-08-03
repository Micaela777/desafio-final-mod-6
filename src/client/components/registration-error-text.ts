export function initRegistrationErrorTextComponent() {

    class RegistrationErrorText extends HTMLElement {
        constructor() {
            super();
            this.render();
        };
        render() {
            var shadow = this.attachShadow({ mode: 'open' });

            const div = document.createElement('div');
            div.className = "registration-error-text";
            div.textContent = this.textContent; 

            const style = document.createElement('style');

            style.innerHTML = `
                .registration-error-text{
                    max-width: 370px;
                    margin: 0px;
                    text-align: center;
                    font-size: 19px;
                    font-weight: 400;
                    font-family: 'Roboto', sans-serif;
                    color: #eb7575; 
                }
                @media (min-width: 950px){
                  .registration-error-text{
                      max-width: 400px;
                    }
                }
            `;

            shadow.appendChild(div);
            shadow.appendChild(style);
        };
    };
    customElements.define('custom-registration-error-text', RegistrationErrorText); 
}