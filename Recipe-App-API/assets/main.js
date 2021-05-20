// SHOW MENU

const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show-menu");
    });
  }
};

showMenu("nav-toggle", "nav-menu");

// REMOVE MENU FOR MOBILE

const navLink = document.querySelectorAll(".nav__link");
const darkBtn = document.querySelector(".change-theme");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");

  navMenu.classList.remove("show-menu");
};

navLink.forEach((n) => n.addEventListener("click", linkAction));
darkBtn.addEventListener("click", linkAction);

// SCROLL SECTIONS ACTIVE LINK

const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
};

window.addEventListener("scroll", scrollActive);

// CHANGE BG HEADER

const scrollHeader = () => {
  const nav = document.getElementById("header");

  if (this.scrollY >= 200) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
};

window.addEventListener("scroll", scrollHeader);

const scrollTop = () => {
  const scrollTop = document.getElementById("scroll-top");

  if (this.scrollY >= 560) scrollTop.classList.add("scroll-top");
  else scrollTop.classList.remove("scroll-top");
};

window.addEventListener("scroll", scrollTop);

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "bx-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx-moon" : "bx-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "bx-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 2000,
  reset: false,
});

sr.reveal(
  `.home__data, .home__img,
            .about__data, .about__img,
            .services__content, .menu__content,
            .app__data, .app__img,
            .contact__data, .contact__button,
            .footer__content`,
  {
    interval: 200,
  }
);

// MAIN JS

const searchForm = document.querySelector(".menu__search");
const mealList = document.getElementById("meal");
const container = document.getElementById("menu");
const searchResultDiv = document.getElementById("meal");
const noResultsFound = document.querySelector(".noRecipe");
const loader = document.querySelector(".loader");
let searchQuery = "";
const APP_ID = "94f4353f";
const API_KEY = "ad2fa088bd506f53f655fa82fecd83a2";
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  searchQuery = e.target.querySelector(".search").value;
  console.log(searchQuery);
  fetchAPI();
});

const generateHTML = (results) => {
  noResultsFound.classList.remove("shown");
  loading();

  let generatedHTML = ``;
  results.map((result) => {
    generatedHTML += `
    <div class="menu__content">
            <img src="${result.recipe.image}" alt="" class="menu__img" />
            <h3 class="menu__name">${result.recipe.label}</h3>
            <span class="menu__detail">Calories:</span>
            <span class="menu__preci">${result.recipe.calories.toFixed(
              2
            )}</span>
            <a href="${
              result.recipe.url
            }" target="_blank" class="button menu__button"
              ><i class='bx bx-tag-alt'></i></a>
          </div>
    `;
  });
  loader.classList.remove("shown");
  searchResultDiv.innerHTML = generatedHTML;
};

const loading = () => {
  searchResultDiv.innerHTML = ``;
  loader.classList.add("shown");
};

const noResults = () => {
  loader.classList.remove("shown");
  noResultsFound.classList.add("shown");
  searchResultDiv.innerHTML = ``;
};

const fetchAPI = async () => {
  noResultsFound.classList.remove("shown");
  searchResultDiv.innerHTML = ``;
  loading();
  const baseURL = `https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${API_KEY}&to=20`;
  const response = await fetch(baseURL);
  const data = await response.json();
  if (data.more === true) {
    generateHTML(data.hits);
    console.log(data);
  } else {
    console.log("Try Again");
    noResults();
  }
};

class App {
  constructor() {
    const tl = new TimelineMax({ repeat: -1 });
    tl.to([".pizzaOutline", ".pizzaMask"], 7, {
      rotation: 360,
      svgOrigin: "61 61",
      ease: Linear.easeNone,
    }).to(
      ".whole",
      7,
      {
        rotation: -45,
        svgOrigin: "61 61",
        ease: Linear.easeNone,
      },
      0
    );
  }
}

TweenMax.set("svg", {
  visibility: "visible",
});

var app = new App();

TweenMax.globalTimeScale(4);
