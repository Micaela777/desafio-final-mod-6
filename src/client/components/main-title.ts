export function initMainTitleComponent() {

    class MainTitle extends HTMLElement {
        constructor() {
            super();
            this.render()
        };
        render() {
            var shadow = this.attachShadow({ mode: 'open' });

            const div = document.createElement('div');
            div.innerHTML = `
                <h1 class="main-title"> PIEDRA, PAPEL <span class="letterO">O</span> TIJERA </h1>
            `;

            const style = document.createElement('style');

            style.innerHTML = `
                .main-title{
                  max-width: 250px;
                  margin: 0px;
                  font-size: 70px;
                  font-weight: 700;
                  text-align: center;
                  font-family: 'Roboto', sans-serif;
                  color: #17205d; 
                }
                @media (min-width: 950px){
                  .main-title{
                      max-width: 500px;
                      font-size: 60px;
                  }
                }
                 
                .letterO{
                    opacity: 0.7;
                }
                @media (min-width: 950px){
                  .letterO{
                      padding: 125px;
                  }
                }
            `;

            shadow.appendChild(div);
            shadow.appendChild(style);
        };
    };
    customElements.define('custom-main-title', MainTitle);
};