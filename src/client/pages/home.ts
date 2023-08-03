import { Router } from '@vaadin/router';

class Home extends HTMLElement{
  connectedCallback(){
        this.render();

        const enterTheRoomButton = this.querySelector('.start-button')
        enterTheRoomButton.addEventListener('click', (e) => {
            e.preventDefault();
            Router.go('./form-options');
        });
    };

    render(){
        this.innerHTML = `
            <div class="home-section">
                <div class="title-and-button-container">
                    <custom-main-title></custom-main-title>
                    <custom-home-small-text class="home-small-text">¡Atrévete a participar junto a tus amigos en esta emocionante competencia espacial felina!</custom-home-small-text>
                    <custom-home-start-button class="start-button">Comenzar</custom-home-start-button>
                </div>
                <custom-cat-space></custom-cat-space>
            </div>
        `

        const style = document.createElement("style");
        style.innerHTML = `
            .home-section{
                height: 100vh;
                display: flex;
                align-items: center;
                justify-content: center;
                overflow: auto;
                padding: 0px 20px;
                background-color: #ffffff;
            }
            @media (min-width: 950px){
                .home-section{
                    justify-content: space-between;
                }  
            }

            .title-and-button-container{
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 40px;
            }
            @media (min-width: 950px){
                .title-and-button-container{
                    gap: 30px;
                }  
            }

            .home-small-text{
                padding-bottom: 15px;
            }
            @media (min-width: 950px){
                .home-small-text{
                    padding-bottom: 30px;
                }  
            }

        `;

        this.appendChild(style)
    };
};
customElements.define('home-page', Home);