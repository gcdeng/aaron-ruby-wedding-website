import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faMapMarkerAlt);

Vue.component("font-awesome-icon", FontAwesomeIcon);
