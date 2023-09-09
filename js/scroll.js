let Menu = document.querySelector("#menu");
let TitleAll = document.querySelector("#title");
let Title = document.querySelector("#title h1");
let Days = document.querySelector("#days");

let MenuHeight = Menu.clientHeight;


/*미디어쿼리 별 스크롤 함수 선언*/
function scrollXs() {
    let windowTop = window.scrollY;
    if (windowTop >= 20 && windowTop < 45) { /*20 : 메뉴의 패딩 - 20px, 45 : (메뉴의 길이 + 제목의 top) - (제목의 onscroll 탑)*/
        Menu.classList.add("scroll");
        Title.classList.remove("scroll");
        Days.classList.remove("scroll");
        TitleAll.style.top = String(MenuHeight) + "px";
        Days.style.top = String(MenuHeight) + "px";
    } else if (windowTop >= 45 && windowTop < 70) { /*70 : (메뉴의 길이 + 제목의 길이) - (요일의 onscroll 탑)*/ 
        Menu.classList.add("scroll");
        Title.classList.add("scroll");
        Days.classList.remove("scroll");
        TitleAll.style.top = String(MenuHeight) + "px";
        Days.style.top = String(MenuHeight) + "px";
    } else if (windowTop >= 70) {
        Menu.classList.add("scroll");
        Title.classList.add("scroll");
        Days.classList.add("scroll");
    } else {
        Menu.classList.remove("scroll");
        Title.classList.remove("scroll");
        Days.classList.remove("scroll");
        TitleAll.style.top = "0px";
        Days.style.top = "0px";
    }
}
function scrollS() {
    let windowTop = window.scrollY;
    if (windowTop >= 20 && windowTop < 36) { /*20 : 메뉴의 패딩 - 20, 45 : (메뉴의 길이 + 제목의 top) - (제목의 onscroll 탑)*/
        Menu.classList.add("scroll");
        Title.classList.remove("scroll");
        Days.classList.remove("scroll");
        TitleAll.style.top = String(MenuHeight) + "px";
        Days.style.top = String(MenuHeight) + "px";
    } else if (windowTop >= 36 && windowTop < 70) { /*70 : (메뉴의 길이 + 제목의 길이) - (요일의 onscroll 탑)*/ 
        Menu.classList.add("scroll");
        Title.classList.add("scroll");
        Days.classList.remove("scroll");
        TitleAll.style.top = String(MenuHeight) + "px";
        Days.style.top = String(MenuHeight) + "px";
    } else if (windowTop >= 70) {
        Menu.classList.add("scroll");
        Title.classList.add("scroll");
        Days.classList.add("scroll");
    } else {
        Menu.classList.remove("scroll");
        Title.classList.remove("scroll");
        Days.classList.remove("scroll");
        TitleAll.style.top = "0px";
        Days.style.top = "0px";
    }
}
function scrollM() {
    let windowTop = window.scrollY;
    if (windowTop >= 20 && windowTop < 36) { /*20 : 메뉴의 패딩 - 20, 45 : (메뉴의 길이 + 제목의 top) - (제목의 onscroll 탑)*/
        Menu.classList.add("scroll");
        Title.classList.remove("scroll");
        Days.classList.remove("scroll");
        TitleAll.style.top = String(MenuHeight) + "px";
        Days.style.top = String(MenuHeight) + "px";
    } else if (windowTop >= 36 && windowTop < 70) { /*70 : (메뉴의 길이 + 제목의 길이) - (요일의 onscroll 탑)*/ 
        Menu.classList.add("scroll");
        Title.classList.add("scroll");
        Days.classList.remove("scroll");
        TitleAll.style.top = String(MenuHeight) + "px";
        Days.style.top = String(MenuHeight) + "px";
    } else if (windowTop >= 70) {
        Menu.classList.add("scroll");
        Title.classList.add("scroll");
        Days.classList.add("scroll");
    } else {
        Menu.classList.remove("scroll");
        Title.classList.remove("scroll");
        Days.classList.remove("scroll");
        TitleAll.style.top = "0px";
        Days.style.top = "0px";
    }
}
function scrollL() {
    let windowTop = window.scrollY;
    if (windowTop >= 20 && windowTop < 33) { /*20 : 메뉴의 패딩 - 20, 45 : (메뉴의 길이 + 제목의 top) - (제목의 onscroll 탑)*/
        Menu.classList.add("scroll");
        Title.classList.remove("scroll");
        Days.classList.remove("scroll");
        TitleAll.style.top = String(MenuHeight) + "px";
        Days.style.top = String(MenuHeight) + "px";
    } else if (windowTop >= 33 && windowTop < 70) { /*70 : (메뉴의 길이 + 제목의 길이) - (요일의 onscroll 탑)*/ 
        Menu.classList.add("scroll");
        Title.classList.add("scroll");
        Days.classList.remove("scroll");
        TitleAll.style.top = String(MenuHeight) + "px";
        Days.style.top = String(MenuHeight) + "px";
    } else if (windowTop >= 70) {
        Menu.classList.add("scroll");
        Title.classList.add("scroll");
        Days.classList.add("scroll");
    } else {
        Menu.classList.remove("scroll");
        Title.classList.remove("scroll");
        Days.classList.remove("scroll");
        TitleAll.style.top = "0px";
        Days.style.top = "0px";
    }
}
function scrollXl() {
    let windowTop = window.scrollY;
    if (windowTop >= 20 && windowTop < 40) { /*20 : 메뉴의 패딩 - 20, 45 : (메뉴의 길이 + 제목의 top) - (제목의 onscroll 탑)*/
        Menu.classList.add("scroll");
        Title.classList.remove("scroll");
        Days.classList.remove("scroll");
        TitleAll.style.top = String(MenuHeight) + "px";
        Days.style.top = String(MenuHeight) + "px";
    } else if (windowTop >= 40 && windowTop < 90) { /*70 : (메뉴의 길이 + 제목의 길이) - (요일의 onscroll 탑)*/ 
        Menu.classList.add("scroll");
        Title.classList.add("scroll");
        Days.classList.remove("scroll");
        TitleAll.style.top = String(MenuHeight) + "px";
        Days.style.top = String(MenuHeight) + "px";
    } else if (windowTop >= 90) {
        Menu.classList.add("scroll");
        Title.classList.add("scroll");
        Days.classList.add("scroll");
    } else {
        Menu.classList.remove("scroll");
        Title.classList.remove("scroll");
        Days.classList.remove("scroll");
        TitleAll.style.top = "0px";
        Days.style.top = "0px";
    }
}
function scrollXxl() {
    let windowTop = window.scrollY;
    if (windowTop >= 20 && windowTop < 63) { /*20 : 메뉴의 패딩 - 20, 45 : (메뉴의 길이 + 제목의 top) - (제목의 onscroll 탑)*/
        Menu.classList.add("scroll");
        Title.classList.remove("scroll");
        Days.classList.remove("scroll");
        TitleAll.style.top = String(MenuHeight) + "px";
        Days.style.top = String(MenuHeight) + "px";
    } else if (windowTop >= 63 && windowTop < 120) { /*70 : (메뉴의 길이 + 제목의 길이) - (요일의 onscroll 탑)*/ 
        Menu.classList.add("scroll");
        Title.classList.add("scroll");
        Days.classList.remove("scroll");
        TitleAll.style.top = String(MenuHeight) + "px";
        Days.style.top = String(MenuHeight) + "px";
    } else if (windowTop >= 120) {
        Menu.classList.add("scroll");
        Title.classList.add("scroll");
        Days.classList.add("scroll");
    } else {
        Menu.classList.remove("scroll");
        Title.classList.remove("scroll");
        Days.classList.remove("scroll");
        TitleAll.style.top = "0px";
        Days.style.top = "0px";
    }
}

