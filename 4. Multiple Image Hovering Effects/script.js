let elem = document.querySelectorAll(".elem");

elem.forEach(function (e) {
  e.addEventListener("mouseenter", function () {
    e.childNodes[3].style.opacity = 1;
  });
  e.addEventListener("mouseleave", function () {
    e.childNodes[3].style.opacity = 0;
  });
  e.addEventListener("mousemove", function (dets) {
    e.childNodes[3].style.left = dets.x + "px";
  });
});

// let elem1 = document.querySelector("#elem1");

// let elemImg = document.querySelector("#elem1 img");

// elem1.addEventListener("mousemove", function (e) {
//   elemImg.style.left = e.x + "px";
//   elemImg.style.top = e.y + "px";
// });

// elem1.addEventListener("mouseenter", function (e) {
//   elemImg.style.opacity = 1;
// });

// elem1.addEventListener("mouseleave", function (e) {
//   elemImg.style.opacity = 0;
// });
