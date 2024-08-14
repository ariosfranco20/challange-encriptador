// Esta función limpia el placeholder del textarea cuando el usuario hace clic en él.
function clearPlaceholder(element) {
    if (element.placeholder === "Ingrese el texto aquí...") {
        element.placeholder = "";
    }
}

// Esta función encripta el texto del textarea de entrada según las reglas especificadas.
function encryptText() {
    const inputText = document.getElementById('inputText').value.toLowerCase(); // Obtiene el valor del textarea de entrada.
    const encryptedText = inputText
        .replace(/e/g, "enter") // Reemplaza todas las "e" por "enter".
        .replace(/i/g, "imes")  // Reemplaza todas las "i" por "imes".
        .replace(/a/g, "ai")    // Reemplaza todas las "a" por "ai".
        .replace(/o/g, "ober")  // Reemplaza todas las "o" por "ober".
        .replace(/u/g, "ufat"); // Reemplaza todas las "u" por "ufat".
    document.getElementById('inputText').value = ''; // Limpia el textarea de entrada.
    showOutput(encryptedText); // Muestra el texto encriptado en el área de salida.
}

// Esta función desencripta el texto del textarea de entrada según las reglas especificadas.
function decryptText() {
    const inputText = document.getElementById('inputText').value.toLowerCase(); // Obtiene el valor del textarea de entrada.
    const decryptedText = inputText
        .replace(/enter/g, "e") // Reemplaza todas las "enter" por "e".
        .replace(/imes/g, "i")  // Reemplaza todas las "imes" por "i".
        .replace(/ai/g, "a")    // Reemplaza todas las "ai" por "a".
        .replace(/ober/g, "o")  // Reemplaza todas las "ober" por "o".
        .replace(/ufat/g, "u"); // Reemplaza todas las "ufat" por "u".
    document.getElementById('inputText').value = ''; // Limpia el textarea de entrada.
    showOutput(decryptedText); // Muestra el texto desencriptado en el área de salida.
}

// Esta función muestra el texto encriptado o desencriptado en el área de salida.
function showOutput(text) {
    document.querySelector('.image-container').style.display = 'none'; // Oculta la imagen y el texto inicial.
    const outputText = document.getElementById('outputText');
    outputText.value = text; // Establece el valor del textarea de salida.
    outputText.style.display = 'block'; // Muestra el textarea de salida.
    document.querySelector('.right button').style.display = 'block'; // Muestra el botón "Copiar".
}

// Esta función copia el texto del área de salida al portapapeles.
function copyText() {
    const outputText = document.getElementById('outputText');
    outputText.select(); // Selecciona el texto en el textarea de salida.
    document.execCommand('copy'); // Copia el texto seleccionado al portapapeles.
}