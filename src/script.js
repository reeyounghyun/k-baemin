// 랜더링 될 이미지 집합소
const images = [
  "/public/main_banner.jpg"
];


// 랜덤 이미지를 선택하자
function getRandomImage() {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}


// 랜덤 이미지를 HTML과 연결 함수
function setRandomImage() {
  const imgElement =  document.getElementById('randomImage');
  imgElement.scr = getRandomImges();
}

// 새로고침 할 때 램덤 이미지 함수
window.onload = function() {
  setRandomImage();
};
