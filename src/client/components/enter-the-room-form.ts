import { Router } from "@vaadin/router";
import { state } from "../state";

export function initEnterTheRoomFormComponent() {

    class EnterTheRoomForm extends HTMLElement {

        shadow = this.attachShadow({ mode: 'open' });
        
        constructor() {
            super();
            this.render()
        
            const form = this.shadow.querySelector('.enter-the-room-form');
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const target = e.target as any;
                const targetId = target.id.value;

                console.log(targetId)

                    Router.go("./play")
                
                })
            }
        
        render() {
            this.shadow.innerHTML = `
                <form class="enter-the-room-form">
                    <div class="fieldset-id">
                        <input class="id-input" type="text" name="id" placeholder="Ej.1234" required>
                        <label class="id-text">Nombre</label>
                    </div>
                    <button class="enter-the-room-button">Siguiente</button>
                </form>
            </div>    
             `

            const style = document.createElement('style');

            style.innerHTML = `
                
            `

            this.shadow.appendChild(style);

            
            };
        };
    customElements.define('custom-enter-the-room-form', EnterTheRoomForm);
};