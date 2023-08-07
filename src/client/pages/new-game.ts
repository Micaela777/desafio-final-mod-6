import { Router } from '@vaadin/router';

class NewChatroom extends HTMLElement{
  connectedCallback(){
        this.render();

        /*const enterTheRoomButton = this.querySelector('.start-button')
        enterTheRoomButton.addEventListener('click', (e) => {
            e.preventDefault();
            Router.go('./form-options');
        });*/
    };

    render(){
        this.innerHTML = `
            <div class="new-chatroom-section">
                <custom-cat-silhouette></custom-cat-silhouette>
                <div class="new-chatroom-section-items-container">
                    <h2 class="room-id-reference">ID de la sala:</h2>
                    <div class="id-container">
                        <h1 class="id">6544</h1>
                    </div>
                    <h2 class="share-room-id">Compartilo con tu contrincante</h2>
                    <div class="continue-button-container">
                        <button class="continue-button">Siguiente</button>
                    </div>
                </div>
                <custom-line-img class="bottom-line-img"></custom-line-img>
            </div>
        `

        const style = document.createElement("style");
        style.innerHTML = `
            .new-chatroom-section{
                height: 100vh;
                padding: 0px 7px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                overflow: auto;
                gap: 30px;
                background: linear-gradient( to left, #0e123b, #0a325c, #206985 );
            }
            @media (min-width: 769px){
                .new-chatroom-section{
                    padding-bottom: 21px;
                }
            }

            .new-chatroom-section-items-container{
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 27px;
            }

            .room-id-reference{
                margin: 0px;
                padding-top: 3px;
                font-size: 23px;
                font-weight: 400;
                font-family: 'Roboto', sans-serif;
                color: #ffffff;
            }

            .share-room-id{
                margin: 0px;
                font-size: 23px;
                font-weight: 400;
                text-align: center;
                font-family: 'Roboto', sans-serif;
                color: #ffffff;
            }

            .id-container{
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 30px;
                background-color: #ffffff;
            }

            .id{
                margin: 0px;
                padding: 20px 35px;
                font-size: 35px;
                font-family: 'Roboto', sans-serif;
                background: linear-gradient( to left, #0a325c, #1a4f75);
                -webkit-text-fill-color: transparent;
                -webkit-background-clip: text;
            }

            .continue-button-container{
                width: 100%;
                max-width: 340px;
            }

            .continue-button{
                width: 100%;
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
                .continue-button:hover{
                    cursor: pointer;
                    text-shadow: 0 0 1px #ffffff;
                    box-shadow: inset 0 0 2px #ffffff, 0 0 2px #ffffff;
                    transition: 0.1s;
                    color: #ffffff;
                    background-color: rgba(227,225,225,0.1);
                }
            }

            .bottom-line-img{
                padding-top: 28px;
            }
        `;

        this.appendChild(style)
    };
};
customElements.define('new-chatroom-page', NewChatroom);