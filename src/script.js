// 랜더링 될 이미지 집합소
const images = [
  {
    src: "https://github.com/reeyounghyun/k-baemin/blob/main/public/main_banner.jpg?raw=true",
    text: "https://github.com/reeyounghyun/k-baemin/blob/main/public/main-text.png?raw=true"
  },
  {
    src: "https://github.com/reeyounghyun/k-baemin/blob/main/public/main_banner1.jpg?raw=true",
    text: "https://github.com/reeyounghyun/k-baemin/blob/main/public/main-text2.png?raw=true"
  },
  {
    src: "https://github.com/reeyounghyun/k-baemin/blob/main/public/main_banner2.jpg?raw=true",
    text: "https://github.com/reeyounghyun/k-baemin/blob/main/public/main-text3.png?raw=true"
  },
  {
    src: "https://github.com/reeyounghyun/k-baemin/blob/main/public/main_banner3.jpg?raw=true",
    text: "https://github.com/reeyounghyun/k-baemin/blob/main/public/main-text4.png?raw=true"
  },
];

// 랜덤 이미지를 선택하자
function getRandomImage() {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}

// 랜덤 이미지를 HTML과 연결 함수
function setRandomImage() {
  const imgElement = document.getElementById('randomImage');
  const textImageElement = document.getElementById('textImage');
  const randomImage = getRandomImage(); // 랜덤 이미지 객체
  
  // 텍스트 이미지 먼저 설정
  textImageElement.src = randomImage.text;
  
  // 텍스트 이미지가 로드된 후 배경 이미지 설정
  textImageElement.addEventListener('load', function() {
    imgElement.src = randomImage.src; // 배경 이미지 설정
  });
}

// 새로고침 할 때 램덤 이미지 함수
window.onload = function() {
  setRandomImage();
};

document.addEventListener('DOMContentLoaded', function() {
  const img = document.getElementById('randomImage');
  
  //이미지가 로드되면 애니메이션 적용
  img.addEventListener('load', function() {
    img.style.animation = 'growShrink 2s ease-out';
  });
});