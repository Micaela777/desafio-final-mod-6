export function initCopiedRoomIdTextComponent() {

    class RoomIdText extends HTMLElement {
        constructor() {
            super();
            this.render()
        };
        render() {
            var shadow = this.attachShadow({ mode: 'open' });

            const div = document.createElement('div');
            div.className = "container"
            div.innerHTML = `
                <h1 class="room-id-text">¡ID copiado en portapapeles!</h1>
            `;

            const style = document.createElement('style');

            style.innerHTML = `
                .container{
                    padding: 17px 25px;
                    border-radius: 0px 0px 20px 20px;
                    background-color: #e28fe3;
                }

                .room-id-text{
                  margin: 0px;
                  font-size: 17px;
                  font-weight: 300;
                  text-align: center;
                  font-family: 'Roboto', sans-serif;
                  color: #000000; 
                }
                @media (min-width: 950px){
                  .room-id-text{
                      font-size: 17px;
                  }
                }
            `;

            shadow.appendChild(div);
            shadow.appendChild(style);
        };
    };
    customElements.define('custom-room-id-text', RoomIdText);
};