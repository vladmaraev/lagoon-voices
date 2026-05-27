import "./style.css";

const htmlToInject = `
      <div id="startPage" data-layer="Starting Page" class="screen light-bg">
        <div data-layer="Voices from the Lagoon" class="title">Voices from the Lagoon</div>
        <div class="button-container">
          <div id="start" data-layer="Button Play" class="button">
            <div class="button-text">PLAY</div>
          </div>
        </div>
        <div data-layer="Created by Joy Ciliani and Zofia Milczarek" class="credits-text bottom">Created by Joy Ciliani and Zofia Milczarek</div>
      </div>

      <!-- Just Map -->
      <div hidden id="mapOnly" data-layer="Map with the guide and the crab and the fishermen" class="screen light-bg">
        <img data-layer="Map" class="full-width" src="https://files.maraev.me/lagoon_voices/map.png" alt="Map" />
      </div>

      <!-- Main Map -->
      <div hidden id="main" data-layer="Map with the guide and the crab and the fishermen" class="screen light-bg">
        <img data-layer="Map" class="full-width" src="https://files.maraev.me/lagoon_voices/map.png" alt="Map" />
        <div data-layer="Guide" class="element" style="width: 428px; height: 903px; left: 48px; top: 188px;">
          <img 
            id="guideImage"
            data-layer="Guide speaking" 
            style="width: 413px; height: 903px; left: 3px; top: 0px; position: absolute;" 
            src="https://files.maraev.me/lagoon_voices/guide.png" 
            alt="Guide" />
        </div>
        <img data-layer="Crab" class="element" style="width: 133px; height: 115px; left: 409px; top: 537px;" src="https://files.maraev.me/lagoon_voices/crab.png" alt="Crab" />
        <img data-layer="Fishermen" class="element" style="width: 250px; height: 181px; left: 1045px; top: 595px;" src="https://files.maraev.me/lagoon_voices/fisherman.png" alt="Fishermen" />
        <img data-layer="Open Door" class="element" style="width: 67px; height: 67px; left: 1355px; top: 25px;" src="https://files.maraev.me/lagoon_voices/open-door.png" alt="Exit" />
      </div>

      <!-- Conversation with the guide -->
      <div hidden id="guideEnd" data-layer="Conversation with the guide" class="screen light-bg">
        <img data-layer="Venice" style="width: 2643px; height: 1475px; left: -641px; top: -145px; position: absolute;" src="https://files.maraev.me/lagoon_voices/venice.png" alt="Venice" />
        <div data-layer="Guide" class="element" style="width: 428px; height: 903px; left: 506px; top: 388px;">
          <img id="guideImage"
           data-layer="Guide speaking"
          style="width: 413px; height: 903px; left: 3px; top: 0px; position: absolute;" 
          src="https://files.maraev.me/lagoon_voices/guide.png" 
          alt="Guide" />
        </div>
        <img data-layer="Open Door" class="element" style="width: 67px; height: 67px; left: 1355px; top: 25px;" src="https://files.maraev.me/lagoon_voices/open-door.png" alt="Exit" />
      </div>

      <!-- Conversation with the fisherman -->

      <div hidden id="fisherman" data-layer="Conversation with the fisherman" class="screen light-bg">
        <img data-layer="Map" class="full-width" src="https://files.maraev.me/lagoon_voices/fisherman-background.png" alt="Map" />
        <div data-layer="Fishermen" data-property-1="on" class="Fishermen" style="width: 491px; height: 469px; left: 764px; top: 471px; position: absolute">
          <img 
            id="fishermanImage"
            data-layer="Fishermen speaking" 
            class="FishermenSpeaking" 
            style="width: 477px; height: 475px; left: 6px; top: -1px; position: absolute" 
            src="https://files.maraev.me/lagoon_voices/fisherman.png" />
        </div>
        <img data-layer="Open Door" class="element" style="width: 67px; height: 67px; left: 1355px; top: 25px;" src="https://files.maraev.me/lagoon_voices/open-door.png" alt="Exit" />
      </div>


      <!-- Conversation with the fisherman -->

      <div hidden id="crab" data-layer="Conversation with the Crab" class="screen light-bg">
        <img data-layer="Map" class="full-width" src="https://files.maraev.me/lagoon_voices/crab-background.png" alt="Map" />
        <div data-layer="Crab" data-property-1="off" class="Crab" style="width: 314.83px; height: 273px; left: 545px; top: 434px; position: absolute">
          <img 
            id="crabImage"
            data-layer="Crab" 
            class="Crab" 
            style="width: 314.83px; height: 273px; left: 0px; top: 0px; position: absolute" 
            src="https://files.maraev.me/lagoon_voices/crab.png" />
        </div>
        <img data-layer="Open Door" class="element" style="width: 67px; height: 67px; left: 1355px; top: 25px;" src="https://files.maraev.me/lagoon_voices/open-door.png" alt="Exit" />
      </div>

      <!-- Credits -->
      <div hidden id="credits" data-layer="Credits" class="screen dark-bg">
        <div class="title" style="color: var(--Color);">Credits</div>
        <div class="credits-text">Created by Joy Ciliani and Zofia Milczarek<br/>For the Dialogue Systems 2026 course of the University of Gothenburg</div>
      </div>

      <!-- The End -->
      <div hidden id="end" data-layer="The End" class="screen dark-bg">
        <div class="title" style="color: var(--Color);">THE END<br/>Thank you for playing!</div>
      </div>
`;

export const setupApp = () => {
  document.querySelector<HTMLDivElement>("#app")!.innerHTML = htmlToInject;
};
