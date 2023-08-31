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
                .win{
                    display: flex;
                }

                .win-img{
                    height: 280px;
                    width: 90px;
                    object-position: 0px 90px;
                    
                }
                @media (min-width: 769px){
                    .win-img{
                        height: 285px;
                        width: 100px;
                    }
                }
            `;

            shadow.appendChild(div);
            shadow.appendChild(style);
        };
    };
    customElements.define('custom-win-img', Win);
};