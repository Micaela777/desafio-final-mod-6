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
                .rock{
                    display: flex;
                }

                .rock-img{
                    height: 280px;
                    width: 90px;
                    object-position: 0px 90px;
                    
                }
                @media (min-width: 769px){
                    .rock-img{
                        height: 255px;
                        width: 83px;
                    }
                }
            `;

            shadow.appendChild(div);
            shadow.appendChild(style);
        };
    };
    customElements.define('custom-cat-rock', Rock);
};