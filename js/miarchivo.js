

let respuesta = ''
let z = false
let puntaje = 0
let porc = 0

class Quiz {
    constructor(id,pregunta, respuestaA, respuestaB, respuestaC, respuestaD) {
        this.id = id
        this.pregunta = pregunta
        this.respuestaA = respuestaA
        this.respuestaB = respuestaB
        this.respuestaC = respuestaC
        this.respuestaD = respuestaD
    }
}

const preguntas = [
    new Quiz(1, '¿Cuánto pesa la copa del mundo?', 'A- 2 Kilos', 'B- 4 Kilos', 'C- 6 Kilos', 'D- 8 Kilos'),
    new Quiz(2, '¿Cuáles de los siguientes países clasifico a Qatar 2022?', 'A- Chile', 'B- Ecuador', 'C- Paraguay', 'D- Perú'),
    new Quiz(3, '¿Como se llama la mascota del mundial?', 'A- Footix', 'B- La’eeb', 'C- Zakumi', 'D- Fuleco'),
    new Quiz(4, '¿En qué grupo se encuentra Argentina?', 'A- Grupo F', 'B- Grupo A', 'C- Grupo B ', 'D- Grupo C'),
    new Quiz(5, '¿Cuándo se juega el primer partido del mundial?', 'A- 20/11', 'B- 19/11', 'C- 13/11', 'D- 12/11')
]

const respCorrecta = [ 
    {id: 1, correcta: "C"},
    {id: 2, correcta: "B"},
    {id: 3, correcta: "B"},
    {id: 4, correcta: "D"},
    {id: 5, correcta: "A"},

]

preguntas.forEach(function start(x,i) {
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

function esCorrecta(i,resp){
    if (resp=== respCorrecta[i].correcta){
        alert('Correcta')
        return puntaje = puntaje + 10
        
    }
    else{
        const string = preguntas.find(item => item.id === respCorrecta[i].id)
        const campo = "respuesta"+respCorrecta[i].correcta
        alert(`Incorrecta, la respuesta correcta es ${string[campo]}`)     
        return porc = porc + 10
    }
}

porc = (puntaje / (porc + puntaje) * 100)
alert(`Fin del Juego \n\nObtuviste ${puntaje} puntos con el ${porc}% de respuesta correctas`)


