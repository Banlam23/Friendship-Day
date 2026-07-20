import { hideLoading } from "./loading.js";
import { initEnvelope } from "./envelope.js";
import { initCard } from "./card.js";
import { initNavigation } from "./navigation.js";
import { initGift } from "./gift.js";
import { initMusic } from "./music.js";
import { initIntro } from "./intro.js";

import "./character.js";

initMusic();
initIntro();

initEnvelope();
initCard();
initNavigation();
initGift();