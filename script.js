// var counter = 1;
// setInterval(function(){
//   document.getElementById('radio'+counter).checked = true;
//   counter++;
//   if(counter > 3){
//     counter = 1;
//   }
// },2000);

const items = document.querySelectorAll(".accordion-item a");
let root = document.documentElement;

function toggleAccordion() {
  //   this.classList.toggle('active');
  this.nextElementSibling.classList.toggle("active");
}
// function rotation() {
//   root.style.setProperty("--pseudo-text", "rotate(180deg");
// }

items.forEach((item) => item.addEventListener("click", toggleAccordion));
// items.forEach((item) => item.addEventListener("click", rotation));

