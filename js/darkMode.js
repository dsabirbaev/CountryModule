


const darkModeBtn = document.querySelector('.header__mode');
const darkModeBtnText = document.querySelector('.header__mode p');
const header = document.querySelector('header');
const body = document.querySelector('body');
const card = document.querySelectorAll('.countries-card');
const cardBody = document.querySelectorAll('.countries-card__body');

const inputMode = document.querySelector('.countries-search__input');
const selectMode = document.querySelector('.countries-search__select');

let darkMode = localStorage.getItem("dark-mode");

const enableDarkMode = () => {
    header.classList.add("header-mode-theme");
    darkModeBtnText.textContent = "Light Mode";
    body.classList.add("body-mode-theme");
    inputMode.classList.add("card-mode-theme");
    selectMode.classList.add("card-mode-theme");
    card.forEach((value) => {
        value.classList.add("card-mode-theme");
    })
    cardBody.forEach((value) => {
        value.classList.add("card-mode-theme");
    })
    // cardBody.classList.add("body-mode-theme");
    localStorage.setItem("dark-mode", "enabled");
};

const disableDarkMode = () => {
    header.classList.remove("header-mode-theme");
    darkModeBtnText.textContent = "Dark Mode";
    body.classList.remove("body-mode-theme");
    inputMode.classList.remove("card-mode-theme");
    selectMode.classList.remove("card-mode-theme");
    card.forEach((value) => {
        value.classList.remove("card-mode-theme");
    })
    cardBody.forEach((value) => {
        value.classList.remove("card-mode-theme");
    })
    localStorage.setItem("dark-mode", "disabled");
};

if (darkMode === "enabled") {
    enableDarkMode(); // set state of darkMode on page load
}

darkModeBtn.addEventListener("click", (e) => {
    darkMode = localStorage.getItem("dark-mode"); // update darkMode when clicked
    if (darkMode === "disabled") {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
   
});


export {enableDarkMode, disableDarkMode}