/*----------------연도 함수------------------*/
let y20 = document.querySelector(".xs_year.y20");
let y21 = document.querySelector(".xs_year.y21");
let y22 = document.querySelector(".xs_year.y22");

let Main = document.querySelector("main");
let Footer = document.querySelector("footer");

function scrollYearXs() {
    let windowTop = window.scrollY;
    if (windowTop >= 70 && windowTop < 1535) { 
        y20.classList.add("scroll");
        y21.classList.remove("scroll");
        y22.classList.remove("scroll");
        Main.style.top = "15px";
        Footer.style.top = "15px";
    } else if (windowTop >= 1535 && windowTop < 4200) {
        y20.classList.remove("scroll");
        y21.classList.add("scroll");
        y22.classList.remove("scroll");
        Main.style.top = "15px";
        Footer.style.top = "15px";
    } else if (windowTop >= 4200) {
        y20.classList.remove("scroll");
        y21.classList.remove("scroll");
        y22.classList.add("scroll");
        Main.style.top = "15px";
        Footer.style.top = "15px";
    } else {
        y20.classList.remove("scroll");
        y21.classList.remove("scroll");
        y22.classList.remove("scroll");
        Main.style.top = "0px";
        Footer.style.top = "0px";
    }
}
function scrollYearS1() {
    let windowTop = window.scrollY;
    if (windowTop >= 70 && windowTop < 1550) { 
        y20.classList.add("scroll");
        y21.classList.remove("scroll");
        y22.classList.remove("scroll");
        Main.style.top = "15px";
        Footer.style.top = "15px";
    } else if (windowTop >= 1550 && windowTop < 4250) {
        y20.classList.remove("scroll");
        y21.classList.add("scroll");
        y22.classList.remove("scroll");
        Main.style.top = "15px";
        Footer.style.top = "15px";
    } else if (windowTop >= 4250) {
        y20.classList.remove("scroll");
        y21.classList.remove("scroll");
        y22.classList.add("scroll");
        Main.style.top = "15px";
        Footer.style.top = "15px";
    } else {
        y20.classList.remove("scroll");
        y21.classList.remove("scroll");
        y22.classList.remove("scroll");
        Main.style.top = "0px";
        Footer.style.top = "0px";
    }
}

