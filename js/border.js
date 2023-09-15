//이미지가 컨테이너에 들어가도록 축소될 때, 축소된 이미지와 같은 크기의 border line을 생성하는 자바스크립트 함수

//모든 이미지 컨테이너를 불러온다 
const ImgContainers = document.querySelectorAll('.imgcontainer');

//각 이미지 컨테이너마다 다음 함수를 적용한다 
ImgContainers.forEach(imgContainer => {

    //컨테이너 안에 있는 이미지 (position : absolute 설정되어 있음)
    const img = imgContainer.querySelector('img');
    //컨테이너 안에 있는 border 객체 (position : absolute 설정되어 있음)
    const border = imgContainer.querySelector('.border');

    //우선 이미지가 컨테이너에 비해 홀쭉한 친구인지 넙적한 친구인지 확인해야 한다
    //컨테이너의 가로 세로 비율 
    const containerWidth = imgContainer.offsetWidth;
    const containerHeight = imgContainer.offsetHeight;
    const containerRatio = containerHeight / containerWidth;
    //이미지의 가로 세로 비율
    const imgWidth = img.naturalWidth;
    const imgHeight = img.naturalHeight;
    const imgRatio = imgHeight / imgWidth;

    //여기서 설명!!

    //-------홀쭉한 경우-------//
    //imgRatio > containerRatio 라면, 홀쭉한 이미지이기 때문에 border의 가로 길이만 줄어들면 된다
    //이미지의 높이 -> 컨테이너의 높이와 같아진다 (newimgHeight = containerHeight)
    //축소(확대) 비율 = containerHeight / imgHeight (이미지의 원래 높이)
    //이미지의 너비 -> 높이가 축소(확대)된 비율과 같은 비율로 조정된다 (newimgWidth = imgWidth * (containerHeight / imgHeight))
    //식을 다시 쓰면 
    //newimgWidth = containerHeight * (imgWidth / imgHeight) = containerHeight / imgRatio 

    //-------넙적한 경우-------//
    //imgRatio < containerRatio 라면, 넙적한 이미지이기 때문에 border의 세로 길이만 줄어들면 된다
    //이미지의 너비 -> 컨테이너의 너비와 같아진다 (newimgWidth = containerWidth)
    //축소(확대) 비율 = containerWidth / imgWidth (이미지의 원래 너비)
    //이미지의 높이 -> 너비가 축소(확대)된 비율과 같은 비율로 조정된다 (newimgHeight = imgHeight * (containerWidth / imgWidth))
    //식을 다시 쓰면
    //newimgHeight = containerWidth * (imgHeight / imgWidth) = containerWidth * imgRatio

    //조정된 이미지의 너비, 높이와 같게 border의 너비 높이를 조정해주면 된다 

    if (imgRatio >= containerRatio) {
        //홀쭉한 경우 : 가로 길이 바꿔주기
        let newBorderWidth = containerHeight / imgRatio;
        border.style.width = `calc(${newBorderWidth}px - 2px)`;
        //가로 위치 조정
        border.style.left = `calc(0.5 * ${containerWidth - newBorderWidth}px)`;
    } else {
        //넙적한 경우 : 세로 길이 바꿔주기
        let newBorderHeight = containerWidth * imgRatio;
        border.style.height = `calc(${newBorderHeight}px - 2px)`;
        //세로 위치 조정
        border.style.top = `calc(0.5 * ${containerHeight - newBorderHeight}px)`;
    }
});




