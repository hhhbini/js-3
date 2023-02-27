const range = document.querySelector(".range input");
const select = document.querySelector(".select input");
const playBtn = document.querySelector(".select button");
const hideGame = document.querySelector(".hide-game");
const hideResult = document.querySelector(".hide-result");

function handleClick(event) {
  const rangeNumber = range.value;
  const selectNumber = select.value;
  const randomNumber = Math.ceil(Math.random() * parseInt(range.value));
  /*if (selectNumber == None && randomNumber == None) {
    prompt("값을 모두 입력해 주세요!");
  } else {
  }*/
  event.preventDefault();
  hideGame.innerHTML =
    "You chose: " + selectNumber + " ,the machine chose: " + randomNumber + ".";

  if (selectNumber == randomNumber) {
    hideResult.innerHTML = "You won!";
  } else {
    hideResult.innerHTML = "You lost!";
  }
}

playBtn.addEventListener("click", handleClick);

/* 
1. 범위값을 입력한다. (음수 포함될 수 없음)
2. 숫자를 선택한다. (범위값 내)
3. Play를 누르면 게임 진행 텍스트가 나온다. (유저가 숫자를 입력 안하면 진행 안됨) - innerHTML
+) 실시간으로 범위 값을 업데이트해야 합니다. - preventDefault() 
 */
