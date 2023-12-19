import { state } from "../state";
import { Router } from "@vaadin/router";

class Results extends HTMLElement{
    connectedCallback(){
          this.render();

          const cs = state.getState()
          const roomId = cs.rtdbRoomId
          const userId = cs.userId
          const result = cs.result
          const data = cs.dataFromDb
          const playerOneId = data[0][1].id
          const playerTwoid = data[1][1].id

          const playAgainButton = this.querySelector('.play-again-button')
          playAgainButton.addEventListener('click', (e) => {
              e.preventDefault();

              Router.go('./instructions');
          });

          const leaveButton = this.querySelector('.leave-button')
          leaveButton.addEventListener('click', (e) => {
              e.preventDefault();
              Router.go('/');
          });


          const winImg = this.querySelector('.win-img') as any
          const loseImg = this.querySelector('.lose-img') as any
          const tieImg = this.querySelector('.tie-img') as any
          const background = this.querySelector('.results-section') as any

          if(result == "win"){
            if(userId == playerOneId){
                winImg.style.display = "inherit"
                background.style.background = "linear-gradient(#0a1226,92%,#5cc4bb)"
            }
            if(userId == playerTwoid){
                loseImg.style.display = "inherit"
                background.style.background = "linear-gradient(#120509,92%,#a8454d)"
            }
          }
          if(result == "lose"){
            if(userId == playerOneId){
                loseImg.style.display = "inherit"
            }
            if(userId == playerTwoid){
                winImg.style.display = "inherit"
            }
          }
          if(result == "tie"){
            tieImg.style.display = "inherit"
            background.style.background = "linear-gradient(#0c071a,92%,#954cbc)"
          }


          state.changePlayersStartFalseStatus(roomId, userId).then((res) => {
            console.log(res)
            state.setPlayersNoChoise(roomId, userId).then((res) => {
                console.log(res)
              })
          })

      };
  
      render(){

        const cs = state.getState()
        const name = cs.name
        const opponentName = cs.opponentName
        const score = cs.score
        const opponentScore = cs.opponentScore

          this.innerHTML = `
              <div class="results-section">
                  <custom-win-img class="win-img"></custom-win-img>
                  <custom-lose-img class="lose-img"></custom-lose-img>
                  <custom-tie-img class="tie-img"></custom-tie-img>
                  <div class="score-container">
                      <h2 class="score-title">Puntaje</h2>
                      <h4 class="opponent-score">${opponentName}: ${opponentScore}</h4>
                      <h4 class="my-score"><span class="my-name">${name}:</span> ${score}</h4>
                  </div>
                  <div class="buttons-conatiner">
                      <custom-choose-option-button class="play-again-button">Volver a jugar</custom-choose-option-button>
                      <custom-choose-option-button class="leave-button">Salir</custom-choose-option-button>
                  </div>
              </div>
          `
  
          const style = document.createElement("style");
          style.innerHTML = `
            .results-section{
                height: 100vh;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 35px;
                padding-bottom: 10px;
            }

            .win-img{
                display: none;
            }

            .lose-img{
                display: none;
            }

            .tie-img{
                display: none;
            }

            .score-container{
                height: 145px;
                width: 229px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                border-radius: 30px;
                gap: 5px;
                background-color: #ffffff;
            }

            .score-title{
                margin: 0px;
                margin-bottom: 10px;
                text-align: center;
                font-family: 'Roboto', sans-serif;
            }

            .opponent-score,
            .my-score{
                margin: 0px;
                margin-left: 28px;
                font-size: 20px;
                font-family: 'Roboto', sans-serif;
            }

            .my-name{
                margin: 0px;
                font-family: 'Roboto', sans-serif;
                color: #be5abf;
            }

            .buttons-conatiner{
                width: 100%;
                max-width: 320px;
                display: flex;
                flex-direction: column;
                gap: 20px;
            }

          `;
  
          this.appendChild(style)
      };
  };
  customElements.define('results-page', Results);