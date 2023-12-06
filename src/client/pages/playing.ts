import { Router } from '@vaadin/router';
import { state } from '../state';

class Playing extends HTMLElement{
  connectedCallback(){
    this.render()

    let counter = 5;

    /*const intervalId = setInterval(() => {
        counter--;
        if (counter < 1) {
            clearInterval(intervalId);
            Router.go('./no-choise');
        };
    }, 1000);*/

    const cs = state.getState()
    const roomId = cs.rtdbRoomId
    const userId = cs.userId

        const countdown = this.querySelector(".countdown") as any;

        const topPaper = this.querySelector('.top-paper') as any;
        const topPaperComponentImg = topPaper.shadowRoot.querySelector('.paper-img') as any;
        topPaperComponentImg.style.height = '292px';
        topPaperComponentImg.style.width = '116px';

        const topRock = this.querySelector('.top-rock') as any;
        const topRockComponentImg = topRock.shadowRoot.querySelector('.rock-img') as any;
        topRockComponentImg.style.height = '281px';
        topRockComponentImg.style.width = '96px';

        const topScissors = this.querySelector('.top-scissors') as any;
        const topScissorsComponentImg = topScissors.shadowRoot.querySelector('.scissors-img') as any;
        topScissorsComponentImg.style.height = '281px';
        topScissorsComponentImg.style.width = '96px';
        
    // ------------------------------------------------------------------------------------    
        
        const bottomPaper = this.querySelector('.bottom-paper') as any;
        const bottomPaperComponentImg = bottomPaper.shadowRoot.querySelector('.paper-img') as any;
        bottomPaperComponentImg.style.height = '292px';
        bottomPaperComponentImg.style.width = '116px';

        const removePaperClick = () => {

            state.setPlayerChoise("papel", roomId, userId).then((res) => {
                console.log(res, "primer res")
                console.log(`${res.message} eligio papel`)

                state.setStateChoise()

                setTimeout(() => {
                    if(res.message == "playerOne"){
                        if(cs.opponentChoise == "tijeras"){
                            countdown.style.display = 'none';
                            topScissors.style.display = 'inherit';
                            console.log("el segundo usuario es tijeras")
                        }
                    } else if (res.message == "playerTwo"){
                        if(cs.choise == "papel"){
                            countdown.style.display = 'none';
                            topPaper.style.display = 'inherit';
                            console.log("el primer usuario es papel")
                        }
                    }
                }, 800);
            })

            bottomPaperComponentImg.style.objectPosition = '0px 43px';
            bottomPaperComponentImg.style.transition = 'all 0.2s ease-out';
    
            // Acá se le baja opacidad a los elementos no elegidos
            bottomScissors.style.opacity = '0.4';
            bottomRock.style.opacity = '0.4';

            
    
            /*setTimeout(() => {
                if (state.data.currentGame.computerPlay == "tijeras") {
                    computerScissorsComponent.style.display = 'flex';
                } else if (state.data.currentGame.computerPlay == "piedra") {
                    computerRockComponent.style.display = 'flex';
                } else if (state.data.currentGame.computerPlay == "papel") {
                    computerPaperComponent.style.display = 'flex';
                };
    
                countdownComponent.style.display = 'none';
                rockComponent.style.display = 'none';
                paperComponent.style.display = 'none';
    
                bottomPaperComponentImg.style.height = '279px';
                bottomPaperComponentImg.style.width = '87px';
            }, 800);
    
            clearInterval(intervalId);
            setTimeout(() => {
                params.goTo('/results');
            }, 2500);*/
            bottomPaperComponentImg.removeEventListener('click', removePaperClick);
            bottomPaper.style.cursor = 'default';
            bottomPaper.style.transform = 'unset';
            bottomScissorsComponentImg.removeEventListener("click", removeScissorsClick);
            bottomScissors.style.cursor = 'default';
            bottomScissors.style.transform = 'unset';
            bottomRockComponentImg.removeEventListener('click', removeRockClick);
            bottomRock.style.cursor = 'default';
            bottomRock.style.transform = 'unset';
        }
        bottomPaperComponentImg.addEventListener('click', removePaperClick);
        

// ---------------------------------------------------------------------------------------------------------
        const bottomRock = this.querySelector('.bottom-rock') as any;
        const bottomRockComponentImg = bottomRock.shadowRoot.querySelector('.rock-img') as any;
        bottomRockComponentImg.style.height = '281px';
        bottomRockComponentImg.style.width = '96px';

        const removeRockClick = () => {

            state.setPlayerChoise("piedra", roomId, userId).then((res) => {
                console.log(res)
                console.log(`${res.message} eligio piedra`)
                
                state.setStateChoise()
            })

            bottomRockComponentImg.style.objectPosition = '0px 43px';
            bottomRockComponentImg.style.transition = 'all 0.2s ease-out';
    
            // Acá se le baja opacidad a los elementos no elegidos
            bottomScissors.style.opacity = '0.4';
            bottomPaper.style.opacity = '0.4';
    
            /*setTimeout(() => {
                if (state.data.currentGame.computerPlay == "tijeras") {
                    computerScissorsComponent.style.display = 'flex';
                } else if (state.data.currentGame.computerPlay == "piedra") {
                    computerRockComponent.style.display = 'flex';
                } else if (state.data.currentGame.computerPlay == "papel") {
                    computerPaperComponent.style.display = 'flex';
                };
    
                countdownComponent.style.display = 'none';
                rockComponent.style.display = 'none';
                paperComponent.style.display = 'none';
    
                bottomRockComponentImg.style.height = '279px';
                bottomRockComponentImg.style.width = '87px';
            }, 800);
    
            clearInterval(intervalId);
            setTimeout(() => {
                params.goTo('/results');
            }, 2500);*/
            bottomRockComponentImg.removeEventListener('click', removeRockClick);
            bottomRock.style.cursor = 'default';
            bottomRock.style.transform = 'unset';
            bottomScissorsComponentImg.removeEventListener("click", removeScissorsClick);
            bottomScissors.style.cursor = 'default';
            bottomScissors.style.transform = 'unset';
            bottomPaperComponentImg.removeEventListener('click', removePaperClick);
            bottomPaper.style.cursor = 'default';
            bottomPaper.style.transform = 'unset';
        }
        bottomRockComponentImg.addEventListener('click', removeRockClick);

//------------------------------------------------------------------------------------------------------------
        const bottomScissors = this.querySelector('.bottom-scissors') as any;
        const bottomScissorsComponentImg = bottomScissors.shadowRoot.querySelector('.scissors-img') as any;
        bottomScissorsComponentImg.style.height = '281px';
        bottomScissorsComponentImg.style.width = '96px';

        const removeScissorsClick = () => {

            state.setPlayerChoise("tijeras", roomId, userId).then((res) => {
                console.log(res)
                console.log(`${res.message} eligio tijera`)

                state.setStateChoise()

                setTimeout(() => {
                    if(res.message == "playerOne"){
                        if(cs.opponentChoise == "tijeras"){
                            countdown.style.display = 'none';
                            topScissors.style.display = 'inherit';
                            console.log("el segundo usuario es tijeras")
                        }
                    } else if (res.message == "playerTwo"){
                        if(cs.choise == "papel"){
                            countdown.style.display = 'none';
                            topPaper.style.display = 'inherit';
                            console.log("el primer usuario es papel")
                        }
                    }
                }, 800)

                /*if(res.message == "playerOne"){
                    if(cs.opponentChoise == "tijeras"){
                        countdown.style.display = 'none';
                        topScissors.style.display = 'inherit';
                        console.log("el segundo usuario es tijeras")
                    }
                } else if (res.message == "playerTwo"){
                    if(cs.choise == "papel"){
                        countdown.style.display = 'none';
                        topPaper.style.display = 'inherit';
                        console.log("el primer usuario es papel")
                    }
                }*/
            })
            
            bottomScissorsComponentImg.style.objectPosition = '0px 43px';
            bottomScissorsComponentImg.style.transition = 'all 0.2s ease-out';
    
            // Acá se le baja opacidad a los elementos no elegidos
            bottomRock.style.opacity = '0.4';
            bottomPaper.style.opacity = '0.4';
    
            /*setTimeout(() => {
                if (state.data.currentGame.computerPlay == "tijeras") {
                    computerScissorsComponent.style.display = 'flex';
                } else if (state.data.currentGame.computerPlay == "piedra") {
                    computerRockComponent.style.display = 'flex';
                } else if (state.data.currentGame.computerPlay == "papel") {
                    computerPaperComponent.style.display = 'flex';
                };
    
                countdownComponent.style.display = 'none';
                rockComponent.style.display = 'none';
                paperComponent.style.display = 'none';
    
                bottomScissorsComponentImg.style.height = '279px';
                bottomScissorsComponentImg.style.width = '87px';
            }, 800);
    
            clearInterval(intervalId);
            setTimeout(() => {
                params.goTo('/results');
            }, 2500);*/
            bottomScissorsComponentImg.removeEventListener('click', removeScissorsClick);
            bottomScissors.style.cursor = 'default';
            bottomScissors.style.transform = 'unset';
            bottomRockComponentImg.removeEventListener("click", removeRockClick);
            bottomRock.style.cursor = 'default';
            bottomRock.style.transform = 'unset';
            bottomPaperComponentImg.removeEventListener('click', removePaperClick);
            bottomPaper.style.cursor = 'default';
            bottomPaper.style.transform = 'unset';
        }
        bottomScissorsComponentImg.addEventListener('click', removeScissorsClick);
    };

