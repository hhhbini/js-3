const range = document.querySelector(".range input");
const select = document.querySelector(".select input");
const playBtn = document.querySelector(".select button");
const hideGame = document.querySelector(".hide-game");
const hideResult = document.querySelector(".hide-result");

function handleClick(event) {
  const rangeNumber = range.value;
  const selectNumber = select.value;
  const randomNumber = Math.ceil(Math.random() * parseInt(range.value));

  event.preventDefault();
  if (rangeNumber < 0) {
    alert("0 이상의 범위를 입력해 주세요!");
  } else if (rangeNumber == "" || selectNumber == "") {
    alert("값을 모두 입력해 주세요!");
  } else if (selectNumber > rangeNumber) {
    alert("범위 내의 값를 선택해 주세요!");
  } else {
    hideGame.innerHTML =
      "You chose: " +
      selectNumber +
      " ,the machine chose: " +
      randomNumber +
      ".";

    if (selectNumber == randomNumber) {
      hideResult.innerHTML = "You won!";
    } else {
      hideResult.innerHTML = "You lost!";
    }
  }
}

playBtn.addEventListener("click", handleClick);
