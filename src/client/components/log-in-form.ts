import { Router } from "@vaadin/router";
import { state } from "../state";

export function initLogInFormComponent() {

    class LogInForm extends HTMLElement {

        shadow = this.attachShadow({ mode: 'open' });
        
        constructor() {
            super();
            this.render()
        
            const form = this.shadow.querySelector('.log-in-form');
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
                    const respuesta = res.message

                    if(respuesta == "Este usuario ya existee"){
                        console.log("ya existe broh")
                    } else if (respuesta == "Usuario creado") {
                        Router.go("./pre-game")
                    }
                })
                
                })
            }
        
        render() {
            this.shadow.innerHTML = `
                <form class="log-in-form">
                    <div class="fieldset-name">
                        <input class="name-input" type="text" name="name" id="name" placeholder="E-mail" required>
                    </div>
                    <button class="log-in-button">Siguiente</button>
                </form>    
             `

            const style = document.createElement('style');

            style.innerHTML = `
                .fieldset-name{
                    display: flex;
                    flex-direction: column;
                }

                .name-input{
                    border: none;
                    border-radius: 20px;
                    padding: 15px 20px;
                    font-size: 23px;
                    font-family: 'Roboto', sans-serif;
                }

                .log-in-form{
                    display: flex;
                    flex-direction: column;
                    gap: 35px;
                }

                .log-in-button{
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
                    .log-in-button:hover{
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
    customElements.define('custom-log-in-form', LogInForm);
};