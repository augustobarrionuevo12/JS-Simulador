//  ACA DEFINO LAS PREGUNTAS Y SUS RESPUESTAS
const preguntas = [
    {
        pregunta: "¿Cuál es la capital de Francia?",
        respuestas: ["Madrid", "Paris", "Londres", "Roma"],
        respuestaCorrecta: "París"
    },
    {
        pregunta: "¿Quién es el actual número 10 de la Selección Argentina (solo apellido)?",
        respuestas: ["Messi", "Aguero", "Di María", "Paredes"],
        respuestaCorrecta: "Messi"
    },
    {
        pregunta: "¿Cuál es el planeta más grande del sistema solar?",
        respuestas: ["Marte", "Júpiter", "Venus", "Saturno"],
        respuestaCorrecta: "Júpiter"
    }
];

// FUNCION PARA MOSTRAR LA PREGUNTA AL USUARIO Y OBTENER UNA RESPUESTA
function mostrarPregunta(pregunta) {
    return prompt(pregunta);
}

// VALIDAR LA RESPUESTA
function validarRespuesta(respuesta, respuestaCorrecta) {
    // Convertimos ambas respuestas a minúsculas y eliminamos los acentos
    const respuestaFormateada = respuesta.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const respuestaCorrectaFormateada = respuestaCorrecta.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return respuestaFormateada === respuestaCorrectaFormateada;
}

// FUNCION PARA INICIAR EL JUEGO
function jugar() {
    let puntaje = 0;

    for (let i = 0; i < preguntas.length; i++) {
        const respuestaUsuario = mostrarPregunta(preguntas[i].pregunta);

        const esCorrecta = validarRespuesta(respuestaUsuario, preguntas[i].respuestaCorrecta);

        if (esCorrecta) {
            alert("¡Respuesta correcta!");
            puntaje++;
        } else {
            alert("Respuesta incorrecta. La respuesta correcta es: " + preguntas[i].respuestaCorrecta);
        }
    }

    // PUNTUACION FINAL
    alert("Juego terminado. Tu puntaje es: " + puntaje + " de " + preguntas.length);
}

document.getElementById("btnIniciarJuego").addEventListener("click", function() {
    
    jugar();
});
