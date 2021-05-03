// 테스트
//alert('테스트');
//첫번째 버튼 클릭 => alert 메세지 '클릭됨 출력'
//var button1 = document.querySelector('.drum');
//button1.addEventListener('click', btnClick);

// 모든 버튼 7개에 버튼을 클릭하면 '클릭됨!' 화면출력 (반복문 사용)
// 1.선택, 2.선택한 배열을 가지고 반복문을 돌려서 모든 버튼에 이벤트를 설정한다.
var buttons = document.querySelectorAll('.drum');

// 마우스 이벤트 버튼에 설정
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', btnClick);
}
// 키보드 이벤트 document에 설정
document.addEventListener('keypress', function (e) {
  //console.log(e.key);
  drumSound(e.key)
});


function btnClick() {
  //console.log(this.textContent); //this는 이벤트 태그를 가르킨다.
  drumSound(this.textContent)
};

function drumSound(key) {
  switch (key) {
    case 'w': var audio = new Audio('sounds/tom-1.mp3'); break;
    case 'a': var audio = new Audio('sounds/tom-2.mp3'); break;
    case 's': var audio = new Audio('sounds/tom-3.mp3'); break;
    case 'd': var audio = new Audio('sounds/tom-4.mp3'); break;
    case 'j': var audio = new Audio('sounds/snare.mp3'); break;
    case 'k': var audio = new Audio('sounds/crash.mp3'); break;
    case 'l': var audio = new Audio('sounds/kick-bass.mp3'); break;
  }
  audio.play();

  aniDrum(key)
}

function aniDrum(key) {
  switch (key) {
    case 'w': buttons[0].classList.add('pressed');
      setTimeout(function () {
        buttons[0].classList.remove('pressed');
      }, 200); break;
    case 'a': buttons[1].classList.add('pressed');
      setTimeout(function () {
        buttons[1].classList.remove('pressed');
      }, 200); break;
    case 's': buttons[2].classList.add('pressed');
      setTimeout(function () {
        buttons[2].classList.remove('pressed');
      }, 200); break;
    case 'd': buttons[3].classList.add('pressed');
      setTimeout(function () {
        buttons[3].classList.remove('pressed');
      }, 200); break;
    case 'j': buttons[4].classList.add('pressed');
      setTimeout(function () {
        buttons[4].classList.remove('pressed');
      }, 200); break;
    case 'k': buttons[5].classList.add('pressed');
      setTimeout(function () {
        buttons[5].classList.remove('pressed');
      }, 200); break;
    case 'l': buttons[6].classList.add('pressed');
      setTimeout(function () {
        buttons[6].classList.remove('pressed');
      }, 200); break;
  }
}

