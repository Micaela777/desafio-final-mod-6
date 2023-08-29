export function initCountdownComponent() {

    class Countdown extends HTMLElement {
      constructor() {
        super();
        this.render()
      };
      render() {
        var shadow = this.attachShadow({ mode: 'open' });
  
        shadow.innerHTML = `
        <div class="countdown">
            <div class="countdown-number"></div>
            <svg class="svg">
                <circle class="svg-circle" r="75" cx="140" cy="140"></circle>
            </svg>
        </div>
      `
  
        let counter = 5;
        var countdownNumberEl = shadow.querySelector('.countdown-number') as any;
        countdownNumberEl.textContent = counter;
  
        const intervalId = setInterval(() => {
          counter--;
          if (counter < 2) {
            clearInterval(intervalId);
          };
          countdownNumberEl.textContent = counter;
        }, 1000);
  
  
        const style = document.createElement('style');
  
        style.innerHTML = `
  
        .countdown{
          margin: 0 auto;
        }
  
        .countdown-number {
          position: relative;
          top: 169px;
          font-weight: 600;
          font-size: 60px;
          text-align: center;
          font-family: 'Roboto', cursive;
          color: #da70db;
        }
        
        .svg {
          width: 260px;
          height: 280px;
          transform: rotateY(-180deg) rotateZ(-90deg);
        }
        
        .svg-circle {
          stroke-dasharray: 480px;
          stroke-dashoffset: 0px;
          stroke-width: 16px;
          stroke: #da70db;
          fill: none;
          animation: countdown 5s linear infinite forwards;
        }
        
        @keyframes countdown {
          from {
            stroke-dashoffset: 0px;
          }
          to {
            stroke-dashoffset: 480px;
          }
        }
      `;
  
        shadow.appendChild(style);
      };
    };
    customElements.define('custom-countdown', Countdown);
  };