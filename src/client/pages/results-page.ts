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
                      <custom-tie-img></custom-tie-img>
                      <custom-lose-img></custom-lose-img>
                  </div>
              </div>
          `
  
          const style = document.createElement("style");
          style.innerHTML = `
              .results-section{
                  height: 100vh;
                  background: linear-gradient( #070708, 92%, #5cc4bb );
              }
  
              
          `;
  
          this.appendChild(style)
      };
  };
  customElements.define('results-page', Results);