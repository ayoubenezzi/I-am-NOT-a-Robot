const checkbox = document.getElementById("checkbox");
const submitBtn = document.querySelector("button[type=submit]");
const elements = document.querySelectorAll(".element");
const selectColor = document.getElementById("select-Color");
checkbox.disabled = true;
submitBtn.disabled = true;

elements.forEach(function (element) {
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.innerHTML = color;
  selectColor.style.backgroundColor = color;
  selectColor.innerHTML = color;
});

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let hashColor = "#";
  for (let i = 0; i < 6; i++) {
    hashColor += letters[Math.floor(Math.random() * 16)];
  }
  return hashColor;
}

elements.forEach(function (element) {
  element.addEventListener("click", function () {
    if (element.innerHTML === selectColor.innerHTML) {
      alert("You are Human!");
      checkbox.checked = true;
      checkbox.disabled = false;
      submitBtn.disabled = false;
      submitBtn.classList.remove("btn-light");
      submitBtn.classList.add("btn-success");
    } else {
      alert("Please verify that you are human!");
      location.reload(true);
    }
  });
});
