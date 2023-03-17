//cambiar fondo
let cabecera = document.getElementsByTagName("header");
function dark(){
  cabecera[0].style.backgroundColor = '#000';   
  cabecera[0].classList.remove('ligero'); 
  document.body.style.backgroundColor = "#000";
  document.getElementById("evento").innerHTML = "Cambiaste al tema oscuro";
} 
//light
document.getElementById('capa2').addEventListener('click',light);
function light(){
cabecera[0].style.backgroundColor = '#39ff85bd';
cabecera[0].classList.add('ligero');
document.body.style.backgroundColor = "#39ff85bd"
document.getElementById("evento").innerHTML = "Cambiaste al tema nature";
}
document.getElementById('capa3').addEventListener('click', function (){defaulte()})
let defaulte = function(){
cabecera[0].style.backgroundColor = 'transparent';
document.body.style.backgroundColor = "#d9edfaa0"
cabecera[0].classList.remove('dark');
document.getElementById("evento").innerHTML = "Cambiaste al tema default";
}
//Fin header

const figura = document.getElementById("figura");
const imagen = document.getElementById("imagen");
const calculo = document.getElementById("calculo");
const resultado = document.getElementById("resultado");
const botonCalcular = areacalculo.querySelector("input[type=button]");

function seleccionarFigura() {
  const opcionSeleccionada = figura.value;
  document.getElementById("calcular")
  botonCalcular.classList.add("active");;

  imagen.innerHTML = `<img src="img/${opcionSeleccionada.toLowerCase()}.png" alt="${opcionSeleccionada}">`;


  switch (opcionSeleccionada) {
    case "cuadrado":
      calculo.innerHTML = '<label for="lado">Lado:</label><input type="text" name="lado" id="lado">';
      break;
    case "triangulo":
      calculo.innerHTML = '<label for="base">Base:</label><input type="text" name="base" id="base"><br><label for="altura">Altura:</label><input type="text" name="altura" id="altura">';
      break;
    case "circulo":
      calculo.innerHTML = '<label for="radio">Radio:</label><input type="text" name="radio" id="radio">';
      break;
    default:
      console.log("Figura no reconocida");
      break;
  }
}

function calcularArea() {
  const opcionSeleccionada = figura.value;


  switch (opcionSeleccionada) {
    case "cuadrado":
      const lado = parseFloat(document.getElementById("lado").value);
      const areaCuadrado = lado * lado;
      resultado.innerText = `El área del cuadrado es ${areaCuadrado}`;
      break;
    case "triangulo":
      const base = parseFloat(document.getElementById("base").value);
      const altura = parseFloat(document.getElementById("altura").value);
      const areaTriangulo = (base * altura) / 2;
      resultado.innerText = `El área del triángulo es ${areaTriangulo}`;
      break;
    case "circulo":
      const radio = parseFloat(document.getElementById("radio").value);
      const areaCirculo = Math.PI * (radio * radio);
      resultado.innerText = `El área del círculo es ${areaCirculo}`;
      break;
    default:
      console.log("Figura no reconocida");
      break;
  }
}


botonCalcular.addEventListener("click", calcularArea);
