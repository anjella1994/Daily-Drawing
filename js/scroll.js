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

/*미디어쿼리 별 스크롤 함수 실행*/
if(matchMedia("screen and (max-width: 411px)").matches){
    window.onscroll = scrollXs;
}
if(matchMedia("screen and (min-width: 411px) and (max-width: 819px)").matches){
    window.onscroll = scrollS;
}
if(matchMedia("screen and (min-width: 820px) and (max-width: 1179px)").matches){
    window.onscroll = scrollM;
}
if(matchMedia("screen and (min-width: 1180px) and (max-width: 1439px)").matches){
    window.onscroll = scrollL;
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

