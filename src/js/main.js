import { initLang } from "./language/lang-manager";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "../scss/style.scss";
import { Navbar } from "./ux/navbar";
import sunIcon from "../assets/icon/sun.svg";
import moonIcon from "../assets/icon/moon.svg";

function handleImportAssets() {
  document.documentElement.style.setProperty("--sun-icon", `url(${sunIcon})`);
  document.documentElement.style.setProperty("--moon-icon", `url(${moonIcon})`);
}

const domReadyHandler = () => {
  handleImportAssets();
  new Navbar();
  initLang();
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", domReadyHandler);
} else {
  domReadyHandler();
}
