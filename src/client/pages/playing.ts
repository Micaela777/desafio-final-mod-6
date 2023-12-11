import { Router } from '@vaadin/router';
import { state } from '../state';

class Playing extends HTMLElement{
  connectedCallback(){
    this.render()

    const cs = state.getState()
        const roomId = cs.rtdbRoomId;
        const userId = cs.userId;
        const userChoise = cs.userChoise;
        const opponentChoise = cs.opponentChoise;

    let counter = 5;

    const intervalId = setInterval(() => {
        counter--;
        if (counter < 1) {
            clearInterval(intervalId);
            Router.go('./no-choise');
            
            if(userChoise == "" || opponentChoise == ""){
                clearInterval(intervalId);
                Router.go('./no-choise');
            }
        };
    }, 1000);

        const paper = this.querySelector('.paper') as any;
        const paperComponentImg = paper.shadowRoot.querySelector('.paper-img') as any;
        paperComponentImg.style.height = '292px';
        paperComponentImg.style.width = '116px';

        const removePaperClick = () => {

            state.setPlayerChoise("papel", roomId, userId).then((res) => {
                console.log(res, "primer res")
                console.log(`${res.message} eligio papel`)

                state.setStateChoise()
            })

            paperComponentImg.style.objectPosition = '0px 43px';
            paperComponentImg.style.transition = 'all 0.2s ease-out';
    
            // Acá se le baja opacidad a los elementos no elegidos
            scissors.style.opacity = '0.4';
            rock.style.opacity = '0.4';

            paperComponentImg.removeEventListener('click', removePaperClick);
            paper.style.cursor = 'default';
            paper.style.transform = 'unset';
            scissorsComponentImg.removeEventListener("click", removeScissorsClick);
            scissors.style.cursor = 'default';
            scissors.style.transform = 'unset';
            rockComponentImg.removeEventListener('click', removeRockClick);
            rock.style.cursor = 'default';
            rock.style.transform = 'unset';
        }
        paperComponentImg.addEventListener('click', removePaperClick);
        

        const rock = this.querySelector('.rock') as any;
        const rockComponentImg = rock.shadowRoot.querySelector('.rock-img') as any;
        rockComponentImg.style.height = '281px';
        rockComponentImg.style.width = '96px';

        const removeRockClick = () => {

            state.setPlayerChoise("piedra", roomId, userId).then((res) => {
                console.log(res)
                console.log(`${res.message} eligio piedra`)
                
                state.setStateChoise()
            })

            rockComponentImg.style.objectPosition = '0px 43px';
            rockComponentImg.style.transition = 'all 0.2s ease-out';
    
            // Acá se le baja opacidad a los elementos no elegidos
            scissors.style.opacity = '0.4';
            paper.style.opacity = '0.4';
    
            rockComponentImg.removeEventListener('click', removeRockClick);
            rock.style.cursor = 'default';
            rock.style.transform = 'unset';
            scissorsComponentImg.removeEventListener("click", removeScissorsClick);
            scissors.style.cursor = 'default';
            scissors.style.transform = 'unset';
            paperComponentImg.removeEventListener('click', removePaperClick);
            paper.style.cursor = 'default';
            paper.style.transform = 'unset';
        }
        rockComponentImg.addEventListener('click', removeRockClick);


        const scissors = this.querySelector('.scissors') as any;
        const scissorsComponentImg = scissors.shadowRoot.querySelector('.scissors-img') as any;
        scissorsComponentImg.style.height = '281px';
        scissorsComponentImg.style.width = '96px';

        const removeScissorsClick = () => {

            state.setPlayerChoise("tijeras", roomId, userId).then((res) => {
                console.log(res)
                console.log(`${res.message} eligio tijera`)

                state.setStateChoise()
            })
            
            scissorsComponentImg.style.objectPosition = '0px 43px';
            scissorsComponentImg.style.transition = 'all 0.2s ease-out';
    
            // Acá se le baja opacidad a los elementos no elegidos
            rock.style.opacity = '0.4';
            paper.style.opacity = '0.4';
    
            scissorsComponentImg.removeEventListener('click', removeScissorsClick);
            scissors.style.cursor = 'default';
            scissors.style.transform = 'unset';
            rockComponentImg.removeEventListener("click", removeRockClick);
            rock.style.cursor = 'default';
            rock.style.transform = 'unset';
            paperComponentImg.removeEventListener('click', removePaperClick);
            paper.style.cursor = 'default';
            paper.style.transform = 'unset';
        }
        scissorsComponentImg.addEventListener('click', removeScissorsClick);

        state.getPlayersChoises()
    };

    render(){

        this.innerHTML = `
            <div class="playing-section">
                <custom-countdown class="countdown"></custom-countdown>
                <div class="hands">
                    <custom-cat-paper class="paper"></custom-cat-paper>
                    <custom-cat-rock class="rock"></custom-cat-rock>
                    <custom-cat-scissors class="scissors"></custom-cat-scissors>
                </div>
            </div>
        `

        const style = document.createElement("style");
        style.innerHTML = `
            .playing-section{
                height: 100vh;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                background: linear-gradient(to left, #0e123b, #0a325c, #206985);
            }

            .hands{
                display: flex;
                align-items: flex-end;
                gap: 55px;
            }

            .paper:hover{
                cursor: pointer;
                transform: translateY(-1px);
                transition: all 0.1s;
            }

            .rock:hover{
                cursor: pointer;
                transform: translateY(-1px);
                transition: all 0.1s;
            }

            .scissors:hover{
                cursor: pointer;
                transform: translateY(-1px);
                transition: all 0.1s;
            }
        `;

        this.appendChild(style)
    };
};
customElements.define('playing-page', Playing);