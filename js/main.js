//아이디가 circle인 요소를 찾아서 저장
const circle = document.querySelector("#circle");
//태그명이 article인 요소를 찾아서 저장
const article = circle.querySelectorAll("article");

//article의 전체 갯수만큼 반복을 돌면서 mouseenter, mouseleave, touchstart, touchend 이벤트 연결
for (let el of article) {
    // 마우스나 터치가 시작되면 부모인 #circle의 animation-play-state 값을 "paused"로 변경
    const pauseAnimation = () => {
        circle.style.animationPlayState = "paused";
    };

    // 마우스나 터치가 끝나면 부모인 #circle의 animation-play-state 값을 "running"으로 변경
    const resumeAnimation = () => {
        circle.style.animationPlayState = "running";
    };

    // article에 마우스를 올리면 애니메이션 정지
    el.addEventListener("mouseenter", pauseAnimation);
    
    // article에서 마우스가 떠나면 애니메이션 재생
    el.addEventListener("mouseleave", resumeAnimation);

    // 터치가 시작되면 애니메이션 정지
    el.addEventListener("touchstart", pauseAnimation);
    
    // 터치가 끝나면 애니메이션 재생
    el.addEventListener("touchend", resumeAnimation);
}
