/* MARK:NAV2
 */
/* let x = 0; */
const nodeList = document.querySelectorAll(".navbtn_interior");
function nav2Opener() {
  if (x == 0) {
    document.querySelector(
      ".navbtn_homeclass"
    ).style = `width: calc((var(--size_menubtn) * 5)); padding: 0 calc(var(--margin_navmenu) / 2);`;
    document.querySelector("div.site_velo").style = `visibility: visible;
  background-color: rgba(47, 47, 47, 0.95);`;
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[
        i
      ].style = `opacity: 100; transform: scale(100%); filter: blur(0.6px);`;
    }
    x = 1;
  } else {
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].style = ``;
    }
    document.querySelector(".navbtn_homeclass").style = ``;
    document.querySelector("div.site_velo").style = `visibility: hidden;
  background-color: rgba(47, 47, 47, 0);`;
    /* document.querySelector(".navbtn03").classList("navbtn03") = ``; */
    x = 0;
  }
}
/* 
function btnNavhover() {
  if (x == 0) {
    document.querySelector(
      ".navbtn01"
    ).style = `width: calc(var(--size_menubtn) + 100px);
  border-radius: calc(var(--size_menubtn) + 100px);`;
    x = 1;
  } else {
    document.querySelector(".navbtn01").style = ``;
    x = 0;
  }
} */

/* MARK:NAV2Hov; */
const navbuttonSee = document.querySelectorAll(".navbtn01");
const navbtnmakeMini = document.querySelectorAll(".navbtn_interior");

