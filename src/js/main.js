import { initLang } from "./language/lang-manager";
import { initTheme } from "./theme/theme-manager";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "../scss/style.scss";
import { Navbar } from "./ux/navbar";

async function loadIncludes() {
  const includes = document.getElementsByTagName("include");
  const promises = [];

  for (let include of includes) {
    const file = include.getAttribute("src");
    promises.push(
      fetch(file)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.text();
        })
        .then((text) => {
          include.insertAdjacentHTML("afterend", text);
          include.remove();
        })
        .catch((error) => {
          console.error(`Error loading component ${file}:`, error);
        })
    );
  }

  return Promise.all(promises);
}

const domReadyHandler = () => {
  new Navbar();
  initLang();
  // initTheme();
};

loadIncludes().then(() => {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", domReadyHandler);
  } else {
    domReadyHandler();
  }
});
