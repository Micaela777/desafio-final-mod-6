export function initLoseImageComponent() {

    const loseImg = require("url:../img/lose.png");

    class Lose extends HTMLElement {
        constructor() {
            super();
            this.render()
        }
        render() {
            var shadow = this.attachShadow({ mode: 'open' });

            const div = document.createElement('div');
            div.className = "lose";
            div.innerHTML = `
                <img class="lose-img" src="${loseImg}">
            `;

            const style = document.createElement('style');

            style.innerHTML = `

                .lose-img{
                    height: 200px;
                    width: 240px;
                }
            `;

            shadow.appendChild(div);
            shadow.appendChild(style);
        };
    };
    customElements.define('custom-lose-img', Lose);
};