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
                    <h3 class="room-id-reference">ID de la sala:</h3>
                    <h1 class="id"></h1>
                    <h3 class="room-id-reference">Compartilo con tu contrincante</h3>
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
                gap: 35px;
                background: linear-gradient( to left, #0e123b, #0a325c, #206985 );
            }
        `;

        this.appendChild(style)
    };
};
customElements.define('new-chatroom-page', NewChatroom);