/* for (let i = 0; i < navbuttonSee.length + 1; i++) {
  navbuttonSee[i].onmouseover = function () {
    for (let j = 0; j < navbtnmakeMini.length; j++) {
      console.log(j);
      if (j == 0) {
        navbtnmakeMini[j].classList.add("navbtn_mini");
        document.querySelector(
          ".navbtn_homeclass"
        ).style = `transform: translateX(-50px); width: calc((var(--size_menubtn) * 5)); padding: 0 calc(var(--margin_navmenu) / 2);`;
      } else if (j > 2) {
        navbtnmakeMini[j].classList.add("navbtn_mini");
        document.querySelector(
          ".navbtn_homeclass"
        ).style = `transform: translateX(50px); width: calc((var(--size_menubtn) * 5)); padding: 0 calc(var(--margin_navmenu) / 2);`;
      }
    }
    this.classList.remove("navbtn_mini");
    this.classList.add("navbtn01_hover");
  };
  navbuttonSee[i].onmouseout = function () {
    document.querySelector(
      ".navbtn_homeclass"
    ).style = `transform: translateX(0px); width: calc((var(--size_menubtn) * 5)); padding: 0 calc(var(--margin_navmenu) / 2);`;
    this.classList.remove("navbtn01_hover");
    for (let j = 0; j < navbtnmakeMini.length; j++) {
      if (j != 2) {
        navbtnmakeMini[j].classList.remove("navbtn_mini");
      }
    }
  };
} */
const btnMenu01 = document.querySelector(".navbtn01");
const btnMenu02 = document.querySelector(".navbtn02");
const btnMenu03 = document.querySelector(".navbtn03");
const btnMenu04 = document.querySelector(".navbtn04");
const btnMenu05 = document.querySelector(".navbtn05");
/* btnMenu03.addEventListener("mouseover", function () {
  document.querySelector(
    ".navbtn_homeclass"
  ).style = `transform: translateX(0px); width: calc((var(--size_menubtn) * 5)); padding: 0 calc(var(--margin_navmenu) / 2);`;
}); */
btnMenu01.addEventListener("mouseover", function () {
  btnMenu01.classList.add("navbtn01_hover");
  btnMenu02.classList.add("navbtn_mini");
  btnMenu04.classList.add("navbtn_mini");
  btnMenu05.classList.add("navbtn_mini");
  document.querySelector(
    ".navbtn_homeclass"
  ).style = `transform: translateX(-50px); width: calc((var(--size_menubtn) * 5)); padding: 0 calc(var(--margin_navmenu) / 2);`;
});
btnMenu02.addEventListener("mouseover", function () {
  btnMenu02.classList.add("navbtn01_hover");
  btnMenu01.classList.add("navbtn_mini");
  btnMenu04.classList.add("navbtn_mini");
  btnMenu05.classList.add("navbtn_mini");
  document.querySelector(
    ".navbtn_homeclass"
  ).style = `transform: translateX(-50px); width: calc((var(--size_menubtn) * 5)); padding: 0 calc(var(--margin_navmenu) / 2);`;
});
btnMenu04.addEventListener("mouseover", function () {
  btnMenu04.classList.add("navbtn01_hover");
  btnMenu01.classList.add("navbtn_mini");
  btnMenu02.classList.add("navbtn_mini");
  btnMenu05.classList.add("navbtn_mini");
  document.querySelector(
    ".navbtn_homeclass"
  ).style = `transform: translateX(50px); width: calc((var(--size_menubtn) * 5)); padding: 0 calc(var(--margin_navmenu) / 2);`;
});
btnMenu05.addEventListener("mouseover", function () {
  btnMenu05.classList.add("navbtn01_hover");
  btnMenu01.classList.add("navbtn_mini");
  btnMenu02.classList.add("navbtn_mini");
  btnMenu04.classList.add("navbtn_mini");
  document.querySelector(
    ".navbtn_homeclass"
  ).style = `transform: translateX(50px); width: calc((var(--size_menubtn) * 5)); padding: 0 calc(var(--margin_navmenu) / 2);`;
});
btnMenu01.addEventListener("mouseout", function () {
  btnMenu01.classList.remove("navbtn01_hover");
  btnMenu02.classList.remove("navbtn_mini");
  btnMenu04.classList.remove("navbtn_mini");
  btnMenu05.classList.remove("navbtn_mini");
  document.querySelector(
    ".navbtn_homeclass"
  ).style = `transform: translateX(0px); width: calc((var(--size_menubtn) * 5)); padding: 0 calc(var(--margin_navmenu) / 2);`;
});
btnMenu02.addEventListener("mouseout", function () {
  btnMenu02.classList.remove("navbtn01_hover");
  btnMenu01.classList.remove("navbtn_mini");
  btnMenu04.classList.remove("navbtn_mini");
  btnMenu05.classList.remove("navbtn_mini");
  document.querySelector(
    ".navbtn_homeclass"
  ).style = `transform: translateX(0px); width: calc((var(--size_menubtn) * 5)); padding: 0 calc(var(--margin_navmenu) / 2);`;
});
btnMenu04.addEventListener("mouseout", function () {
  btnMenu04.classList.remove("navbtn01_hover");
  btnMenu01.classList.remove("navbtn_mini");
  btnMenu02.classList.remove("navbtn_mini");
  btnMenu05.classList.remove("navbtn_mini");
  document.querySelector(
    ".navbtn_homeclass"
  ).style = `transform: translateX(0px); width: calc((var(--size_menubtn) * 5)); padding: 0 calc(var(--margin_navmenu) / 2);`;
});
btnMenu05.addEventListener("mouseout", function () {
  btnMenu05.classList.remove("navbtn01_hover");
  btnMenu01.classList.remove("navbtn_mini");
  btnMenu02.classList.remove("navbtn_mini");
  btnMenu04.classList.remove("navbtn_mini");
  document.querySelector(
    ".navbtn_homeclass"
  ).style = `transform: translateX(0px); width: calc((var(--size_menubtn) * 5)); padding: 0 calc(var(--margin_navmenu) / 2);`;
});
/* document.querySelector(".navbtn01").onmouseover = function () {
  this.classList.add("navbtn01_hover");
  document.querySelector(".navbtn02").classList.add("navbtn_mini");
  document.querySelector(".navbtn03").classList.add("navbtn_mini");
  document.querySelector(".navbtn04").classList.add("navbtn_mini");
  document.querySelector(".navbtn05").classList.add("navbtn_mini");
};
document.querySelector(".navbtn01").onmouseout = function () {
  this.classList.remove("navbtn01_hover");
  document.querySelector(".navbtn02").classList.remove("navbtn_mini");
  document.querySelector(".navbtn03").classList.remove("navbtn_mini");
  document.querySelector(".navbtn04").classList.remove("navbtn_mini");
  document.querySelector(".navbtn05").classList.remove("navbtn_mini");
}; */
