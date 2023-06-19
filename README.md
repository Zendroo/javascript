# javascript Atividades

#### 1 - Crie uma função que recebe 2 números como argumento e retorne se o primeiro é maior ou igual ao segundo.

```js
function num(primeiro, segundo) {
    if (primeiro >= segundo)
    return primeiro
    else if (primeiro < segundo)
    return ""
}
console.log(num(8, 5))
```
#### 2 - Crie uma função que receba a idade da pessoa e retorne a quantidade de dias, crie uma validação para não permitir número negativo, e quando tiver retorna uma mensagem de erro.

```js
function idade(idade){
    if (idade < 0){
    return "error"
}
    return idade*365
}
console.log(idade(17))
```
#### 3 - Crie uma função que receba número de 1 a 12 e retorne o mês correspondente,exemplo se colocar o número 2, o retorno deve ser “Fevereiro”.
```js
function mes(mes) {
    switch (mes) {
        case mes = 1:
            return "Janeiro"
            break;
            case mes = 2:
                return "Fevereiro"
                break;
                case mes = 3:
                    return "Março"
                    break;
                    case mes = 4:
                        return "Abril"
                        break;
                        case mes = 5:
                            return "Maio"
                            break;
                            case mes = 6:
                                return "Junho"
                                break;
                                case mes = 7:  
                                return "Julho"
                                break;
                                case mes = 8:                                   
                                return "Agosto"
                                break;
                                case mes = 9:                                   
                                return "Setembro"
                                break;
                                case mes = 10:                                    
                                return "Outubro"
                                break;
                                case mes = 11:                                    
                                return "Novembro"
                                break;
                                case mes = 12:                                    
                                return "Dezembro"
                                break;
                                default:                
                                return "error"
                                break;
    }
}
console.log(mes(1))
```
#### 4 - Escreva uma função que recebe um valor booleano ou numérico. Se o parâmetrofornecido for booleano, o retorno deve ser o inverso. Por exemplo, se a entrada for false, retorna true. Se o parâmetro for numérico, o retorno deve ser o número inverso. Exemplo: se fornecer 1, o retorno deve ser -1. Se o parâmetro de entrada não for de nenhum dos tipos, retorna “Booelano ou Número esperados, mas o parâmetro é do tipo (tipo do parâmetro).

```js
function contrario(humilde){
    if(typeof(humilde) == 'boolean'){
        if(humilde == false) {
            return true
        }
        return false
    }
    else
    if(typeof(humilde) == 'number'){
        contrario = contrario * (-1)
        return contrario
    }
    else{
        return "tente novamente"
    }
}
console.log(contrario(false))
```
#### 5 - Escreva uma função que recebe dois números inteiros não negativos e realize a multiplicação deles. Porém não pode utilizar o operador de multiplicação.

```js
function multiplicar(num1, num2){
    let n2 = 0;
    for (let num = 0; num < num1; num++){
        n2 = n2 + num2;
    }
    return n2
}
console.log(multiplicar(5,9));
```

#### 6 - Escreva uma função que recebe 2 parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto o segundo será o número de vezes que haverá repetição. Um array serpa retornado. Exemplo: repetir(“teste”, 2 ) // retorna [“teste”, “teste”] repetir( 4, 3 ) // retorna[4 ,4, 4]

```js
function elementos(e1, e2){
    let array = [];

    for (let s = 0; s < e2; s++){
        array.push(e1)
    }
    return array
}
console.log(elementos("Juan", 8))
```

#### 7 - Crie uma função que recebe um array de elementos e retorne um array somente com os números presentes no array recebido como parâmetro. Exemplo: filtro([“Js”, 2, “hoje”, 4, 5, 7, “teste”] // retorno [2,4,5,7] filtro([“teste”,”tentativa”] // retorno []

```js
function numerolegalsomado(num) {
    let array = []
    for (let n = 0; n < num.length; n++){
        if (typeof num[n] == 'number') {
            array.push(num[n])
        }
    }
    return array
}
console.log(JSON.stringify(numerolegalsomado(["Gabriel", 7, "Ronaldoooo", 10, 2])))
```

#### 8 - Escreva uma função que recebe um array de números e retorna a soma de todos os números desse array.

```js
function somatoria(n1) {
    let numeros = 0
    for (let n = 0; n < n1.length; n++){
        numeros += n1[n];
    }
    return numeros;
}
console.log(somatoria([9, 4, 1, 6]))
```

#### 9 - Crie uma função que recebe um array de números e retorna o segundo maior número presente nesse array.

```js
function compara(n1) {
    if (n1.length < 2){
        return 'Números insuficientes'
    }
    let maior = Math.max(n1[0], n1[1]);
    let segundo = Math.min(n1[0], n1[1]);
    for (let i = 2; i < n1.length; i++) {
        if (n1[i] > maior) {
            segundo = maior;
            maior = n1[i];
        } else if (n1[i] > segundo) {
            segundo = n1[i];
        }
    }
return segundo;
}
console.log(compara([5, 1, 9, 7]))
```
#### 10 - Crie uma função que recebe um objeto com os estudantes e suas notas. as notas de cada estudante estarão num array. Calcule a média da nota de cada aluno e retorne um objeto com os atributos nome e média, que indica o aluno que tem o melhor desempenho nas notas. Exemplo: melhoresAlunos({ Augusto:[8, 7.6, 8.9, 6] // media 7.625 Mariana:[9, 6.6, 7.9, 8] // media 7.875 Carla:[7, 7, 8, 9] // media 7.75}) // retorno {nome: “Mariana”, media: 7.875}

```js
function melhoresAlunos(alunos){
    let aluno1 = null
    let media2 = 0
    for (const aluno in alunos){
        const nota = alunos[aluno];
        const media1 = nota.reduce((total, nota) => total + nota, 0) / nota.length
        if (media1 > media2) {
            aluno1 = aluno
            media2 = media1
        }
    }
    return {aluno : aluno1 , media : media2 }
}
const total = melhoresAlunos({
    Gabriel: [10, 10, 10, 10],
    Nicolas: [7.2, 8, 5, 3.2],
    Leandro: [9.6, 6.3, 10, 8.7],
    Alexandre: [0, 0, 0, 1]
})
console.log(total)
```
