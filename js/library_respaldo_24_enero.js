var x = 0;
function changeCard() {
  if (x == 0) {
    document.getElementById("card3").classList.add("section_prueba3a");
    document.getElementById("infocard3").classList.add("info_interiorA");
    document.querySelector(
      ".grafico"
    ).style = `animation: grafico_anim 3s ease-in-out;
  animation-fill-mode: forwards;`;
    x = 1;
  } else {
    document.getElementById("card3").classList.remove("section_prueba3a");
    document.getElementById("infocard3").classList.remove("info_interiorA");
    document.querySelector(".grafico").style = "visibility:hidden;";
    x = 0;
  }
}
function clickLogo() {
  document.querySelector(".home").style = `visibility: visible; opacity:100%;`;
  document.querySelector(
    ".logo_inicio"
  ).style = `visibility: hidden; opacity:0;`;
}
function clickRutines() {
  if (x == 0) {
    document.querySelector(
      ".grid_01"
    ).style = `background-color: var(--rutinesColor);
  color: #111b2d;`;
    document.querySelector(
      ".grid_02"
    ).style = `transform: translate(110vw, -110vh);`;
    document.querySelector(
      ".grid_03"
    ).style = `transform: translate(-110vw, 110vh);`;
    document.querySelector(
      ".grid_04"
    ).style = `transform: translate(110vw, 0);`;
    document.querySelector(
      ".grid_05"
    ).style = `transform: translate(110vw, 110vh);`;
    document.querySelector(
      ".grid_06"
    ).style = `transform: translate(-110vw, 110vh);`;
    document.querySelector(
      ".contenedor_grid"
    ).style = `grid-template-columns: 3fr 0 0; grid-template-rows: 6fr 0 0 0 0 0 ; gap:0;`;
    x = 1;
  } else {
    clearCards();
    /* MOVIDA A una funcion
    document.querySelector(".grid_01").style = ``;
    document.querySelector(".grid_02").style = ``;
    document.querySelector(".grid_03").style = ``;
    document.querySelector(".grid_04").style = ``;
    document.querySelector(".grid_05").style = ``;
    document.querySelector(".grid_06").style = ``;
    document.querySelector(".contenedor_grid").style = ``; */
    x = 0;
  }
}

/* MARK:ClearC
 */
function clearCards() {
  document.querySelector(".grid_01").style = ``;
  document.querySelector(".grid_02").style = ``;
  document.querySelector(".grid_03").style = ``;
  document.querySelector(".grid_04").style = ``;
  document.querySelector(".grid_05").style = ``;
  document.querySelector(".grid_06").style = ``;
  document.querySelector(".contenedor_grid").style = ``;
  document.querySelector(".interior_grid05").style = ``;
  document.querySelector("#btn_cierraCard").style = ``;
  /* x = 0; */
}
function clickCardInter() {
  document.querySelector(".card_int01").style = `order: 1;
  --card_flex: 200px;
  width: calc(100px + var(--card_flex));
  height: calc(200px + var(--card_flex));
  flex-grow: 10;
  flex-shrink: 1;`;
}

