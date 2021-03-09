

const box = document.querySelector("#b1");
const box1 = document.querySelector("#b2");
const box2 = document.querySelector("#b3");
let time = new Date();
let d = time.getHours()*60*60 + time.getMinutes()*60 + time.getSeconds();

let hours = d/(60*60);
let b1 = 270+6*time.getSeconds();
let b2 = 270+6*time.getMinutes();
let b3 = 270+30*(hours-12);
let counter = setInterval(function()
{
  b1=b1+6;
  b2=b2+0.1;
  b3=b3+0.0083333333;
  console.log(b2);
  box.style.transform = `rotate(${b1}deg)`;
  box1.style.transform = `rotate(${b2}deg)`;
  box2.style.transform = `rotate(${b3}deg)`;
},1000);