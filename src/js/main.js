async function loadIncludes() {
    const includes = document.getElementsByTagName('include');
    const promises = [];

    for (let include of includes) {
        const file = include.getAttribute('src');
        promises.push(
            fetch(file)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.text();
                })
                .then(text => {
                    include.insertAdjacentHTML('afterend', text);
                    include.remove();
                })
                .catch(error => {
                    console.error(`Error loading component ${file}:`, error);
                })
        );
    }

    return Promise.all(promises);
}

async function setLanguage(lang) {
  const response = await fetch(`lang/${lang}.json`);
  const translations = await response.json();

  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.dataset.i18n;
    element.textContent = translations[key];
  });
}

const domReadyHandler = () => {
    setLanguage('id');
};

loadIncludes().then(() => {
    if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', domReadyHandler);
    }
    else {
		domReadyHandler();
	}
})