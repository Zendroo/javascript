/* Atividades 01
function num(primeiro, segundo) {
    if (primeiro >= segundo)
    return primeiro
    else if (primeiro < segundo)
    return ""
}
console.log(num(8, 5))
*/

/* Atividades 02
function idade(idade){
    if (idade < 0){
    return "error"
}
    return idade*365
}
console.log(idade(17))
*/

/* Atividades 03
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
*/

/* atividade 04
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
*/

/* atividade 05
function multiplicar(num1, num2){
    let n2 = 0;
    for (let num = 0; num < num1; num++){
        n2 = n2 + num2;
    }
    return n2
}
console.log(multiplicar(5,9));
*/

/* atividade 06
function elementos(e1, e2){
    let array = [];

    for (let s = 0; s < e2; s++){
        array.push(e1)
    }
    return array
}
console.log(elementos("Juan", 8))
*/

/* atividade 07
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
*/

/* atividade 08
function somatoria(n1) {
    let numeros = 0
    for (let n = 0; n < n1.length; n++){
        numeros += n1[n];
    }
    return numeros;
}
console.log(somatoria([9, 4, 1, 6]))
*/

/* atividade 09
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
*/

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
