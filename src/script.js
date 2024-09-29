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

function getRandomImage() {
  const randomIndex = Math.floor(Math.random() * 2);
  
  // 기존 클래스 제거
  imagesBg.classList.remove('bg1', 'bg2');
  
  // 새 클래스 추가
  if (randomIndex === 0) {
    imagesBg.classList.add('bg1');
  } else {
    imagesBg.classList.add('bg2');
  }
}

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
