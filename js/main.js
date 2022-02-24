let boxes = document.querySelectorAll(".box");
boxes.forEach((el) => {
  el.addEventListener("click", () => {
    el.classList.toggle("select");
  });
});