    render(){

        this.innerHTML = `
            <div class="playing-section">
                <custom-countdown class="countdown"></custom-countdown>
                <div class="top-hands">
                    <custom-cat-paper class="top-paper"></custom-cat-paper>
                    <custom-cat-rock class="top-rock"></custom-cat-rock>
                    <custom-cat-scissors class="top-scissors"></custom-cat-scissors>
                </div>
                <div class="bottom-hands">
                    <custom-cat-paper class="bottom-paper"></custom-cat-paper>
                    <custom-cat-rock class="bottom-rock"></custom-cat-rock>
                    <custom-cat-scissors class="bottom-scissors"></custom-cat-scissors>
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

            .top-hands{
                display: flex;
                align-items: flex-end;
                gap: 55px;
                transform: rotate(180deg);
            }

            .top-paper{
                display: none;
            }

            .top-rock{
                display: none;
            }

            .top-scissors{
                display: none;
            }

            .bottom-hands{
                display: flex;
                align-items: flex-end;
                gap: 55px;
            }

            .bottom-paper:hover{
                cursor: pointer;
                transform: translateY(-1px);
                transition: all 0.1s;
            }

            .bottom-rock:hover{
                cursor: pointer;
                transform: translateY(-1px);
                transition: all 0.1s;
            }

            .bottom-scissors:hover{
                cursor: pointer;
                transform: translateY(-1px);
                transition: all 0.1s;
            }
        `;

        this.appendChild(style)
    };
};
customElements.define('playing-page', Playing);