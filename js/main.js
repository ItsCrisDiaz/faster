import videoPlay from "./utils/playVideo.js";

import { menuAnimation } from "./utils/menuAnimation.js";

videoPlay();

if (window.matchMedia("(max-width: 1023px)")) {
  menuAnimation();
}
