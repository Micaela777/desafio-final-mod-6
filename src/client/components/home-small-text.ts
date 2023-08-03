export function initHomeSmallTextComponent() {

    class HomeSmallText extends HTMLElement {
        constructor() {
            super();
            this.render();
        };
        render() {
            var shadow = this.attachShadow({ mode: 'open' });

            const div = document.createElement('div');
            div.className = "home-small-text";
            div.textContent = this.textContent; 

            const style = document.createElement('style');

            style.innerHTML = `
                .home-small-text{
                    max-width: 370px;
                    margin: 0px;
                    text-align: center;
                    font-size: 19px;
                    font-weight: 400;
                    font-family: 'Roboto', sans-serif;
                    color: #000000; 
                }
                @media (min-width: 950px){
                  .home-small-text{
                      max-width: 400px;
                    }
                }
            `;

            shadow.appendChild(div);
            shadow.appendChild(style);
        };
    };
    customElements.define('custom-home-small-text', HomeSmallText); 
}