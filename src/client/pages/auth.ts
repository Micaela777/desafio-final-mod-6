
class Auth extends HTMLElement{
  connectedCallback(){
        this.render();
    };

    render(){
        this.innerHTML = `
            <div class="auth-section">
                <custom-cat-silhouette></custom-cat-silhouette>
                <div class="auth-items-container">
                    <h3 class="enter-your-name-text">Por favor, ingresa tu nombre:</h3>
                    <div class="auth-form-container">
                        <custom-auth-form></custom-auth-form>
                    </div>
                </div>
                <custom-line-img class="bottom-line-img"></custom-line-img>
            </div>
        `

        const style = document.createElement("style");
        style.innerHTML = `
            .auth-section{
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
            @media (min-width: 769px){
                .auth-section{
                    padding-bottom: 20px;
                }
            }

            .auth-items-container{
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 19px 0px;
                gap: 45px;
            }

            .enter-your-name-text{
                margin: 0px;
                text-align: center;
                font-weight: 400;
                font-size: 22px;
                color: #ffffff;
                font-family: 'Roboto', sans-serif;
            }

            .auth-form-container{
                width: 100%;
                max-width: 340px;
            }

            .bottom-line-img{
                padding-top: 20px;
            }
        `;

        this.appendChild(style)
    };
};
customElements.define('auth-page', Auth);