import { Router } from '@vaadin/router';

class EnterTheRoom extends HTMLElement{
  connectedCallback(){
        this.render();

        /*const button = this.querySelector('.choose-cat-button')
        button.addEventListener('click', (e) => {
            e.preventDefault()
            Router.go('./play-page')
        }) */
    };

    render(){
        this.innerHTML = `
            <div class="enter-the-room-section">
                
                <custom-enter-the-room-form></custom-enter-the-room-form>
               
            </div>
        `

        const style = document.createElement("style");
        style.innerHTML = `
            .enter-the-room-section{
                height: 100vh;
                display: flex;
                flex-direction: column;
                align-items: center;
                overflow: auto;
                background-color: #1c2c46;
            }
            @media (min-width: 769px){
                .welcome-section{
                    padding-top: 15px;
                }
            }
        `;

        this.appendChild(style)
    };
};
customElements.define('enter-the-room-page', EnterTheRoom);