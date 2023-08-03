export function initChooseOptionButtonComponent() {

    class ChooseOptionButton extends HTMLElement {
        constructor() {
            super();
            this.render();
        };
        
        render() {
            var shadow = this.attachShadow({ mode: 'open' });

            const button = document.createElement('button');
            button.className = "choose-option-button";
            button.textContent = this.textContent;
            button.innerHTML = `
                <span class="text">${this.textContent}</span>
            `;

            const style = document.createElement('style');

            style.innerHTML = `
                .choose-option-button{
                    width: 100%;
                    padding: 17px 0px;
                    border: 3px solid #ffffff;
                    border-radius: 50px;
                    cursor: pointer;
                    font-size: 26px;
                    color: #ffffff;
                    font-family: 'Roboto', sans-serif;
                    background-color: transparent;
                    transition: 0.1s;
                }
                @media (min-width: 860px){
                    .choose-option-button:hover{
                        cursor: pointer;
                        text-shadow: 0 0 1px #ffffff;
                        box-shadow: inset 0 0 2px #ffffff, 0 0 2px #ffffff;
                        transition: 0.1s;
                        color: #ffffff;
                        background-color: rgba(227,225,225,0.1);
                    }
                }
            `;

            shadow.appendChild(button);
            shadow.appendChild(style);

        };
    };
    customElements.define('custom-choose-option-button', ChooseOptionButton);
};