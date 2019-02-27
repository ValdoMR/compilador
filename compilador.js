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

var adicion_reduccion = [
    '-',
    '+'
];

var mult_dividir = [
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

var tipos = [];

var pila = [];
pila.push('$');
pila.push(0);

var tabla_lr = [
    [2, 0, 0, 1],
    [0, 0, -1, 0],
    [0, 3, -3, 0],
    [2, 0, 0, 4],
    [0, 0, -2, 0]
];

var valores = {
    'id': 0,
    '+-': 1,
    'fin_entrada': 2
};

var reglas = {
    '-2': { 'nombre': 'E', 'columna': 3, 'cantidad': 6 },
    '-3': { 'nombre': 'E', 'columna': 3, 'cantidad': 2 }
};

$(document).ready(function() {
    $('#compilar').click(function() {
        var codigo = $('#codigo').val().trim();
        codigo = codigo.replace(/ /g, '').replace(/\n/g, '');
        tipos = [];
        recursivo(codigo);
    });

    var hacerMatch = function(cadena) {
        if (cadena.includes(';') && cadena.length == 1) {
            return ['fin_cadena', cadena];
        } else if (palabras_reservadas.includes(cadena)) {
            return ['reservada', cadena];
        } else if (operadores_logicos.includes(cadena)) {
            return ['logico', cadena];
        } else if (adicion_reduccion.includes(cadena)) {
            return ['+-', cadena];
        } else if (mult_dividir.includes(cadena)) {
            return ['*/', cadena];
        } else if (parentesis.includes(cadena)) {
            return ['parentesis', cadena];
        } else if (llave.includes(cadena)) {
            return ['llave', cadena];
        } else if (cadena.match(identificador)) {
            return ['id', cadena];
        } else if (cadena.match(entero)) {
            return ['entero', cadena];
        } else if (cadena.match(flotante)) {
            return ['flotante', cadena];
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
                // console.log(tipo);
                tipos.push(tipo);
                recursivo(nueva_cadena.slice(j, nueva_cadena.length));
                return;
            }
            if (tipo[0] == 'Palabra reservada' && nueva_cadena[j + 1]) {
                tipo2 = hacerMatch(nueva_cadena[j + 1]);
                if (tipo2 && (tipo2[0] != 'Identificador' && tipo2[0] != 'Numero entero')) {
                    // console.log(tipo);
                    tipos.push(tipo);
                    recursivo(nueva_cadena.slice(j + 1, nueva_cadena.length));
                    return;
                }
            } else if (tipo) {
                imprimir = cadena;
            } else {
                tipo = hacerMatch(imprimir);
                // console.log(tipo);
                tipos.push(tipo);
                recursivo(cadena.slice(j, cadena.length));
                return;
            }
        }
        if (tipo) {
            // console.log(tipo);
            tipos.push(tipo);
            sintactico(tipos);
            return;
        }
    }

    var sintactico = function(tipos) {
        tipos.push(['fin_entrada', '$']);
        pila = [];
        pila.push('$');
        pila.push(0);
        let columna;
        let fila;
        let lr;
        let i = 0;
        let termino = false;
        while (!termino) {
            columna = valores[tipos[i][0]];
            fila = pila[pila.length - 1];
            lr = tabla_lr[fila][columna];

            if (lr > 0) {
                pila.push(tipos[i][1]);
                pila.push(lr);
            } else if (lr < 0) {
                if (lr == -1) {
                    console.log('Regla valida');
                    termino = true;
                    break;
                }
                pila = pila.slice(0, pila.length - reglas[lr].cantidad);

                columna = reglas[lr].columna;
                fila = pila[pila.length - 1];

                pila.push(lr);

                lr = tabla_lr[fila][columna];

                pila.push(lr);
            } else {
                console.log('Regla invalida');
                termino = true;
            }

            if (tipos.length - 1 > i) {
                i++;
            }
        }
    }
});