let Y20 = document.querySelector("#years .y20")
let Y21 = document.querySelector("#years .y21")
let Y22 = document.querySelector("#years .y22")

let Years = document.querySelector("#years")

function scrollYearS2() {
    let windowTop = window.scrollY;
    if (windowTop >= 70 && windowTop < 1470) {
        Y20.classList.add("scroll");
        Y21.classList.remove("scroll");
        Y22.classList.remove("scroll");
    } else if (windowTop >= 1470 && windowTop < 4070) {
        Y20.classList.remove("scroll");
        Y21.classList.add("scroll");
        Y22.classList.remove("scroll");
    } else if (windowTop > 4070) {
        Y20.classList.remove("scroll");
        Y21.classList.remove("scroll");
        Y22.classList.add("scroll");
    } else {
        Y20.classList.remove("scroll");
        Y21.classList.remove("scroll");
        Y22.classList.remove("scroll");
    }
}
function scrollYearM() {
    let windowTop = window.scrollY;
    if (windowTop >= 70 && windowTop < 770) {
        Y20.classList.add("scroll");
        Y21.classList.remove("scroll");
        Y22.classList.remove("scroll");
    } else if (windowTop >= 770 && windowTop < 2070) {
        Y20.classList.remove("scroll");
        Y21.classList.add("scroll");
        Y22.classList.remove("scroll");
    } else if (windowTop > 2070) {
        Y20.classList.remove("scroll");
        Y21.classList.remove("scroll");
        Y22.classList.add("scroll");
    } else {
        Y20.classList.remove("scroll");
        Y21.classList.remove("scroll");
        Y22.classList.remove("scroll");
    }
}
function scrollYearL() {
    let windowTop = window.scrollY;
    if (windowTop >= 70 && windowTop < 520) {
        Y20.classList.add("scroll");
        Y21.classList.remove("scroll");
        Y22.classList.remove("scroll");
    } else if (windowTop >= 520 && windowTop < 1420) {
        Y20.classList.remove("scroll");
        Y21.classList.add("scroll");
        Y22.classList.remove("scroll");
    } else if (windowTop > 1420) {
        Y20.classList.remove("scroll");
        Y21.classList.remove("scroll");
        Y22.classList.add("scroll");
    } else {
        Y20.classList.remove("scroll");
        Y21.classList.remove("scroll");
        Y22.classList.remove("scroll");
    }
}

/*미디어쿼리 별 스크롤 함수 실행*/
if(matchMedia("screen and (max-width: 411px)").matches){
    window.addEventListener("scroll", scrollXs);
    window.addEventListener("scroll", scrollYearXs);
}
if(matchMedia("screen and (min-width: 412px) and (max-width: 479px").matches){
    window.addEventListener("scroll", scrollS);
    window.addEventListener("scroll", scrollYearS1);
}
if(matchMedia("screen and (min-width: 480px) and (max-width: 819px)").matches){
    window.addEventListener("scroll", scrollS);
    window.addEventListener("scroll", scrollYearS2);
}
if(matchMedia("screen and (min-width: 820px) and (max-width: 1179px)").matches){
    window.addEventListener("scroll", scrollM);
    window.addEventListener("scroll", scrollYearM);
}
if(matchMedia("screen and (min-width: 1180px) and (max-width: 1439px)").matches){
    window.addEventListener("scroll", scrollL);
    window.addEventListener("scroll", scrollYearL);
}
if(matchMedia("screen and (min-width: 1440px) and (max-width: 1919px)").matches){
    window.onscroll = scrollXl;
}
if(matchMedia("screen and (min-width: 1920px)").matches){
    window.onscroll = scrollXxl;
}

/*뷰포트 바뀌면 자동 새로고침*/
let beforeWidth = window.innerWidth;
window.onresize = function() {
    const nowWidth = window.innerWidth;
    if (beforeWidth != nowWidth) {
        document.location.reload();
    }
    beforeWidth = nowWidth;
}
