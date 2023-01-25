let tipoPresupuesto
let aumentoSegunMes
let mesEstudio
let edad
let valorEstudioActual = 0
let personas = []
let ingresando = 0


do {
  pedirNombre();
  do {
    tipoPresupuesto = pedirTipoPresupuesto()
    switch (tipoPresupuesto) {
      case 1:
        valorEstudioActual = 1200
        console.log("Valor actual del estudio seleccionado (ELECTROENCEFALOGRAMA): $ " + valorEstudioActual)
        break;
        case 2:
        valorEstudioActual = 2500
        console.log("Valor actual del estudio seleccionado: (POLISOMNOGRAFIA) $ " + valorEstudioActual)
        break;
        case 3:
        valorEstudioActual = 1700
        console.log("Valor actual del estudio seleccionado: (ELECTROMIOGRAMA) $ " + valorEstudioActual)
        break;
        case 4:
        valorEstudioActual = 900
        console.log("Valor actual de la: CONSULTA $ " + valorEstudioActual)
        break;
        default:
        console.log("Por favor ingrese un valor correcto")
      }
    }while (tipoPresupuesto < 1 || tipoPresupuesto > 4)

    pedirMesEstudio()

    let persona = new Person(nombreIngresado, apellidoIngresado, edadIngresada, diagnosticoIngresado, tipoPresupuesto, valorEstudioActual)
    personas.push(persona)

    ingresando = confirm("Desea seguir ingresando pacientes?")

}while (ingresando)

console.log(personas)

//funciones

function pedirNombre() {
  do {
    nombreIngresado = prompt("Ingrese el nombre del paciente").toUpperCase()
  } while (nombreIngresado === "")
  do {
    apellidoIngresado = prompt("Ingrese apellido del paciente").toUpperCase()
  } while (apellidoIngresado === "")
  console.log("Nuevo Paciente: " + nombreIngresado + " " + apellidoIngresado)
  do {
    edadIngresada = parseInt(prompt("Ingrese edad del paciente"))
  } while (isNaN(edadIngresada) || !edadIngresada)
  do {
    diagnosticoIngresado = (prompt("Ingrese el diagnostico que figura en la orden medica")).toUpperCase()
  } while (diagnosticoIngresado === "")
}

function Person (nombre, apellido, edad, diagnostico, estudio, valor) {
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
    this.diagnostico = diagnostico
    this.estudio = mesEstudio
    this.costo = valor
  }

function pedirTipoPresupuesto() {
  return parseInt(prompt("Ingrese el numero que corresponde al tipo de estudio a presupuestar \n1. ELECTROENCEFALOGRAMA \n2. POLISOMNOGRAFIA \n3. ELECTROMIOGRAMA \n4. CONSULTA "))
}

function pedirMesEstudio() {
    do {
      mesEstudio = parseInt(prompt("Ingresá el numero que corresponde al mes en que realizara el estudio \n1. NOVIEMBRE \n2. DICIEMBRE \n3. ENERO"))
      switch (mesEstudio){
        case 1:
        mensajeFinal(valorEstudioActual*1.12)
        break;
        case 2:
        mensajeFinal(valorEstudioActual*1.15)
        break;
        case 3:
        mensajeFinal(valorEstudioActual*1.18)
        break;
        default:
        console.log("Ingrese un valor valido")
        break;
     }
   } while (mesEstudio < 1 || mesEstudio > 3)
}


function mensajeFinal(valorFinal) {
  console.log("En el mes seleccionado el estudio tendra un valor de : $ " + valorFinal.toFixed(2) + " Debido a la inflacion")
}
