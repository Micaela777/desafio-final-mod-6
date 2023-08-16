import "./router"
import "./pages/home";
import "./pages/auth";
import "./pages/pregame-options";
import "./pages/new-game";
import "./pages/enter-the-room";
import "./pages/instructions";
import "./pages/play-page";
import { state } from "./state";

import { initMainTitleComponent } from "./components/main-title";
import { initHomeSmallTextComponent } from "./components/home-small-text";
import { initAuthFormComponent } from "./components/auth-form";
import { initHomeStartButtonComponent } from "./components/home-start-button";
import { initHomeCatImageComponent } from "./components/home-space-cat";
import { initChooseOptionButtonComponent } from "./components/choose-option-button";
import { initRegistrationFormComponent } from "./components/registration-form";
import { initLogInFormComponent } from "./components/log-in-form";
import { initCatSilhouetteComponent } from "./components/cat-silhouette";
import { initLineImgComponent } from "./components/custom-line-img";
import { initErrorTextComponent } from "./components/error-text";
import { initEnterTheRoomFormComponent } from "./components/enter-the-room-form";
import { initCatPaperComponent } from "./components/cat-paper";
import { initCatRockComponent } from "./components/cat-rock";
import { initCatScissorsComponent } from "./components/cat-scissors";

(function () {

    initMainTitleComponent();
    initHomeSmallTextComponent();
    initAuthFormComponent();
    initHomeStartButtonComponent();
    initHomeCatImageComponent();
    initChooseOptionButtonComponent();
    initRegistrationFormComponent();
    initLogInFormComponent();
    initEnterTheRoomFormComponent();
    initCatSilhouetteComponent()
    initLineImgComponent();
    initErrorTextComponent();
    initCatPaperComponent();
    initCatRockComponent();
    initCatScissorsComponent();

})();