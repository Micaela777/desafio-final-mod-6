export function initCatRockComponent() {

    const rockImg = require("url:../img/cat-rock.png");

    class Rock extends HTMLElement {
        constructor() {
            super();
            this.render()
        }
        render() {
            var shadow = this.attachShadow({ mode: 'open' });

            const div = document.createElement('div');
            div.className = "rock";
            div.innerHTML = `
                <img class="rock-img" src="${rockImg}">
            `;

            const style = document.createElement('style');

            style.innerHTML = `
                .rock-img{
                    height: 145px;
                    width: 61px;
                    object-position: 0px 60px;
                    
                }
                @media (min-width: 769px){
                    .rock-img{
                        height: 373px;
                        width: 140px;
                    }
                }
            `;

            shadow.appendChild(div);
            shadow.appendChild(style);
        };
    };
    customElements.define('custom-cat-rock', Rock);
};