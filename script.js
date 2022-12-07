/*Expandir texto*/

function Mudarestado(el) {
    var display = document.getElementById(el).style.display;
    var h4 = document.getElementById("btn");

      if (display == "none") {
        document.getElementById(el).style.display = 'block';
        h4.innerHTML = "Esconder";
      } else {
        document.getElementById(el).style.display = 'none';
        h4.innerHTML = "Ver mais";
      }
 }

 /*Adicionar comentário*/

function Mudarestado(el) {
    var display = document.getElementById(el).style.display;
    var h4 = document.getElementById("btn");

      if (display == "none") {
        document.getElementById(el).style.display = 'block';
        h4.innerHTML = "Esconder";
      } else {
        document.getElementById(el).style.display = 'none';
        h4.innerHTML = "Ver mais";
      }
 }