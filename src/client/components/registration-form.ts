import { Router } from "@vaadin/router";
import { state } from "../state";

export function initRegistrationFormComponent() {

    class RegistrationForm extends HTMLElement {

        shadow = this.attachShadow({ mode: 'open' });
        
        constructor() {
            super();
            this.render()
        
            const form = this.shadow.querySelector('.registration-form');
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const target = e.target as any;
                const targetName = target.name.value;
                const targetEmail = target.email.value;

                console.log(targetName)
                console.log(targetEmail);

                state.setEmailAndName(targetName, targetEmail);

                const newUser = {
                    name: targetName,
                    email: targetEmail
                }

                state.signUp(newUser).then((res) => {

                    const response = res.message;
                    console.log(response)

                    if (response == "user created"){

                        Router.go("./pre-game");

                    } else if (response == "this user already exists"){ 

                        const errorText = this.shadow.querySelector(".error-text") as HTMLInputElement;
                        errorText.style.display = "inherit";

                        const registrationForm = this.shadow.querySelector(".registration-form") as HTMLInputElement;
                        registrationForm.style.gap = "21px";

                        setTimeout(() => {
                            errorText.style.display = 'none';
                            registrationForm.style.gap = "35px";
                        }, 4000);

                        console.log("ya existe este bro, anda a iniciar sesion")
                    }
                })
                
            })
            
        }
        
        render() {
            this.shadow.innerHTML = `
                <form class="registration-form">
                    <div class="fieldset-name-and-email">
                        <input class="name-input" type="text" name="name" id="name" placeholder="Nombre" required>
                        <input class="email-input" type="text" name="email" id="email" placeholder="E-mail" required>
                    </div>
                    <custom-registration-error-text class="error-text">✘ Este usuario ya existe</custom-registration-error-text>
                    <button class="registration-button">Siguiente</button>
                </form>    
             `

            const style = document.createElement('style');

            style.innerHTML = `
                .fieldset-name-and-email{
                    display: flex;
                    flex-direction: column;
                    padding-top: 25px;
                    gap: 30px;
                }

                .name-input{
                    border: none;
                    border-radius: 20px;
                    padding: 15px 20px;
                    font-size: 23px;
                    font-family: 'Roboto', sans-serif;
                }

                .email-input{
                    border: none;
                    border-radius: 20px;
                    padding: 15px 20px;
                    font-size: 23px;
                    font-family: 'Roboto', sans-serif;
                }

                .registration-form{
                    display: flex;
                    flex-direction: column;
                    gap: 35px;
                }

                .error-text{
                    display: none;
                }

                .registration-button{
                    padding: 10px 0px;
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
                    .registration-button:hover{
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

    customElements.define('custom-registration-form', RegistrationForm);
};