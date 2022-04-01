import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, fas } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";
import FontAwesomeIcon from "./FontAwesomeIcon.vue";

library.add(faBars, fas, faInstagramSquare, faFacebook);

export { FontAwesomeIcon };
