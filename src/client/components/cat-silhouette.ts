export function initCatSilhouetteComponent() {

    const silhouetteImg = require("url:../img/cat-silhouette.png");

    class CatSilhouette extends HTMLElement {
        constructor() {
            super();
            this.render()
        }
        render() {
            var shadow = this.attachShadow({ mode: 'open' });

            const div = document.createElement('div');
            div.className = "cat-silhouette";
            div.innerHTML = `
                <img class="cat-silhouette-img" src="${silhouetteImg}">
            `;

            const style = document.createElement('style');

            style.innerHTML = `
                .cat-silhouette{
                    width: 100%;
                }

                .cat-silhouette-img{
                    width: 80vw;
                    max-width: 320px;
                }
                @media (min-width: 769px){
                    .cat-silhouette-img{
                        height: 174px;
                        max-width: 470px;
                    }
                }
            `;

            shadow.appendChild(div);
            shadow.appendChild(style);
        };
    };
    customElements.define('custom-cat-silhouette', CatSilhouette);
};