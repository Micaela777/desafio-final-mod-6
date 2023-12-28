import { Router } from "@vaadin/router";
import { state } from '../state';

class NoChoise extends HTMLElement{
    connectedCallback(){
          this.render();

          const cs = state.getState()
          const roomId = cs.rtdbRoomId
          const userId = cs.userId

          const returnButton = this.querySelector('.return-button')
          returnButton.addEventListener('click', (e) => {
              e.preventDefault()

            Router.go('./instructions') 
          })

          const exitButton = this.querySelector('.exit-button')
          exitButton.addEventListener('click', (e) => {
              e.preventDefault()

            Router.go('./') 
          })

          state.changePlayersStartFalseStatus(roomId, userId).then((res) => {
            //console.log(res)
          })
      };
 
      render(){

          this.innerHTML = `
              <div class="no-choise-section">
                  <div class="no-choise-items-container">
                      <h3 class="text">¡Ups! Parece que no se ha elegido una opción...</h3>
                      <custom-choose-option-button class="return-button">Volver a jugar</custom-choose-option-button>
                      <custom-choose-option-button class="exit-button">Salir</custom-choose-option-button>
                  </div>
              </div>
          `
  
          const style = document.createElement("style");
          style.innerHTML = `
              .no-choise-section{
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
              
              .no-choise-items-container{
                  width: 100%;
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  padding: 19px 0px;
                  gap: 25px;
              }
  
              .text{
                  margin: 0px;
                  text-align: center;
                  padding-bottom: 40px;
                  font-weight: 400;
                  font-size: 28px;
                  color: #ffffff;
                  font-family: 'Roboto', sans-serif;
              }

              .return-button,
              .exit-button{
                width: 100%;
                max-width: 340px;
              }
          `;
  
          this.appendChild(style)
      };
  };
  customElements.define('no-choise-page', NoChoise);