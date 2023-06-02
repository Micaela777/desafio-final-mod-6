import { Router } from '@vaadin/router';

class Home extends HTMLElement{
  connectedCallback(){
        this.render();

        const enterTheRoomButton = this.querySelector('.authentication-button')
        enterTheRoomButton.addEventListener('click', (e) => {
            e.preventDefault();
            Router.go('./authentication');
        });
    };

    render(){
        this.innerHTML = `
            <div class="home-section">
                <div>Soy la home</div>

                <button class="authentication-button">Comenzar</button>
                
                
            </div>
        `

        const style = document.createElement("style");
        style.innerHTML = `
            .home-section{
                height: 100vh;
                display: flex;
                flex-direction: column;
                align-items: center;
                overflow: auto;
                background-color: #1c2c46;
            }
            @media (min-width: 769px){
                .home-section{
                    padding-top: 15px;
                }
            }
  
        `;

        this.appendChild(style)
    };
};
customElements.define('home-page', Home);