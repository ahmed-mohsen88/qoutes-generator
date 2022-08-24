let quote_generator = document.getElementById("qoutGen");
let qouts = document.querySelectorAll(".qouts");
let shower = document.querySelector(".shower");
shower.innerHTML += qouts[1].innerHTML;

quote_generator.onclick = () => {
  shower.innerHTML = "";
  let counter = Math.ceil(Math.random() * 7);
  if (counter <= 6) {
    console.log(counter);
    shower.innerHTML += qouts[counter].innerHTML;
  } else {
    shower.innerHTML = "";
    shower.innerHTML += qouts[1].innerHTML;
  }
};
