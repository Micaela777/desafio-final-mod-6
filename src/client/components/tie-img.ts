export function initTieImageComponent() {

    const tieImg = require("url:../img/tie.png");

    class Tie extends HTMLElement {
        constructor() {
            super();
            this.render()
        }
        render() {
            var shadow = this.attachShadow({ mode: 'open' });

            const div = document.createElement('div');
            div.className = "tie";
            div.innerHTML = `
                <img class="tie-img" src="${tieImg}">
            `;

            const style = document.createElement('style');

            style.innerHTML = `

                .tie-img{
                    height: 280px;
                    width: 90px;
                    
                }
                @media (min-width: 769px){
                    .tie-img{
                        height: 200px;
                        width: 240px;
                    }
                }
            `;

            shadow.appendChild(div);
            shadow.appendChild(style);
        };
    };
    customElements.define('custom-tie-img', Tie);
};