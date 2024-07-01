let contador = 0;

document.getElementById('miBoton').addEventListener('click', function() {
    contador++;
    this.innerText = 'Clics: ' + contador;
});
