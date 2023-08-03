export function initHomeStartButtonComponent() {

    class HomeStartButton extends HTMLElement {
        constructor() {
            super();
            this.render();
        };
        
        render() {
            var shadow = this.attachShadow({ mode: 'open' });

            const button = document.createElement('button');
            button.className = "home-start-button";
            button.textContent = this.textContent;
            button.innerHTML = `
                <span class="text">${this.textContent}</span>
            `;

            const style = document.createElement('style');

            style.innerHTML = `
                .text{
                    background-color: #ffffff;
                    padding: 10px 48px;
                    border-radius: 18px;
                }
                
                .home-start-button{
                    margin-top: 2px;
                    padding: 3px;
                    display: flex;
                    border: none;
                    font-size: 20px;
                    position: relative;
                    letter-spacing: 1px;
                    font-weight: 400;
                    border-radius: 20px;
                    color: #17205d;
                    font-family: 'Roboto', sans-serif;
                    background: #17205d;
                    transition: 0.3s;
                    overflow: hidden;
                }
                @media (min-width: 860px){
                    .home-start-button:hover{
                        color: #ffffff;
                        transition: 0.3s;
                        cursor: pointer;
                    }
                }  

                .home-start-button:hover .text{
                    background: none;
                    transition: all ease-out 95ms;
                }

                .text::before{
                    content:'';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    right: auto;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
                    transition: 0.5s;
                }

                .text:hover::before{
                    left: 100%;
                }
            `;

            shadow.appendChild(button);
            shadow.appendChild(style);

        };
    };
    customElements.define('custom-home-start-button', HomeStartButton);
};