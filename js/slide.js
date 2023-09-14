let Container = document.querySelector("#container");
let ImageWidth = Container.clientWidth; 
let ImageSlide = document.querySelector("#imageslide");

// ------------- 클릭한 그림이 가운데에 뜨도록 위치 지정하기 ------------- //

let i; //그림의 번호가 될 변수 
const queryString = window.location.search; //쿼리스트링 불러옴 
const urlParam = new URLSearchParams(queryString); //쿼리스트링의 url매개변수 불러옴 
i = urlParam.get('drawing'); //쿼리스트링의 url매개변수 중 drawing의 번호 불러옴

ImageSlide.style.transform = `translate(-${(i-1) * ImageWidth}px)`; //(그림 번호 - 1)만큼 이동시킨 뜸 


// ------------- 왼쪽 오른쪽 화살표 누르면 그림 이동하도록 설정하기 ------------- //

let LeftArrow = document.querySelector(".left img");
let RightArrow = document.querySelector(".right img");


function Right() {
    i++;
    ImageSlide.style.transform = `translate(-${(i-1) * ImageWidth}px)`;
    ImageSlide.style.transition = "0.5s";
}

function Left() {
    i--;
    ImageSlide.style.transform = `translate(-${(i-1) * ImageWidth}px)`;
    ImageSlide.style.transition = "0.5s";
}

RightArrow.addEventListener("click", Right);
LeftArrow.addEventListener("click", Left);


/*-------------------------- 터치 슬라이더 --------------------------*/
let touchStartX = 0;
let touchEndX = 0;

ImageSlide.addEventListener("touchstart", (e) => {
    touchStartX = e.touches[0].clientX;
});

ImageSlide.addEventListener("touchmove", (e) => {
    touchEndX = e.touches[0].clientX;
});

ImageSlide.addEventListener("touchend", () => {
    const deltaX = touchEndX - touchStartX;
    if (deltaX > 0) {
        // Swipe right (previous image)
        Left();
    } else if (deltaX < 0) {
        // Swipe left (next image)
        Right();
    }
});

/*-----------------------뷰포트 바뀌면 자동 새로고침-----------------------*/
let beforeWidth = window.innerWidth;
window.onresize = function() {
    const nowWidth = window.innerWidth;
    if (beforeWidth != nowWidth) {
        document.location.reload();
    }
    beforeWidth = nowWidth;
}
