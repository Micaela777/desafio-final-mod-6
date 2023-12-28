import "./router"
import "./pages/home";
import "./pages/auth";
import "./pages/pregame-options";
import "./pages/new-game";
import "./pages/enter-the-room";
import "./pages/waiting-for-opponent";
import "./pages/lobby";
import "./pages/full-room";
import "./pages/instructions";
import "./pages/play-page";
import "./pages/playing";
import "./pages/hands";
import "./pages/results-page";
import "./pages/no-choise";
import { state } from "./state";

import { initMainTitleComponent } from "./components/main-title";
import { initHomeSmallTextComponent } from "./components/home-small-text";
import { initHomeStartButtonComponent } from "./components/home-start-button";
import { initHomeCatImageComponent } from "./components/home-space-cat";
import { initAuthFormComponent } from "./components/auth-form";
import { initChooseOptionButtonComponent } from "./components/choose-option-button";
import { initCatSilhouetteComponent } from "./components/cat-silhouette";
import { initLineImgComponent } from "./components/custom-line-img";
import { initHeaderComponent } from "./components/header";
import { initErrorTextComponent } from "./components/error-text";
import { initEnterTheRoomFormComponent } from "./components/enter-the-room-form";
import { initCopiedRoomIdTextComponent } from "./components/copied-room-id-text";
import { initCountdownComponent } from "./components/countdown-component";
import { initCatPaperComponent } from "./components/cat-paper";
import { initCatRockComponent } from "./components/cat-rock";
import { initCatScissorsComponent } from "./components/cat-scissors";
import { initWinImageComponent } from "./components/win-image";
import { initTieImageComponent } from "./components/tie-img";
import { initLoseImageComponent } from "./components/lose-img";

(function () {

    //state.init()
    initMainTitleComponent();
    initHomeSmallTextComponent();
    initHomeStartButtonComponent();
    initHomeCatImageComponent();
    initAuthFormComponent();
    initChooseOptionButtonComponent();
    initEnterTheRoomFormComponent();
    initCopiedRoomIdTextComponent();
    initCatSilhouetteComponent()
    initLineImgComponent();
    initHeaderComponent();
    initErrorTextComponent();
    initCountdownComponent()
    initCatPaperComponent();
    initCatRockComponent();
    initCatScissorsComponent();
    initWinImageComponent();
    initTieImageComponent();
    initLoseImageComponent()

})();