let num1 = 21;
let num2 = 11;
let num3 = 22;
let num4 = 12;
let num5 = 15;
let num6 = 15;
let num7 = 22;
let num8 = 21;
let num9 = 11;
let num10 = 12;

let encontrados = 0;
let valor1;
let posicion1;
let copy1;
let copyp1;
let copyp11;
let copyp12;
let valor2;
let posicion2;
let copy2;
let copyp2;
let copyp21;
let copyp22;
let continuar = true;

alert('***JUEGO DE MEMORIA***');
let userName = prompt ('Ingresa tu nombre:');
alert('Bienvenido/a '+ userName);

while (encontrados < 5 ){
/////* Para tomar el primer valor a comoparar */////
    do{
        posicion1 = prompt ('Elige 1era posicion a descubrir: \n #1  #2  #3  #4  #5 \n #6  #7  #8  #9  #10 ');
        switch (posicion1){
            case '1':
                if (copy1 != posicion1 && copy2 != posicion1 && copyp1 != posicion1 && copyp2 != posicion1 && copyp11 != posicion1 && copyp12 !=posicion1 && copyp21 != posicion1 && copyp22 != posicion1){
                    valor1=num1;
                    alert('Valor en la posicion #1: '+ valor1);
                    continuar = false;
                }else{
                    alert('Esta posicion ya se ha seleccionado antes, elige otra.');
                    continuar= true;
                }
                break;
            case '2':
                if (copy1 != posicion1 && copy2 != posicion1 && copyp1 != posicion1 && copyp2 != posicion1 && copyp11 != posicion1 && copyp12 !=posicion1 && copyp21 != posicion1 && copyp22 != posicion1){
                    valor1=num2;
                    alert('Valor en la posicion #2: '+ valor1);
                    continuar = false;
                }else{
                    alert('Esta posicion ya se ha seleccionado antes, elige otra.');
                    continuar= true;
                }
                break;
            case '3':
                if (copy1 != posicion1 && copy2 != posicion1 && copyp1 != posicion1 && copyp2 != posicion1 && copyp11 != posicion1 && copyp12 !=posicion1 && copyp21 != posicion1 && copyp22 != posicion1){
                    valor1=num3;
                    alert('Valor en la posicion #3: '+ valor1);
                    continuar = false;
                }else{
                    alert('Esta posicion ya se ha seleccionado antes, elige otra.');
                    continuar= true;
                }
                break;
            case '4':
                if (copy1 != posicion1 && copy2 != posicion1 && copyp1 != posicion1 && copyp2 != posicion1 && copyp11 != posicion1 && copyp12 !=posicion1 && copyp21 != posicion1 && copyp22 != posicion1){
                    valor1=num4;
                    alert('Valor en la posicion #4: '+ valor1);
                    continuar = false;
                }else{
                    alert('Esta posicion ya se ha seleccionado antes, elige otra.');
                    continuar= true;
                }
                break;
            case '5':
                if (copy1 != posicion1 && copy2 != posicion1 && copyp1 != posicion1 && copyp2 != posicion1 && copyp11 != posicion1 && copyp12 !=posicion1 && copyp21 != posicion1 && copyp22 != posicion1){
                    valor1=num5;
                    alert('Valor en la posicion #5: '+ valor1);
                    continuar = false;
                }else{
                    alert('Esta posicion ya se ha seleccionado antes, elige otra.');
                    continuar= true;
                }
                break;
            case '6':
                if (copy1 != posicion1 && copy2 != posicion1 && copyp1 != posicion1 && copyp2 != posicion1 && copyp11 != posicion1 && copyp12 !=posicion1 && copyp21 != posicion1 && copyp22 != posicion1){
                    valor1=num6;
                    alert('Valor en la posicion #6: '+ valor1);
                    continuar = false;
                }else{
                    alert('Esta posicion ya se ha seleccionado antes, elige otra.');
                    continuar= true;
                }
                break;
            case '7':
                if (copy1 != posicion1 && copy2 != posicion1 && copyp1 != posicion1 && copyp2 != posicion1 && copyp11 != posicion1 && copyp12 !=posicion1 && copyp21 != posicion1 && copyp22 != posicion1){
                    valor1=num7;
                    alert('Valor en la posicion #7: '+ valor1);
                    continuar = false;
                }else{
                    alert('Esta posicion ya se ha seleccionado antes, elige otra.');
                    continuar= true;
                }
                break;
            case '8':
                if (copy1 != posicion1 && copy2 != posicion1 && copyp1 != posicion1 && copyp2 != posicion1 && copyp11 != posicion1 && copyp12 !=posicion1 && copyp21 != posicion1 && copyp22 != posicion1){
                    valor1=num8;
                    alert('Valor en la posicion #8: '+ valor1);
                    continuar = false;
                }else{
                    alert('Esta posicion ya se ha seleccionado antes, elige otra.');
                    continuar= true;
                }
                break;
            case '9':
                if (copy1 != posicion1 && copy2 != posicion1 && copyp1 != posicion1 && copyp2 != posicion1 && copyp11 != posicion1 && copyp12 !=posicion1 && copyp21 != posicion1 && copyp22 != posicion1){
                    valor1=num9;
                    alert('Valor en la posicion #9: '+ valor1);
                    continuar = false;
                }else{
                    alert('Esta posicion ya se ha seleccionado antes, elige otra.');
                    continuar= true;
                }
                break;
            case '10':
                if (copy1 != posicion1 && copy2 != posicion1 && copyp1 != posicion1 && copyp2 != posicion1 && copyp11 != posicion1 && copyp12 !=posicion1 && copyp21 != posicion1 && copyp22 != posicion1){
                    valor1=num10;
                    alert('Valor en la posicion #10: '+ valor1);
                    continuar = false;
                }else{
                    alert('Esta posicion ya se ha seleccionado antes, elige otra.');
                    continuar= true;
                }
                break;
                
                default:
                alert('Opcion invalida');
                break;
        }
}while (continuar);

/////* Para tomar el segundo valor a comoparar */////
do{ 
    posicion2 = prompt ('Elige 2da posicion a descubrir: \n #1  #2  #3  #4  #5 \n #6  #7  #8  #9  #10  '); 
    switch (posicion2){
        case '1':
            if (posicion1 != posicion2 && copy2 != posicion2 && copy1 != posicion2 && copyp2 != posicion2 && copyp1 != posicion2 && copyp11 != posicion2 && copyp12 != posicion2 && copyp21 != posicion2 && copyp22 != posicion2){
                valor2 = num1;
                alert('Valor en la posicion #1: '+ valor2);
                continuar = false;
            }else {
                alert('Esta posicion ya se ha seleccionado antes, elige otra.');
                continuar = true;
            }
            break;
        case '2':
            if (posicion1 != posicion2 && copy2 != posicion2 && copy1 != posicion2 && copyp2 != posicion2 && copyp1 != posicion2 && copyp11 != posicion2 && copyp12 != posicion2 && copyp21 != posicion2 && copyp22 != posicion2){
                valor2 = num2;
                alert('Valor en la posicion #2: '+ valor2);
                continuar = false;
            }else {
                alert('Esta posicion ya se ha seleccionado antes, elige otra.');
                continuar = true;
            }
            break;
        case '3':
            if (posicion1 != posicion2 && copy2 != posicion2 && copy1 != posicion2 && copyp2 != posicion2 && copyp1 != posicion2 && copyp11 != posicion2 && copyp12 != posicion2 && copyp21 != posicion2 && copyp22 != posicion2){
                valor2 = num3;
                alert('Valor en la posicion #3: '+ valor2);
                continuar = false;
            }else {
                alert('Esta posicion ya se ha seleccionado antes, elige otra.');
                continuar = true;
            }
            break;
        case '4':
            if (posicion1 != posicion2 && copy2 != posicion2 && copy1 != posicion2 && copyp2 != posicion2 && copyp1 != posicion2 && copyp11 != posicion2 && copyp12 != posicion2 && copyp21 != posicion2 && copyp22 != posicion2){
                valor2 = num4;
                alert('Valor en la posicion #4: '+ valor2);
                continuar = false;
            }else {
                alert('Esta posicion ya se ha seleccionado antes, elige otra.');
                continuar = true;
            }
            break;
        case '5':
            if (posicion1 != posicion2 && copy2 != posicion2 && copy1 != posicion2 && copyp2 != posicion2 && copyp1 != posicion2 && copyp11 != posicion2 && copyp12 != posicion2 && copyp21 != posicion2 && copyp22 != posicion2){
                valor2 = num5;
                alert('Valor en la posicion #5: '+ valor2);
                continuar = false;
            }else {
                alert('Esta posicion ya se ha seleccionado antes, elige otra.');
                continuar = true;
            }
            break;
        case '6':
            if (posicion1 != posicion2 && copy2 != posicion2 && copy1 != posicion2 && copyp2 != posicion2 && copyp1 != posicion2 && copyp11 != posicion2 && copyp12 != posicion2 && copyp21 != posicion2 && copyp22 != posicion2){
                valor2 = num6;
                alert('Valor en la posicion #6: '+ valor2);
                continuar = false;
            }else {
                alert('Esta posicion ya se ha seleccionado antes, elige otra.');
                continuar = true;
            }
            break;
        case '7':
            if (posicion1 != posicion2 && copy2 != posicion2 && copy1 != posicion2 && copyp2 != posicion2 && copyp1 != posicion2 && copyp11 != posicion2 && copyp12 != posicion2 && copyp21 != posicion2 && copyp22 != posicion2){
                valor2 = num7;
                alert('Valor en la posicion #7: '+ valor2);
                continuar = false;
            }else {
                alert('Esta posicion ya se ha seleccionado antes, elige otra.');
                continuar = true;
            }
            break;
        case '8':
            if (posicion1 != posicion2 && copy2 != posicion2 && copy1 != posicion2 && copyp2 != posicion2 && copyp1 != posicion2 && copyp11 != posicion2 && copyp12 != posicion2 && copyp21 != posicion2 && copyp22 != posicion2){
                valor2 = num8;
                alert('Valor en la posicion #8: '+ valor2);
                continuar = false;
            }else {
                    alert('Esta posicion ya se ha seleccionado antes, elige otra.');
                    continuar = true;
            }
            break;
        case '9':
            if (posicion1 != posicion2 && copy2 != posicion2 && copy1 != posicion2 && copyp2 != posicion2 && copyp1 != posicion2 && copyp11 != posicion2 && copyp12 != posicion2 && copyp21 != posicion2 && copyp22 != posicion2){
                valor2 = num9;
                alert('Valor en la posicion #9: '+ valor2);
                continuar = false;
            }else {
                alert('Esta posicion ya se ha seleccionado antes, elige otra.');
                continuar = true;
            }
            break;
        case '10':
            if (posicion1 != posicion2 && copy2 != posicion2 && copy1 != posicion2 && copyp2 != posicion2 && copyp1 != posicion2 && copyp11 != posicion2 && copyp12 != posicion2 && copyp21 != posicion2 && copyp22 != posicion2){
                valor2 = num10;
                alert('Valor en la posicion #10: '+ valor2);
                continuar = false;
            }else {
                alert('Esta posicion ya se ha seleccionado antes, elige otra.');
                continuar = true;
            }
            break;
        default:
            alert('Opcion invalida');
            break;
    }
}while(continuar);

function comparar (){
    if (valor1 === valor2){
        encontrados = encontrados +1;
        alert('Has encontrado '+ encontrados +' par/es de 5');
        
        copyp22 = copyp21;
        copyp12 = copyp11;
        copyp11 = copyp1;
        copyp21 = copyp2;
        copyp1 = copy1;
        copyp2 = copy2;
        copy1 = posicion1;
        copy2 = posicion2;

    }else{
        alert('No son iguales, sigue intentado');
    }
}

comparar();
}
alert ('Ganaste!');