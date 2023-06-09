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

            .paper-img{
                height: 145px;
                width: 61px;
                
            }
            @media (min-width: 769px){
                .paper-img{
                    height: 386px;
                    width: 167px;
                }
              }
          `;

            shadow.appendChild(div);
            shadow.appendChild(style);
        };
    };
    customElements.define('custom-cat-paper', Paper);
};