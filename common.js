

var backtotopbutton = document.getElementById("backtotop");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (window.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    backtotopbutton.style.display = "block";
  } else {
    backtotopbutton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}