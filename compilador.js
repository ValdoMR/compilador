var palabras_reservadas = [
    'if',
    'while',
    'return',
    'else',
    'int',
    'float'
];

var operadores_logicos = [
    '<',
    '>',
    '!=',
    '==',
    '>=',
    '<=',
    '||',
    '&&',
    '!',
    '='
];

var operadores_matematicos = [
    '-',
    '+',
    '*',
    '/'
];

var parentesis = [
    '(',
    ')'
];

var llave = [
    '{',
    '}'
];

var fin_cadena = [
    ';'
];

var identificador = /^[_a-zA-Z][_a-zA-Z0-9]*$/g;

var entero = /^-?[0-9]+$/g;

var flotante = /^-?[0-9]+(\.[0-9]+)?$/g;

$(document).ready(function() {
    $('#compilar').click(function() {
        var codigo = $('#codigo').val().trim();
        var code_array = codigo.split(' ');
        for (var i = 0; i < code_array.length; i++) {
            recursivo(code_array[i]);
        }
    });

    var hacerMatch = function(cadena) {
        if (cadena.includes(';') && cadena.length == 1) {
            return ['Punto y coma', cadena];
        } else if (palabras_reservadas.includes(cadena)) {
            return ['Palabra reservada', cadena];
        } else if (operadores_logicos.includes(cadena)) {
            return ['Operador logico', cadena];
        } else if (operadores_matematicos.includes(cadena)) {
            return ['Operador matematico', cadena];
        } else if (parentesis.includes(cadena)) {
            return ['Parentesis', cadena];
        } else if (llave.includes(cadena)) {
            return ['Llave', cadena];
        } else if (cadena.match(identificador)) {
            return ['Identificador', cadena];
        } else if (cadena.match(entero)) {
            return ['Numero entero', cadena];
        } else if (cadena.match(flotante)) {
            return ['Numero flotante', cadena];
        }
    }

    var recursivo = function(nueva_cadena) {
        var cadena = '';
        var imprimir = '';
        var tipo = null;
        var tipo2 = null;
        nueva_cadena = nueva_cadena.replace(/\n/g, '');
        if (!nueva_cadena) {
            return;
        }
        for (var j = 0; j < nueva_cadena.length; j++) {
            cadena += nueva_cadena[j];
            if (cadena[j] == '.') {
                continue;
            }
            tipo = hacerMatch(cadena);
            if (!tipo) {
                tipo = hacerMatch(imprimir);
                console.log(tipo);
                recursivo(nueva_cadena.slice(j, nueva_cadena.length));
                return;
            }
            if (tipo[0] == 'Palabra reservada' && nueva_cadena[j + 1]) {
                tipo2 = hacerMatch(nueva_cadena[j + 1]);
                if (tipo2 && (tipo2[0] != 'Identificador' && tipo2[0] != 'Numero entero')) {
                    console.log(tipo);
                    recursivo(nueva_cadena.slice(j + 1, nueva_cadena.length));
                    return;
                }
            } else if (tipo) {
                imprimir = cadena;
            } else {
                tipo = hacerMatch(imprimir);
                console.log(tipo);
                recursivo(cadena.slice(j, cadena.length));
                return;
            }
        }
        if (tipo) {
            console.log(tipo);
        }
    }
});