// COMENTÁRIOS:
// ÚNICA LINHA
/*
    Comentar
    múltiplas
    linhas
*/


// ADICIONAR JS A UMA PÁGINA HTML:
// Método externo
// <script scr="meuScript.js"></script>

// Método interno
/* <script type="text/javascript">
    // Código interno ...
</script> */


// VARIÁVEIS:
// Váriavel mutável e de escopo global
var variavel1;

// Váriavel mutável
let variavel2;

// Váriável imutável
const variavel3 = "teste";


// TIPOS DE DADOS EM JS:
// Tipos primitivos
// String
    let string1 = "string";
    let string2 = 'string';
// Number
    let numero = 13;
// Boolean
    let bool = false;
// Undefined e Null
    // Undefined é quando uma variável foi declarada, mas ainda náo foi inicializada
    var naoInicializado;
    // Null representa a ausência de valor
    var valorNulo = null;

// Tipos de referência
// Objects
    let pessoa = {
        nome: "pedro",
        idade: 18
    };
// Array 
    let array = ['pedro', 18];
// Function
    function nomeDaFuncao(parametro) {
        return parametro;
    }


// OPERADORES BÁSICOS:
let adicao = 4 + 2;
let subtracao = 4 - 2;
let multiplicacao = 4 * 2;
let divisao = 4 / 2;
let modulo = 4 % 2; // Resto da divisão
let incremento = numero++; // + 1
let decremento = numero--; // - 1


// OPERADORES DE COMPARAÇÃO:
// == Compara valor
let comparando1 = (1 == "1"); // true
// === Compara valor e tipo
let comparando2 = (1 === "1"); // false
// != Diferente valor
let comparando3 = (1 != 3); // true
// !== Diferente valor ou tipo
let comparando4 = (1 !== "1"); // true
// > Maior que
let comparando5 = (1 > 3); // false
// >= Maior ou igual que
let comparando6 = (1 >= 1); // true
// < Menor que
let comparando7 = (3 < 1); // false
// <= Menor ou igual que
let comparando8 = (3 <= 3); // true


// OPERADORES LÓGICOS:
// && (AND)
let umEOutro = (true && false) // false
// || (OR)
let umOuOutro = (true || false) // true
// ! (NOT)
let naoEIgual = (!true) // false


// IF E ELSE:
let condicao = true;
if (condicao) {
    // Passa pelo corpo caso a condição seja verdadeira
} else if (condicao2) {
    // Caso a condição anterior não seja verdadeira testa o else if
} else {
    // Caso nenhuma condição seja verdadeira passa pelo corpo do else
}


// LOOPS:
// for (contador; condição que termina o loop; altera o contador a cada loop) {}
for (let i = 0; i < 5; i++) {
    // Vai incrementar número 5 vezes
    numero++
}
// while (condição) {}: Continua o loop até que a condição se torne falsa
while (numero < 20) {
    numero++;
}
// Do { } while (condição): Mesma ideia que o while, mas passa pelo corpo antes de testar a condição
do {
    numero++;
} while (numero < 20)
// Break e Continue
    // break: força o encerramento do loop
    // continue: pula o loop atual baseado em alguma condição


// CONVERSÃO DE VALORES:
// Converter para string
console.log(String(null)); // String() converte até null e undefined
console.log(numero.toString()); // toString() não converte null ou undefined
// Converter para int
console.log(parseInt("10.5"));
// Converter para float
console.log(parseFloat("10.5"));
// Converte para um número
console.log(Number(true));


// TEMPLATE LITERALS:
// ` ` delimita a string
// ${} adiciona o valor de uma variável
console.log(`Dentro da string: ${numero}`);


// TRATAMENTO DE ERROS:
try {
    // Tenta realizar o bloco de código
    const resultado = 100;
    console.log(resultado);
    resultado = 200;
} catch (error) {
    // Caso um erro seja encontrado ele realiza esse bloco
    console.log("Um erro ocorreu: ", error.message);
} finally {
    // Independente de um erro ser encontrado realiza esse bloco
    console.log("Executa independente do erro");
}
