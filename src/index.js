let counter = document.getElementById("count");

document.getElementById("add").addEventListener("click", increaseCount);

document.getElementById("sub").addEventListener("click", decreaseCount);

function increaseCount() {
  counter.innerText = parseInt(counter.innerText) + 1;
}

function decreaseCount() {
  let count = parseInt(counter.innerText);
  if (count <= 0) {
    counter.innerText = 0;
  } else {
    counter.innerText = count - 1;
  }
}
