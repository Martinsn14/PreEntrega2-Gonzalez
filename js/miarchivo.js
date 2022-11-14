
//Declaración de variables globales

let respuesta = ''
let z = false
let puntaje = 0
let porc = 0

//Se crea la clase QUIZ para contener todas las preguntas que sean necesarias con cada una de sus opciones.

class Quiz {
    constructor(id,pregunta, respuestaA, respuestaB, respuestaC, respuestaD, correcta) {
        this.id = id
        this.pregunta = pregunta
        this.respuestaA = respuestaA
        this.respuestaB = respuestaB
        this.respuestaC = respuestaC
        this.respuestaD = respuestaD
        this.correcta = correcta
    }
}

//Se crea un array que contiene un objeto de la clase Quiz por cada posición. Es decir en cada posición se almacena 1 pregunta con sus respuestas y las demas propiedades.

const preguntas = [
    new Quiz(1, '¿Cuánto pesa la copa del mundo?', 'A- 2 Kilos', 'B- 4 Kilos', 'C- 6 Kilos', 'D- 8 Kilos', 'C'),
    new Quiz(2, '¿Cuáles de los siguientes países clasifico a Qatar 2022?', 'A- Chile', 'B- Ecuador', 'C- Paraguay', 'D- Perú', 'B'),
    new Quiz(3, '¿Como se llama la mascota del mundial?', 'A- Footix', 'B- La’eeb', 'C- Zakumi', 'D- Fuleco', 'B'),
    new Quiz(4, '¿En qué grupo se encuentra Argentina?', 'A- Grupo F', 'B- Grupo A', 'C- Grupo B ', 'D- Grupo C', 'D'),
    new Quiz(5, '¿Cuándo se juega el primer partido del mundial?', 'A- 20/11', 'B- 19/11', 'C- 13/11', 'D- 12/11', 'A')
]

//Función principal para recorrer el array para ir haciendo las preguntas.

preguntas.forEach(function start(x,i) { //Primer parametro trae el elemento del array, segundo parametro la posición del array, tercer parametro el array completo
        do{
            console.log(x)
            respuesta = prompt(`${preguntas[i].pregunta} \n\n ${preguntas[i].respuestaA}\n ${preguntas[i].respuestaB}\n ${preguntas[i].respuestaC}\n ${preguntas[i].respuestaD}`).toUpperCase()
            if (respuesta === 'A' || respuesta === 'B' || respuesta === 'C' || respuesta === 'D'){  
            z=false  
            }else{
            alert('Ingrese alguna opción valida')
            z=true
            }
        }while(z)
    esCorrecta(i,respuesta) 
    }
)

//Función que valida si la respuesta es correcta o incorrecta

function esCorrecta(i,resp){
    if (resp===preguntas[i].correcta){
        alert('Correcta')
        return puntaje = puntaje + 10
        
    }
    else{
        alert(`Incorrecta, la respuesta correcta es ${correcta(i)}`)         
        return porc = porc + 10
    }
}

//Función para indicar cual era la respuesta correcta

function correcta (i) {
    if (preguntas[i].correcta === 'A'){
        return preguntas[i].respuestaA
    }else if(preguntas[i].correcta === 'B'){ 
        return preguntas[i].respuestaB
    }else if(preguntas[i].correcta === 'C'){ 
        return preguntas[i].respuestaC
    }else{ 
        return preguntas[i].respuestaD
    }
}

//Muestra el puntaje obtenido y el porcentaje de respuestas correctas

porc = (puntaje / (porc + puntaje) * 100)
alert(`Fin del Juego \n\nObtuviste ${puntaje} puntos con el ${porc}% de respuesta correctas`)


