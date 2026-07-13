import { initLang } from "./language/lang-manager";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "../scss/style.scss";
import { Navbar } from "./ux/navbar";

const domReadyHandler = () => {
  new Navbar();
  initLang();
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", domReadyHandler);
} else {
  domReadyHandler();
}
