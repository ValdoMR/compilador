var palabras_reservadas = [
    'if',
    'while',
    'return',
    'else',
    'int',
    'float'
];

var operadores_relacionales = [
    '<',
    '>',
    '!=',
    '==',
    '>=',
    '<='
];

var operadores_logicos = [
    '||',
    '&&',
    '!'
];

var operadores_matematicos = [
    '*',
    '/',
    '-',
    '+',
    '='
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

var coma = [
    ','
];

var fin_entrada = [
    '$'
];

var identificador = /^[_a-zA-Z][_a-zA-Z0-9]*$/g;

var entero = /^-?[0-9]+$/g;

var flotante = /^-?[0-9]+(\.[0-9]+)?$/g;

var tipos = [];

var pila = [];
pila.push('$');
pila.push(0);

var arbol = [];

var tabla_lr = [
    [0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -3, 1, 2, 3, 4, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -3, 0, 7, 3, 4, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, -5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, -6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -8, 10, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [13, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [-7, 0, 0, 0, -7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -7, 0, -7, -7, -7, 0, -7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -8, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [18, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 22, 0, -13, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, -10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [27, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -16, 0, 28, 29, 30, 0, 0, 0, 0, 0, 25, 0, 0, 0, 0, 0, 23, 24, 0, 26, 0, 0, 0, 0, 0, 0, 31, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [27, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -16, 0, 28, 29, 30, 0, 0, 0, 0, 0, 25, 0, 0, 0, 0, 0, 34, 24, 0, 26, 0, 0, 0, 0, 0, 0, 31, 0, 0],
    [-18, 0, 0, 0, -18, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -18, 0, -18, -18, -18, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [-19, 0, 0, 0, -19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -19, 0, -19, -19, -19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 0, 0, 0, 35, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 37, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 38, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [46, 47, 48, 49, 0, 42, 0, 0, 0, 0, 43, 0, -30, 0, 41, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 39, 0, 0, 44, 45, 0, 40],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [51, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, -15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [46, 47, 48, 49, 0, 42, 0, 0, 0, 0, 43, 0, 0, 0, 41, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 44, 45, 0, 52],
    [46, 47, 48, 49, 0, 42, 0, 0, 0, 0, 43, 0, 0, 0, 41, -32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 53, 0, 44, 45, 0, 54],
    [46, 47, 48, 49, 0, 42, 0, 0, 0, 0, 43, 0, 0, 0, 41, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 44, 45, 0, 55],
    [46, 47, 48, 49, 0, 42, 0, 0, 0, 0, 43, 0, 0, 0, 41, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 44, 45, 0, 56],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 57, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 59, 58, 60, 63, 62, 0, 61, -31, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [46, 47, 48, 49, 0, 42, 0, 0, 0, 0, 43, 0, 0, 0, 41, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 44, 45, 0, 64],
    [46, 47, 48, 49, 0, 42, 0, 0, 0, 0, 43, 0, 0, 0, 41, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 44, 45, 0, 65],
    [46, 47, 48, 49, 0, 42, 0, 0, 0, 0, 43, 0, 0, 0, 41, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 44, 45, 0, 66],
    [0, 0, 0, 0, 0, -53, -53, -53, -53, -53, 0, -53, -53, -53, 0, -53, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, -36, -36, -36, -36, -36, 0, -36, -36, -36, 0, -36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, -37, -37, -37, -37, -37, 0, -37, -37, -37, 36, -37, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, -38, -38, -38, -38, -38, 0, -38, -38, -38, 0, -38, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, -39, -39, -39, -39, -39, 0, -39, -39, -39, 0, -39, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, -40, -40, -40, -40, -40, 0, -40, -40, -40, 0, -40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [-26, 0, 0, 0, -26, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -26, 0, -26, -26, -26, -26, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 22, 0, -13, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 59, 58, 60, 63, 62, 0, 61, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 69, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 59, 58, 60, 63, 62, 0, 61, 0, 71, 0, -34, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 70, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 59, 58, 60, 63, 62, 0, 61, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 59, 58, 60, 63, 62, 0, 61, 0, 0, 0, 73, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [-25, 0, 0, 0, -25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -25, 0, -25, -25, -25, -25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [46, 47, 48, 49, 0, 42, 0, 0, 0, 0, 43, 0, 0, 0, 41, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 44, 45, 0, 74],
    [46, 47, 48, 49, 0, 42, 0, 0, 0, 0, 43, 0, 0, 0, 41, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 44, 45, 0, 75],
    [46, 47, 48, 49, 0, 42, 0, 0, 0, 0, 43, 0, 0, 0, 41, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 44, 45, 0, 76],
    [46, 47, 48, 49, 0, 42, 0, 0, 0, 0, 43, 0, 0, 0, 41, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 44, 45, 0, 77],
    [46, 47, 48, 49, 0, 42, 0, 0, 0, 0, 43, 0, 0, 0, 41, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 44, 45, 0, 78],
    [46, 47, 48, 49, 0, 42, 0, 0, 0, 0, 43, 0, 0, 0, 41, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 44, 45, 0, 79],
    [0, 0, 0, 0, 0, 59, 58, 60, 63, 62, 0, 61, 0, 0, 0, 80, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, -45, -45, -45, -45, -45, 0, -45, -45, -45, 0, -45, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, -46, -46, -46, -46, -46, 0, -46, -46, -46, 0, -46, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [-22, 0, 0, 0, -22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -22, 0, -22, -22, -22, -22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, -41, -41, -41, -41, -41, 0, -41, -41, -41, 0, -41, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [46, 47, 48, 49, 0, 42, 0, 0, 0, 0, 43, 0, 0, 0, 41, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 44, 45, 0, 81],
    [27, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 85, 0, 0, 28, 29, 30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 0, 84, 0, 0, 0, 0, 31, 82, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 85, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, -47, -47, -47, -47, -47, 0, -47, -47, -47, 0, -47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, -48, 58, -48, -48, -48, 0, -48, -48, -48, 0, -48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 59, 58, -49, -49, -49, 0, -49, -49, -49, 0, -49, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 59, 58, 60, -50, -50, 0, -50, -50, -50, 0, -50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 59, 58, 60, -51, -51, 0, 61, -51, -51, 0, -51, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 59, 58, 60, -52, 62, 0, 61, -52, -52, 0, -52, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, -44, -44, -44, -44, -44, 0, -44, -44, -44, 0, -44, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 59, 58, 60, 63, 62, 0, 61, 0, 71, 0, -34, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 87, 0, 0, 0, 0],
    [-27, 0, 0, 0, -27, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -27, 0, -27, -27, -27, 89, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 88, 0, 0, 0, 0, 0, 0, 0, 0],
    [-42, 0, 0, 0, -42, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -42, 0, -42, -42, -42, -42, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [-43, 0, 0, 0, -43, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -43, 0, -43, -43, -43, -43, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [27, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -20, 0, 28, 29, 30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 91, 0, 0, 0, 0, 0, 0, 31, 0, 0],
    [-24, 0, 0, 0, -24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -24, 0, -24, -24, -24, -24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -35, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [-23, 0, 0, 0, -23, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -23, 0, -23, -23, -23, -23, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [27, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 85, 0, 0, 28, 29, 30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 0, 84, 0, 0, 0, 0, 31, 92, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 93, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [27, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -20, 0, 28, 29, 30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 94, 91, 0, 0, 0, 0, 0, 0, 31, 0, 0],
    [-28, 0, 0, 0, -28, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -28, 0, -28, -28, -28, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [-29, 0, 0, 0, -29, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -29, 0, -29, -29, -29, -29, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

var valores = {
    'id': 0,
    'entero': 1,
    'real': 2,
    'cadena': 3,
    'int': 4,
    'float': 4,
    'plus': 5,
    'mult': 6,
    'opRelacional': 7,
    'opOr': 8,
    'opAnd': 9,
    'opNot': 10,
    'opIgualdad': 11,
    'fin_cadena': 12,
    'coma': 13,
    'parentesisIzq': 14,
    'parentesisDer': 15,
    'llaveIzq': 16,
    'llaveDer': 17,
    'igual': 18,
    'if': 19,
    'while': 20,
    'return': 21,
    'else': 22,
    'fin_entrada': 23
};

var reglas = {
    '-2': { 'regla': 'R1', 'nombre': 'programa', 'columna': 24, 'cantidad': 2 }, //R1
    '-3': { 'regla': 'R2', 'nombre': 'definiciones', 'columna': 25, 'cantidad': 0 }, //R2
    '-4': { 'regla': 'R3', 'nombre': 'definiciones', 'columna': 25, 'cantidad': 4 }, //R3
    '-5': { 'regla': 'R4', 'nombre': 'definicion', 'columna': 26, 'cantidad': 2 }, //R4
    '-6': { 'regla': 'R5', 'nombre': 'definicion', 'columna': 26, 'cantidad': 2 }, //R5
    '-7': { 'regla': 'R6', 'nombre': 'DefVar', 'columna': 27, 'cantidad': 8 }, //R6
    '-8': { 'regla': 'R7', 'nombre': 'ListaVar', 'columna': 28, 'cantidad': 0 }, //R7
    '-9': { 'regla': 'R8', 'nombre': 'ListaVar', 'columna': 28, 'cantidad': 6 }, //R8
    '-10': { 'regla': 'R9', 'nombre': 'DefFunc', 'columna': 29, 'cantidad': 12 }, //R9
    '-11': { 'regla': 'R10', 'nombre': 'Parametros', 'columna': 30, 'cantidad': 0 }, //R10
    '-12': { 'regla': 'R11', 'nombre': 'Parametros', 'columna': 30, 'cantidad': 6 }, //R11
    '-13': { 'regla': 'R12', 'nombre': 'ListaParam', 'columna': 31, 'cantidad': 0 }, //R12
    '-14': { 'regla': 'R13', 'nombre': 'ListaParam', 'columna': 31, 'cantidad': 8 }, //R13
    '-15': { 'regla': 'R14', 'nombre': 'BloqFunc', 'columna': 32, 'cantidad': 6 }, //R14
    '-16': { 'regla': 'R15', 'nombre': 'DefLocales', 'columna': 33, 'cantidad': 0 }, //R15
    '-17': { 'regla': 'R16', 'nombre': 'DefLocales', 'columna': 33, 'cantidad': 4 }, //R16
    '-18': { 'regla': 'R17', 'nombre': 'DefLocal', 'columna': 34, 'cantidad': 2 }, //R17
    '-19': { 'regla': 'R18', 'nombre': 'DefLocal', 'columna': 34, 'cantidad': 2 }, //R18
    '-20': { 'regla': 'R19', 'nombre': 'Sentencias', 'columna': 35, 'cantidad': 0 }, //R19
    '-21': { 'regla': 'R20', 'nombre': 'Sentencias', 'columna': 35, 'cantidad': 4 }, //R20
    '-22': { 'regla': 'R21', 'nombre': 'Sentencia', 'columna': 36, 'cantidad': 8 }, //R21
    '-23': { 'regla': 'R22', 'nombre': 'Sentencia', 'columna': 36, 'cantidad': 12 }, //R22
    '-24': { 'regla': 'R23', 'nombre': 'Sentencia', 'columna': 36, 'cantidad': 10 }, //R23
    '-25': { 'regla': 'R24', 'nombre': 'Sentencia', 'columna': 36, 'cantidad': 6 }, //R24
    '-26': { 'regla': 'R25', 'nombre': 'Sentencia', 'columna': 36, 'cantidad': 4 }, //R25
    '-27': { 'regla': 'R26', 'nombre': 'Otro', 'columna': 37, 'cantidad': 0 }, //R26
    '-28': { 'regla': 'R27', 'nombre': 'Otro', 'columna': 37, 'cantidad': 4 }, //R27
    '-29': { 'regla': 'R28', 'nombre': 'Bloque', 'columna': 38, 'cantidad': 6 }, //R28
    '-30': { 'regla': 'R29', 'nombre': 'ValorRegresa', 'columna': 39, 'cantidad': 0 }, //R29
    '-31': { 'regla': 'R30', 'nombre': 'ValorRegresa', 'columna': 39, 'cantidad': 2 }, //R30
    '-32': { 'regla': 'R31', 'nombre': 'Argumentos', 'columna': 40, 'cantidad': 0 }, //R31
    '-33': { 'regla': 'R32', 'nombre': 'Argumentos', 'columna': 40, 'cantidad': 4 }, //R32
    '-34': { 'regla': 'R33', 'nombre': 'ListaArgumentos', 'columna': 41, 'cantidad': 0 }, //R33
    '-35': { 'regla': 'R34', 'nombre': 'ListaArgumentos', 'columna': 41, 'cantidad': 6 }, //R34
    '-36': { 'regla': 'R35', 'nombre': 'Termino', 'columna': 42, 'cantidad': 2 }, //R35
    '-37': { 'regla': 'R36', 'nombre': 'Termino', 'columna': 42, 'cantidad': 2 }, //R36
    '-38': { 'regla': 'R37', 'nombre': 'Termino', 'columna': 42, 'cantidad': 2 }, //R37
    '-39': { 'regla': 'R38', 'nombre': 'Termino', 'columna': 42, 'cantidad': 2 }, //R38
    '-40': { 'regla': 'R39', 'nombre': 'Termino', 'columna': 42, 'cantidad': 2 }, //R39
    '-41': { 'regla': 'R40', 'nombre': 'LlamadaFunc', 'columna': 43, 'cantidad': 8 }, //R40
    '-42': { 'regla': 'R41', 'nombre': 'SentenciaBloque', 'columna': 44, 'cantidad': 2 }, //R41
    '-43': { 'regla': 'R42', 'nombre': 'SentenciaBloque', 'columna': 44, 'cantidad': 2 }, //R42
    '-44': { 'regla': 'R43', 'nombre': 'Expresion', 'columna': 45, 'cantidad': 6 }, //R43
    '-45': { 'regla': 'R44', 'nombre': 'Expresion', 'columna': 45, 'cantidad': 4 }, //R44
    '-46': { 'regla': 'R45', 'nombre': 'Expresion', 'columna': 45, 'cantidad': 4 }, //R45
    '-47': { 'regla': 'R46', 'nombre': 'Expresion', 'columna': 45, 'cantidad': 6 }, //R46
    '-48': { 'regla': 'R47', 'nombre': 'Expresion', 'columna': 45, 'cantidad': 6 }, //R47
    '-49': { 'regla': 'R48', 'nombre': 'Expresion', 'columna': 45, 'cantidad': 6 }, //R48
    '-50': { 'regla': 'R49', 'nombre': 'Expresion', 'columna': 45, 'cantidad': 6 }, //R49
    '-51': { 'regla': 'R50', 'nombre': 'Expresion', 'columna': 45, 'cantidad': 6 }, //R50
    '-52': { 'regla': 'R51', 'nombre': 'Expresion', 'columna': 45, 'cantidad': 6 }, //R51
    '-53': { 'regla': 'R52', 'nombre': 'Expresion', 'columna': 45, 'cantidad': 2 } //R52
};

var tabla_simbolos = new Object();

$(document).ready(function() {
    $('#compilar').click(function() {
        var codigo = $('#codigo').val().trim();
        codigo = codigo.replace(/ /g, '').replace(/\n/g, '');
        codigo = codigo.toLowerCase();
        tipos = [];
        arbol = [];
        recursivo(codigo);
    });

    var hacerMatch = function(cadena) {
        if (cadena.includes(';') && cadena.length == 1) {
            return ['fin_cadena', cadena];
        } else if (palabras_reservadas.includes(cadena)) {
            if (cadena == 'int') {
                return ['int', cadena];
            } else if (cadena == 'float') {
                return ['float', cadena];
            } else if (cadena == 'while') {
                return ['while', cadena];
            } else if (cadena == 'else') {
                return ['else', cadena];
            } else if (cadena == 'return') {
                return ['return', cadena];
            } else if (cadena == 'if') {
                return ['if', cadena];
            }
        } else if (operadores_relacionales.includes(cadena)) {
            if (cadena == '==') {
                return ['opIgualdad', cadena];
            }
            return ['opRelacional', cadena];
        } else if (operadores_logicos.includes(cadena)) {
            if (cadena == '||') {
                return ['opOr', cadena];
            } else if (cadena == '&&') {
                return ['opAnd', cadena];
            } else {
                return ['opNot', cadena];
            }
        } else if (operadores_matematicos.includes(cadena)) {
            if (cadena == '+' || cadena == '-') {
                return ['plus', cadena];
            } else if (cadena == '*' || cadena == '/') {
                return ['mult', cadena];
            } else {
                return ['igual', cadena];
            }
        } else if (parentesis.includes(cadena)) {
            if (cadena == '(') {
                return ['parentesisIzq', cadena];
            } else {
                return ['parentesisDer', cadena];
            }
        } else if (llave.includes(cadena)) {
            if (cadena == '{') {
                return ['llaveIzq', cadena];
            } else {
                return ['llaveDer', cadena];
            }
        } else if (coma.includes(cadena)) {
            return ['coma', cadena];
        } else if (fin_entrada.includes(cadena)) {
            return ['fin_entrada', cadena];
        } else if (cadena.match(identificador)) {
            return ['id', cadena];
        } else if (cadena.match(entero)) {
            return ['entero', cadena];
        } else if (cadena.match(flotante)) {
            return ['real', cadena];
        } else if (fin_entrada.includes(cadena)) {
            return ['fin_entrada', cadena];
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
            if ((tipo[0] == 'int' || tipo[0] == 'float' || tipo[0] == 'while' || tipo[0] == 'return' || tipo[0] == 'if' || tipo[0] == 'else') && nueva_cadena[j + 1]) {
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
        let tabla_func = [];
        let tabla_var = [];
        while (!termino) {
            // console.log(pila);
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
                if (reglas[lr].cantidad > 0) {

                    var j = reglas[lr].cantidad;
                    bandera = true;
                    var lista = [];
                    while (bandera) {
                        lista.push(pila[pila.length - j]);
                        j -= 2;
                        if (j == 0) {
                            bandera = false;
                        }
                    }
                    var r = {
                        regla: reglas[lr].regla,
                        nombre: reglas[lr].nombre,
                        lista: lista
                    }

                    arbol.push(r);
                    pila = pila.slice(0, pila.length - reglas[lr].cantidad);
                }

                // if (!arbol[reglas[lr].nombre]) {
                //     arbol[reglas[lr].nombre] = [];
                // }

                // console.log('Regla', reglas[lr].regla);
                // console.log('nombre', reglas[lr].nombre);
                // console.log('desapilar', reglas[lr].cantidad);

                columna = reglas[lr].columna;
                fila = pila[pila.length - 1];

                pila.push(reglas[lr].nombre);

                lr = tabla_lr[fila][columna];

                pila.push(lr);

                i--;
            } else {
                console.log('Regla invalida');
                termino = true;
            }

            if (tipos.length - 1 > i) {
                i++;
            }
        }

        arbol = arbol.reverse();

        console.log(arbol);
        let ambito = '#';
        let error = false;
        let mensaje = '';

        arbol.forEach(async regla => {
            if(!error){
                if(regla.regla == 'R4'){
                    ambito = '#'
                }
                if(regla.nombre == 'DefFunc'){
    
                    tabla_func.forEach(async funcs => {

                        if(funcs.id == regla.lista[1]){
                            error = true;
                            mensaje = 'La funcion '+regla.lista[1]+' ya existe';
                        }
                    });

                    if(!error){
                        ambito = '#';
                        let insert = {
                            tipo_dato: regla.lista[0],
                            id: regla.lista[1],
                            ambito: ambito
                        };
                        tabla_func.push(insert);
                        ambito = regla.lista[1];
                    }
    
                }
                else if(regla.nombre == 'DefVar' || regla.nombre == 'Parametros' || regla.nombre == 'ListaParam'){

                    tabla_var.forEach(async variable => {

                        if(variable.id == regla.lista[1] && variable.ambito == ambito){
                            error = true;
                            mensaje = 'La variable '+regla.lista[1]+' ya existe en el ambito '+ambito;
                        }
                        else if(variable.id == regla.lista[2] && variable.ambito == ambito){
                            error = true;
                            mensaje = 'La variable '+regla.lista[2]+' ya existe en el ambito '+ambito;
                        }
                    });

                    if(!error){
                        let tp = regla.lista[0];
                        let id = regla.lista[1];
                        if(regla.nombre == 'ListaParam'){
                            tp = regla.lista[1];
                            id = regla.lista[2];
                        }
                        let insert = {
                            tipo_dato: tp,
                            id: id,
                            ambito: ambito
                        };
                        tabla_var.push(insert);
                    }

                }
            }
        });

        if(error){
            console.error(mensaje);
        }
        else{
            for(let i = 0; i < arbol.length; i++){
                if(arbol[i].regla == 'R4'){
                    ambito = '#';
                }
                if(arbol[i].nombre == 'DefFunc'){
    
                    ambito = arbol[i].lista[1];
                    let funciones = tabla_func.filter(func => func.id == arbol[i].lista[1])
                    if(funciones.length > 1){
                        error = true;
                        mensaje = "La funcion "+arbol[i].lista[1]+" ya existe";
                        break;
                    }
    
                }
                if(arbol[i].nombre == 'Sentencia'){
                    if(!tabla_var.some(variable => variable.id == arbol[i].lista[0])){
                        error = true;
                        mensaje = 'La variable '+arbol[i].lista[0]+' no existe';
                        break;
                    }
                    let variable_ambito;
                    for(let j = 0; j < tabla_var.length; j++){
                        if(tabla_var[j].id == arbol[i].lista[0]){
                            variable_ambito = tabla_var[j].ambito;
                            if(variable_ambito == ambito || variable_ambito == '#'){
                                break;
                            }
                        }
                    }
                    if(ambito != variable_ambito && variable_ambito != '#'){
                        error = true;
                        mensaje = 'La variable '+arbol[i].lista[0]+' no existe';
                        break;
                    }


                }
                if(arbol[i].nombre == 'Termino'){
                    if(!tabla_var.some(variable => variable.id == arbol[i].lista[0])){
                        error = true;
                        mensaje = 'La variable '+arbol[i].lista[0]+' no existe';
                        break;
                    }
                    let variable_ambito;
                    for(let j = 0; j < tabla_var.length; j++){
                        if(tabla_var[j].id == arbol[i].lista[0]){
                            variable_ambito = tabla_var[j].ambito;
                            if(variable_ambito == ambito || variable_ambito == '#'){
                                break;
                            }
                        }
                    }
                    if(ambito != variable_ambito && variable_ambito != '#'){
                        error = true;
                        mensaje = 'La variable '+arbol[i].lista[0]+' no existe';
                        break;
                    }

                    
                }
            }

            if(error){
                console.error(mensaje);
            }
            else{
                console.log('Tabla de funciones', tabla_func);
                console.log('Tabla de variables', tabla_var);
            }
        }

    }
});