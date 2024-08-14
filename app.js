let llaves = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ay',
    'o': 'ober',
    'u': 'ufat'
}

function encriptar(string) {
    let arrayString = string.split('');
    let arraySalida = [];
    let letra = '';
    arrayString.forEach(element => {
        letra = (llaves[element] != undefined) ? llaves[element] : element;
        arraySalida.push(letra);
    });
    return arraySalida.join('');

}


function desencriptar(string) {
    let valores = Object.values(llaves);
    valores.forEach(element => {
        string = string.replace(element, Object.entries(llaves).find(([clave, valor]) => valor === element)?.[0])
    });
    return string;
}

function boton_1() {
    let input = document.getElementById('texto_inicial').value;
    let resultado = encriptar(input);
    document.getElementById('resultados').textContent = resultado;
    document.getElementById('contenedor_1').style.display = 'none';
    document.getElementById('contenedor_res').style.display = 'block';
}

function boton_2() {
    let input = document.getElementById('texto_inicial').value;
    let resultado = desencriptar(input);
    document.getElementById('resultados').textContent = resultado;
    document.getElementById('contenedor_1').style.display = 'none';
    document.getElementById('contenedor_res').style.display = 'block';
}

function copiar() {
    let texto = document.getElementById('resultados').textContent
    document.getElementById('texto_inicial').value = texto;
}