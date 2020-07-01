let count = 0;

const value = document.getElementById("value");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const btn = e.currentTarget.classList;
    if (btn.contains("decrease")) {
      count--;
    } else if (btn.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    if (count < 0) {
      value.style.color = "red";
    } else if (count > 0) {
      value.style.color = "green";
    } else {
      value.style.color = "#333";
    }
    value.textContent = count;
  });
});

// const reset = document.querySelector('.reset');
// const increase = document.querySelector('.increase');
// const decrease = document.querySelector('.decrease');
// decrease.addEventListener('click',function(){
//     count--;
//     value.textContent = count;
//     value.style.color = 'red'
// })
// reset.addEventListener('click',function(){
//     count = 0 ;
//     value.textContent = count;
//     value.style.color = 'originColor'
// })
// increase.addEventListener('click',function(){
//     count++;
//     value.textContent = count;
//     value.style.color = 'green'
// })
