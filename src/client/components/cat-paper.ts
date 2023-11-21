export function initCatPaperComponent() {

    const paperImg = require("url:../img/cat-paper.png");

    class Paper extends HTMLElement {
        constructor() {
            super();
            this.render()
        }
        render() {
            var shadow = this.attachShadow({ mode: 'open' });

            const div = document.createElement('div');
            div.className = "paper";
            div.innerHTML = `
                <img class="paper-img" src="${paperImg}">
            `;

            const style = document.createElement('style');

            style.innerHTML = `
                .paper{
                    display: flex;
                }
                .paper-img{
                    height: 260px;
                    width: 95px;
                    object-position: 0px 90px;
                }
                @media (min-width: 769px){
                    .paper-img{
                        height: 260px;
                        width: 95px;
                    }
                }
            `;

            shadow.appendChild(div);
            shadow.appendChild(style);
        };
    };
    customElements.define('custom-cat-paper', Paper);
};