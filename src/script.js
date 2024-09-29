// 랜더링 될 이미지 집합소
// const images = [
//   {
//     src: "https://github.com/reeyounghyun/k-baemin/blob/main/public/main_banner.jpg?raw=true",
//     text: "https://github.com/reeyounghyun/k-baemin/blob/main/public/main-text.png?raw=true"
//   },
//   {
//     src: "https://github.com/reeyounghyun/k-baemin/blob/main/public/main_banner1.jpg?raw=true",
//     text: "https://github.com/reeyounghyun/k-baemin/blob/main/public/main-text2.png?raw=true"
//   },
//   {
//     src: "https://github.com/reeyounghyun/k-baemin/blob/main/public/main_banner2.jpg?raw=true",
//     text: "https://github.com/reeyounghyun/k-baemin/blob/main/public/main-text3.png?raw=true"
//   },
//   {
//     src: "https://github.com/reeyounghyun/k-baemin/blob/main/public/main_banner3.jpg?raw=true",
//     text: "https://github.com/reeyounghyun/k-baemin/blob/main/public/main-text4.png?raw=true"
//   },
// ];

const imagesBg = document.getElementById('randomImage');

function getRandomImage(callback) {
  const bgClasses = ['bg1', 'bg2', 'bg3', 'bg4'];
  const randomIndex = Math.floor(Math.random() * bgClasses.length);
  
  // 기존 클래스 제거
  imagesBg.classList.remove(...bgClasses);
  
  // 랜덤으로 선택된 클래스 추가
  const newClass = bgClasses[randomIndex];
  imagesBg.classList.add(newClass);
  
  // 콜백 함수가 있으면 호출
  if (callback) {
    callback(newClass);
  }
}

// 예시: 이미지가 로드된 후 애니메이션 추가
getRandomImage(function() {
  imagesBg.style.animation = 'growShrink 2s ease-out';
});


// 새로고침 시 랜덤 이미지 설정
window.onload = function() {
  getRandomImage();
};

document.addEventListener('DOMContentLoaded', function() {
  const img = document.getElementById('randomImage');
  
  // 이미지가 로드되면 애니메이션 적용
  img.addEventListener('load', function() {
    img.style.animation = 'growShrink 2s ease-out';
  });
});
