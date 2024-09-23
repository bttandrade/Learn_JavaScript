let string = "Testanto";

// charAt(), retorna o char na posição definida
console.log(string.charAt(0));

// charCodeAt(), retorna o Unicode do char na posição definida
console.log(string.charCodeAt(0));

// concat(), junta duas strings
console.log(string.concat('Concat'));

// indexOf(), retorna a primeira posição de um char
console.log(string.indexOf("t"));

// lastIndexOf(), retorna a última posição de um char
console.log(string.lastIndexOf("t"));

// match(), compara o parâmetro como um padrão encontrado na string
console.log(string.match("test"));

// replace(), substitui o primeiro parâmetro pelo segundo dentro da string
console.log(string.replace("nto", "do"));

// search(), procura um texto o retorna sua posição
console.log(string.search("ant"));

// slice(), mantém a string pela posição definida nos dois parâmetros e remove o resto
console.log(string.slice(0, 4));

// split(), separa e retorna a string tranformada em um array a partir do parâmetro
console.log(string.split(""));

// substring(), extrai um número de caracteres definido por dois índices
console.log(string.substring(1, 4));

// toLowerCase(), transforma todos os caracteres em minúsculas
console.log(string.toLowerCase());

// toUpperCase(), transforma todos os caracteres em maiúsculas
console.log(string.toUpperCase());

// valueOf(), retorna o valor primitivo de uma string
console.log(string.valueOf());