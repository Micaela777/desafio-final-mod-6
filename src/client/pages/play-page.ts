import { Router } from '@vaadin/router';

class Play extends HTMLElement{
  connectedCallback(){
        this.render();
    };

    render(){
        this.innerHTML = `
            <div class="play-section">
                
                <div>HOLAA soy la pagina del play</div>

                <div class="cat-hands-container">
                    <custom-cat-paper></custom-cat-paper>
                    <custom-cat-rock></custom-cat-rock>
                    <custom-cat-scissors></custom-cat-scissors>
                </div>

            </div>
        `

        const style = document.createElement("style");
        style.innerHTML = `
            .play-section{
                height: 100vh;
                background-color: #1c2c46;
            }

            .cat-hands-container{
                display: flex;
            }
        `;

        this.appendChild(style)
    };
};
customElements.define('play-page', Play);