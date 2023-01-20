function calcularFecha() {

  const diasDeLaSemana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

  let dia = document.getElementById("dia").value;
  let mes = document.getElementById("mes").value;
  let anio = document.getElementById("anio").value;

  let fecha = new Date(anio, mes - 1, dia); //Se ajusta la fecha para que corresponda con Js
  let semana = fecha.getDay();

  let diaString = diasDeLaSemana[semana]

  let diaLaboral = "";
//Valores del 0 al 6, donde 0 es domingo y 6 es sábado, sino es laborable
  switch (semana) {
    case 0: case 6:
      diaLaboral = "Fin de semana";
      break;
    default:
      diaLaboral = "Día laborable";
      break;
  }

  document.getElementById("resultado").innerHTML = `<div class="alert alert-primary my-4 text-center" role="alert"> ${diaString}, ${diaLaboral} </div>`
}