function clickGoals() {
  if (x == 0) {
    document.querySelector(
      ".grid_02"
    ).style = `background-color: var(--goalsColor);
  color: #111b2d;`;
    document.querySelector(
      ".grid_01"
    ).style = `transform: translate(-110vw, -110vh);`;
    document.querySelector(
      ".grid_03"
    ).style = `transform: translate(-110vw, 110vh);`;
    document.querySelector(
      ".grid_04"
    ).style = `transform: translate(-110vw, 0);`;
    document.querySelector(
      ".grid_05"
    ).style = `transform: translate(110vw, 110vh);`;
    document.querySelector(
      ".grid_06"
    ).style = `transform: translate(-110vw, 110vh);`;
    document.querySelector(
      ".contenedor_grid"
    ).style = `grid-template-columns: 0 0 3fr; grid-template-rows: 6fr 0 0 0 0 0 ; gap:0;`;
    a_cierra.style = btnCerrar_on;
    x = 1;
  } else {
    clearCards();
    /* EN una funcion */
    x = 0;
  }
}
function clickPerfil() {
  if (x == 0) {
    document.querySelector(
      ".grid_03"
    ).style = `background-color: var(--profileColor);
  color: #111b2d;`;
    document.querySelector(
      ".p_grid_03"
    ).style = `height: 3rem; font-size: 3rem;`;
    document.querySelector(
      ".grid_01"
    ).style = `transform: translate(-110vw, -110vh);`;
    document.querySelector(
      ".grid_02"
    ).style = `transform: translate(+110vw, -110vh);`;
    document.querySelector(
      ".grid_04"
    ).style = `transform: translate(110vw, 0);`;
    document.querySelector(
      ".grid_05"
    ).style = `transform: translate(110vw, 110vh);`;
    document.querySelector(
      ".grid_06"
    ).style = `transform: translate(-110vw, 110vh);`;
    document.querySelector(
      ".contenedor_grid"
    ).style = `grid-template-columns: 3fr 0 0 ; grid-template-rows: 0 0 0 6fr 0 0 ; gap:0;`;
    x = 1;
  } else {
    clearCards();
    document.querySelector(".p_grid_03").style = ``;
    /* EN una funcion */
    x = 0;
  }
}
function clickMeal() {
  if (x == 0) {
    document.querySelector(
      ".grid_06"
    ).style = `background-color: var(--mealsColor);
  color: #111b2d;`;
    document.querySelector(
      ".p_grid_06"
    ).style = `height: 3rem; font-size: 3rem;`;
    document.querySelector(
      ".grid_01"
    ).style = `transform: translate(-110vw, -110vh);`;
    document.querySelector(
      ".grid_02"
    ).style = `transform: translate(+110vw, -110vh);`;
    document.querySelector(
      ".grid_03"
    ).style = `transform: translate(-110vw, -110vh);`;
    document.querySelector(
      ".grid_04"
    ).style = `transform: translate(110vw, 0);`;
    document.querySelector(
      ".grid_05"
    ).style = `transform: translate(110vw, 110vh);`;
    document.querySelector(
      ".contenedor_grid"
    ).style = `grid-template-columns: 3fr 0 0 ; grid-template-rows: 0 0 0 0 0 6fr; gap:0;`;
    x = 1;
  } else {
    clearCards();
    document.querySelector(".p_grid_06").style = ``;
    /* EN una funcion */
    x = 0;
  }
}

/* MARK:Exerc
 */
const btnCerrar_on = `width: calc(var(--size_menu) / 1.6); height: calc(var(--size_menu) / 1.6); opacity:100; visibility:visible; border:2px solid white;`;
const a_cierra = document.querySelector("#btn_cierraCard");
function clickExercises() {
  if (x == 0) {
    document.querySelector(
      ".grid_05"
    ).style = `background-color: var(--exercisesColor);
  color: #111b2d;`;
    document.querySelector(
      ".grid_01"
    ).style = `transform: translate(-110vw, -110vh);`;
    document.querySelector(
      ".grid_02"
    ).style = `transform: translate(110vw, -110vh);`;
    document.querySelector(
      ".grid_03"
    ).style = `transform: translate(-110vw, 110vh);`;
    document.querySelector(
      ".grid_04"
    ).style = `transform: translate(-110vw, -110vw);`;
    document.querySelector(
      ".grid_06"
    ).style = `transform: translate(-110vw, 110vh);`;
    document.querySelector(
      ".contenedor_grid"
    ).style = `grid-template-columns: 0 3fr 0; grid-template-rows: 0 0 0 0 6fr 0 ; gap:0;`;
    verInterior();
    a_cierra.style = btnCerrar_on;
    x = 1;
  } else {
    /* console.log(
      document.querySelector("#cierraLaCard").addEventListener("clicked")
    ); */
    x = 0;
  }
}
/* a_cierra.onclick = clearCards; */
/* function clickExercises() {
  document.querySelector(
    ".grid_05"
  ).style = `background-color: var(--exercisesColor);
  color: #111b2d;`;
  document.querySelector(
    ".grid_01"
  ).style = `transform: translate(-110vw, -110vh);`;
  document.querySelector(
    ".grid_02"
  ).style = `transform: translate(110vw, -110vh);`;
  document.querySelector(
    ".grid_03"
  ).style = `transform: translate(-110vw, 110vh);`;
  document.querySelector(
    ".grid_04"
  ).style = `transform: translate(-110vw, -110vw);`;
  document.querySelector(
    ".grid_06"
  ).style = `transform: translate(-110vw, 110vh);`;
  document.querySelector(
    ".contenedor_grid"
  ).style = `grid-template-columns: 0 3fr 0; grid-template-rows: 0 0 0 0 6fr 0 ; gap:0;`;
  verInterior();
  document.querySelector(
    ".cierraLaCard"
  ).style = `opacity:100; visibility:visible;`;
}
document.querySelector("#cierraLaCard").onclick = clearCards; */

