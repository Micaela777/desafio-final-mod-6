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
                .scissors-img{
                    height: 145px;
                    width: 61px;
                    object-position: 0px 60px;
                }
                @media (min-width: 769px){
                    .scissors-img{
                        height: 386px;
                        width: 136px;
                    }
                }
            `;

            shadow.appendChild(div);
            shadow.appendChild(style);
        };
    };
    customElements.define('custom-cat-scissors', Scissors);
};