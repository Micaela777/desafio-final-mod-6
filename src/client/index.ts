import "./router"
import "./pages/home";
import "./pages/authentication";
import "./pages/pregame-options";
import "./pages/enter-the-room";
import "./pages/play-page";
import { state } from "./state";

import { initAuthFormComponent } from "./components/authentication-form";
import { initEnterTheRoomFormComponent } from "./components/enter-the-room-form";
import { initCatPaperComponent } from "./components/cat-paper";
import { initCatRockComponent } from "./components/cat-rock";
import { initCatScissorsComponent } from "./components/cat-scissors";

(function () {

    initAuthFormComponent();
    initEnterTheRoomFormComponent();
    initCatPaperComponent();
    initCatRockComponent();
    initCatScissorsComponent();

})();