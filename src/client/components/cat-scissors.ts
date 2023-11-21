export function initCatScissorsComponent() {

    const scissorsImg = require("url:../img/cat-scissors.png");

    class Scissors extends HTMLElement {
        constructor() {
            super();
            this.render()
        }
        render() {
            var shadow = this.attachShadow({ mode: 'open' });

            const div = document.createElement('div');
            div.className = "scissors";
            div.innerHTML = `
                <img class="scissors-img" src="${scissorsImg}">
            `;

            const style = document.createElement('style');

            style.innerHTML = `
                .scissors{
                    display: flex;
                }
                .scissors-img{
                    height: 290px;
                    width: 90px;
                    object-position: 0px 90px;
                }
                @media (min-width: 769px){
                    .scissors-img{
                        height: 260px;
                        width: 79px;
                    }
                }
            `;

            shadow.appendChild(div);
            shadow.appendChild(style);
        };
    };
    customElements.define('custom-cat-scissors', Scissors);
};