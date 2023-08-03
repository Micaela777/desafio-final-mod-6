export function initLineImgComponent() {

    const lineImg = require("url:../img/line-img.png");

    class Line extends HTMLElement {
        constructor() {
            super();
            this.render()
        }
        render() {
            var shadow = this.attachShadow({ mode: 'open' });

            const div = document.createElement('div');
            div.className = "line";
            div.innerHTML = `
                <img class="line-img" src="${lineImg}">
            `;

            const style = document.createElement('style');

            style.innerHTML = `
                .line{
                    width: 100%;
                }

                .line-img{
                    width: 80vw;
                    max-width: 320px;
                }
                @media (min-width: 769px){
                    .line-img{
                        height: 8px;
                        max-width: 480px;
                    }
                }
            `;

            shadow.appendChild(div);
            shadow.appendChild(style);
        };
    };
    customElements.define('custom-line-img', Line);
};