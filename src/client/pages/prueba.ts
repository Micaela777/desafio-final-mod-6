import { Router } from '@vaadin/router';
import { state } from '../state';

class Prueba extends HTMLElement{
  connectedCallback(){
    this.render()

       //state.setUsersStart()
    };

    render(){

        this.innerHTML = `
            <div class="play-section">
                <div class="names-container">Esperando a que coso presione jugar</div>
            </div>
        `

        const style = document.createElement("style");
        style.innerHTML = `
            .play-section{
                height: 100vh;
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                grid-template-rows: repeat(3, 1fr);
                grid-template-areas:
                "n1 n4 n4 n3"
                "n1 n4 n4 n3"
                "n2 n2 n2 n2";
                overflow: auto;
                padding: 0px 15px;
                background: linear-gradient(to left, #0e123b, #0a325c, #206985);
            }

            
        `;

        this.appendChild(style)
    };
};
customElements.define('prueba-page', Prueba);