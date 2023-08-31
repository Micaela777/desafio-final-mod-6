import { state } from "../state";

class Results extends HTMLElement{
    connectedCallback(){
          this.render();
      };
  
      render(){
          this.innerHTML = `
              <div class="results-section">
                  <div class="results-section-container"></div>
              </div>
          `
  
          const style = document.createElement("style");
          style.innerHTML = `
              .results-section{
                  height: 100vh;
                  background: linear-gradient( #070708, 90%, #5cc4bb )
                  #070708
              }
  
              
          `;
  
          this.appendChild(style)
      };
  };
  customElements.define('results-page', Results);