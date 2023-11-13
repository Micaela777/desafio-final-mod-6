import { Router } from "@vaadin/router";

class FullRoom extends HTMLElement{
    connectedCallback(){
          this.render();

          const button = this.querySelector('.full-room-button')
          button.addEventListener('click', (e) => {
              e.preventDefault()

            Router.go('./pre-game-options') 
          })
      };
 
      render(){
          this.innerHTML = `
              <div class="full-room-section">
                  <div class="full-room-items-container">
                      <h3 class="text">¡Esta sala está llena!</h3>
                      <custom-choose-option-button class="full-room-button">Volver</custom-choose-option-button>
                  </div>
              </div>
          `
  
          const style = document.createElement("style");
          style.innerHTML = `
              .full-room-section{
                  height: 100vh;
                  padding: 0px 7px;
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                  overflow: auto;
                  gap: 45px;
                  background: linear-gradient(to left, #0e123b, #0a325c, #206985);
              }
              
              .full-room-items-container{
                  width: 100%;
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  padding: 19px 0px;
                  gap: 45px;
              }
  
              .text{
                  margin: 0px;
                  text-align: center;
                  font-weight: 400;
                  font-size: 28px;
                  color: #ffffff;
                  font-family: 'Roboto', sans-serif;
              }

              .full-room-button{
                width: 100%;
                max-width: 340px;
              }
          `;
  
          this.appendChild(style)
      };
  };
  customElements.define('full-room-page', FullRoom);