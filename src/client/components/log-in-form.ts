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
                const targetEmail = target.email.value;

                const userEmail = {
                    email: targetEmail,
                }

                state.signIn(userEmail).then((res) => {

                    const response = res.message

                    if (response == "user found"){

                        Router.go("./pre-game")

                    } else if (response == "user not found"){

                        const errorText = this.shadow.querySelector(".error-text") as HTMLInputElement;
                        errorText.style.display = "inherit";

                        const loginForm = this.shadow.querySelector(".log-in-form") as HTMLInputElement;
                        loginForm.style.gap = "21px";

                        setTimeout(() => {
                            errorText.style.display = 'none';
                            loginForm.style.gap = "35px";
                        }, 4000);
                    }
                })
            })
        }
        
        render() {
            this.shadow.innerHTML = `
                <form class="log-in-form">
                    <div class="fieldset-name">
                        <input class="email-input" type="text" name="email" placeholder="E-mail" required>
                    </div>
                    <custom-error-text class="error-text">✘ Este usuario no existe</custom-error-text>
                    <button class="log-in-button">Siguiente</button>
                </form>    
             `

            const style = document.createElement('style');

            style.innerHTML = `
                .fieldset-name{
                    display: flex;
                    flex-direction: column;
                }

                .email-input{
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

                .error-text{
                    display: none;
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