function clickMenu() {
  document.querySelector(
    ".grid_04"
  ).style = `width: calc((var(--size_menu) / 1.6));
  height: calc((var(--size_menu) / 1.6));
  border-radius: 50%; font-size: calc(var(--font_menu) * 3); line-height: calc(
    var(--font_menu) * 3
  ); position:absolute; bottom:0; opacity:0;`;
  document.querySelector(
    ".grid_01"
  ).style = `transform: translate(-110vw, -110vh);`;
  document.querySelector(
    ".grid_02"
  ).style = `transform: translate(110vw, -110vh);`;
  document.querySelector(
    ".grid_03"
  ).style = `transform: translate(-110vw, 110vh);`;
  document.querySelector(
    ".grid_05"
  ).style = `transform: translate(110vw, 110vh);`;
  document.querySelector(
    ".grid_06"
  ).style = `transform: translate(-110vw, 110vh);`;
  document.querySelector(
    ".menu_position"
  ).style = `visibility:visible; opacity:100;`;
  document.querySelector(
    ".actualExercise"
  ).style = `transform:scale(100%); background-color: var(--primaryCards); opacity:100;`;
}
/* const interior_try = document.querySelector("#card_int01");
const newStyle = document.querySelector(".Card_interior");
interior_try.addEventListener("click", function () {
  newStyle.classList.toggle("card_int01_open");
}); */
function cardGrow(inte) {
  /* PARA USAR onclick="cardGrow(this);" en la <div> es decir, HACER esto que dice aqui a ESTA (this) <div>, ocurre ya que cardGrow(inter) definida asi, hace que luego (this) osea ESTA <div> presionada con click inserte este style ..... */
  /* $(in).classList = ".card_int01_open"; */
  inte.style = `order: 1;
  --card_flex: 200px;
  width: calc(100px + var(--card_flex));
  height: calc(200px + var(--card_flex));
  flex-grow: 10;
  flex-shrink: 1;`;
}
function clearMenu() {
  document.querySelector(".grid_01").style = ``;
  document.querySelector(".grid_02").style = ``;
  document.querySelector(".grid_03").style = ``;
  document.querySelector(".grid_04").style = ``;
  document.querySelector(".grid_05").style = ``;
  document.querySelector(".grid_06").style = ``;
  document.querySelector(
    ".menu_position"
  ).style = `transition: all 600ms ease-in-out;`; /* RECORDAR que tuve que quitar el delay, porque sino se buggeaba con la card de grid_05 */
  document.getElementById("menuToggle").checked = false;
  document.querySelector(".actualExercise").style = ``;
}
function verInterior() {
  document.querySelector(".interior_grid05").style = `opacity: 100;
  visibility: visible;`;
}

window.onload = function chargeLogo() {
  document.querySelector(
    ".a"
  ).style = `transform: translateY(0); opacity: 100;`;
  document.querySelector(
    ".b"
  ).style = `transform: translateY(0); opacity: 100;`;
};

/* MARK:NAV2
 */
const nodeList = document.querySelectorAll(".navbtn_interior");
function nav2Opener() {
  if (x == 0) {
    document.querySelector(
      ".navbtn_homeclass"
    ).style = `width: calc((var(--size_menubtn) * 5)); padding: 0 calc(var(--margin_navmenu) / 2);`;
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
    /* document.querySelector(".navbtn03").classList("navbtn03") = ``; */
    x = 0;
  }
}

/* function btnNavhover() {
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

for (let i = 0; i < navbuttonSee.length + 1; i++) {
  navbuttonSee[i].onmouseover = function () {
    for (let j = 0; j < navbtnmakeMini.length; j++) {
      navbtnmakeMini[j].classList.add("navbtn_mini");
    }
    this.classList.remove("navbtn_mini");
    this.classList.add("navbtn01_hover");
  };
  navbuttonSee[i].onmouseout = function () {
    this.classList.remove("navbtn01_hover");
    for (let j = 0; j < navbtnmakeMini.length; j++) {
      navbtnmakeMini[j].classList.remove("navbtn_mini");
    }
  };
}
/* document.querySelector(".navbtn01").onmouseover = function () {
  this.classList.add("navbtn01_hover");
  document.querySelector(".navbtn02").classList.add("navbtn_mini");
  document.querySelector(".navbtn03").classList.add("navbtn_mini");
  document.querySelector(".navbtn04").classList.add("navbtn_mini");
  document.querySelector(".navbtn05").classList.add("navbtn_mini");
}; */
/* document.querySelector(".navbtn01").onmouseout = function () {
  this.classList.remove("navbtn01_hover");
  document.querySelector(".navbtn02").classList.remove("navbtn_mini");
  document.querySelector(".navbtn03").classList.remove("navbtn_mini");
  document.querySelector(".navbtn04").classList.remove("navbtn_mini");
  document.querySelector(".navbtn05").classList.remove("navbtn_mini");
}; */
