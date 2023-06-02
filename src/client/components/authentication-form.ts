import { Router } from "@vaadin/router";
import { state } from "../state";

export function initAuthFormComponent() {

    class AuthForm extends HTMLElement {

        shadow = this.attachShadow({ mode: 'open' });
        
        constructor() {
            super();
            this.render()
        
            const form = this.shadow.querySelector('.auth-form');
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const target = e.target as any;
                const targetName = target.name.value;

                state.setName(targetName);

                const newUser = {
                    name: targetName,
                }
                
                state.newUser(newUser).then((res) => {
                    console.log(res)

                    Router.go("./pre-game")
                })
                
                })
            }
        
        render() {
            this.shadow.innerHTML = `
                <form class="auth-form">
                    <div class="fieldset-name">
                        <input class="name-input" type="text" name="name" required>
                        <label class="name-text">Nombre</label>
                    </div>
                    <button class="auth-button">Siguiente</button>
                </form>
            </div>    
             `

            const style = document.createElement('style');

            style.innerHTML = `
                
            `

            this.shadow.appendChild(style);

            
            };
        };
    customElements.define('custom-authentication-form', AuthForm);
};