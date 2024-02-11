let text = document.querySelector("h5");
let btn1 = document.getElementById("add");
let btn2 = document.getElementById("remove");

btn1.addEventListener("click", (e) => {
  text.innerHTML = "Friend";
  text.style.color = "green";
  btn1.innerHTML = "connected";
});

btn2.addEventListener("click", (e) => {
  text.innerHTML = "Stranger";
  text.style.color = "red";
  btn1.innerHTML = "Add Friend";
});

let dill = document.getElementById("heart");

let check = 0;

// ---------------heart------------


// dill.addEventListener("click", (e) => {
//   if (check == 0) {
//     dill.style.backgroundColor = "white";
//     console.log("taped");
//     check = 1;
//   } else {
//     dill.style.backgroundColor = "red";
//     console.log("reverse");
//     check = 0;
//   }
// });
