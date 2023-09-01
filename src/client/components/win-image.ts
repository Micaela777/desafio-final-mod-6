export function initWinImageComponent() {

    const winImg = require("url:../img/win.png");

    class Win extends HTMLElement {
        constructor() {
            super();
            this.render()
        }
        render() {
            var shadow = this.attachShadow({ mode: 'open' });

            const div = document.createElement('div');
            div.className = "win";
            div.innerHTML = `
                <img class="win-img" src="${winImg}">
            `;

            const style = document.createElement('style');

            style.innerHTML = `

                .win-img{
                    height: 200px;
                    width: 240px;
                }
            `;

            shadow.appendChild(div);
            shadow.appendChild(style);
        };
    };
    customElements.define('custom-win-img', Win);
};