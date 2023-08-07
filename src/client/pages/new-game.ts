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
                hola
            </div>
        `

        const style = document.createElement("style");
        style.innerHTML = `
            .new-chatroom-section{}

        `;

        this.appendChild(style)
    };
};
customElements.define('new-chatroom-page', NewChatroom);