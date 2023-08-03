export function initHomeCatImageComponent() {

    const catImg = require("url:../img/cat-space.png");

    class CatSpace extends HTMLElement {
        constructor() {
            super();
            this.render()
        }
        render() {
            var shadow = this.attachShadow({ mode: 'open' });

            const div = document.createElement('div');
            div.className = "cat-space-container";
            div.innerHTML = `
                <img class="cat-space-img" src="${catImg}">
            `;

            const style = document.createElement('style');

            style.innerHTML = `
                @media (min-width: 950px){
                    .cat-space-container{
                        width: 60vw;
                    }
                }

                .cat-space-img{
                    display: none;
                }
                @media (min-width: 950px){
                    .cat-space-img{
                        display: inherit;
                        width: 100%;
                    }
                }
            `;

            shadow.appendChild(div);
            shadow.appendChild(style);
        };
    };
    customElements.define('custom-cat-space', CatSpace);
};