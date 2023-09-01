import { state } from "../state";

class Results extends HTMLElement{
    connectedCallback(){
          this.render();
      };
  
      render(){
          this.innerHTML = `
              <div class="results-section">
                  <div class="results-section-container">
                      <custom-win-img></custom-win-img>
                      <div class="score-container">
                          <h2 class="score-title">Puntaje</h2>
                          <h4 class="opponent-score">Maguis: 0</h4>
                          <h4 class="my-score"><span class="my-name">Mica:</span>0</h4>
                      </div>
                      <div class="buttons-conatiner">
                          <custom-choose-option-button class="play-again-button">Volver a jugar</custom-choose-option-button>
                          <custom-choose-option-button class="leave-button">Salir</custom-choose-option-button>
                      </div>
                  </div>
              </div>
          `
  
          const style = document.createElement("style");
          style.innerHTML = `
            .results-section{
                height: 100vh;
                background: linear-gradient( #070708, 92%, #5cc4bb );
            }
  
            .score-container{
                background-color: #ffffff;
            }

            .score-title{
                margin: 0px;
                font-family: 'Roboto', sans-serif;
            }

            .opponent-score,
            .my-score{
                margin: 0px;
                font-family: 'Roboto', sans-serif;
            }

            .my-name{
                margin: 0px;
                font-family: 'Roboto', sans-serif;
                color: #be5abf;
            }

            .play-again-button{
                width: 100%;
                max-width: 320px;
                display: flex;
                flex-direction: column;
                gap: 35px;
            }

            .leave-button{
                width: 100%;
                max-width: 250px;
                display: flex;
                flex-direction: column;
                gap: 35px;
            }

          `;
  
          this.appendChild(style)
      };
  };
  customElements.define('results-page', Results);