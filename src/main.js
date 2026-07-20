import { hideLoading } from "./loading.js";
import { initEnvelope } from "./envelope.js";
import { initCard } from "./card.js";
import { initNavigation } from "./navigation.js";
import { initGift } from "./gift.js";

import "./character.js";

hideLoading();
initEnvelope();
initCard();
initNavigation();
initGift();