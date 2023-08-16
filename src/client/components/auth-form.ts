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
                console.log(targetName)

                state.setName(targetName);

                const userName = {
                    name: targetName,
                }

                state.auth(userName).then((res) => {
                    console.log(res)
                    Router.go("./pre-game-options")
                })
            })
        }
        
        render() {
            this.shadow.innerHTML = `
                <form class="auth-form">
                    <div class="fieldset-name">
                        <input class="name-input" type="text" name="name" placeholder="Nombre" required>
                    </div>
                    <button class="next-button">Siguiente</button>
                </form>    
             `

            const style = document.createElement('style');

            style.innerHTML = `
                .auth-form{
                    display: flex;
                    flex-direction: column;
                    gap: 35px;
                }

                .fieldset-name{
                    display: flex;
                    flex-direction: column;
                }

                .name-input{
                    text-align: center;
                    outline: 10px;
                    border: none;
                    border-radius: 20px;
                    padding: 15px 20px;
                    font-size: 23px;
                    font-family: 'Roboto', sans-serif;
                }

                .next-button{
                    padding: 13px 0px;
                    border: 3px solid #ffffff;
                    border-radius: 20px;
                    cursor: pointer;
                    font-size: 23px;
                    color: #ffffff;
                    font-family: 'Roboto', sans-serif;
                    background-color: transparent;
                    transition: 0.1s;
                }
                @media (min-width: 860px){
                    .next-button:hover{
                        cursor: pointer;
                        text-shadow: 0 0 1px #ffffff;
                        box-shadow: inset 0 0 2px #ffffff, 0 0 2px #ffffff;
                        transition: 0.1s;
                        color: #ffffff;
                        background-color: rgba(227,225,225,0.1);
                    }
                }
                
            `

            this.shadow.appendChild(style);
            };
        };

    customElements.define('custom-auth-form', AuthForm);
};