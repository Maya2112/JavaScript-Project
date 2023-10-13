let encontrados = 0;
let posicion1;
let valor1;
let posicion2;
let valor2;
let continuar = true;

const numeros = [21, 11, 22, 12, 15, 15, 22, 21, 11, 12];
const posicion = [];


class usuario{
    constructor(nombre, casa){
        this.nombre=nombre;
        this.casa=casa;
        this.ganador=false;
        this.hints=2;
    }

    conteoPistas(){
        this.hints=this.hints-1;
    }

    ganaste(){
        this.ganador=true;
    }
}

alert ('***JUEGO DE MEMORIA*** ');
let userName = prompt ('Ingresa tu nombre: ');
let casaH = prompt ('Ingresa tu casa de Hogwarts: \n Gryffindor  Revenclaw\n Hufflepuff  Slytherin');

const usuario1 = new usuario (userName, casaH);

alert ('Bienvenido/a '+ usuario1.nombre +' de la casa '+ usuario1.casa);

function seleccion1(){
    do { 
        posicion1 = prompt ('Elige 1era posicion a descubrir: \n #0  #1  #2  #3  #4 \n #5  #6  #7  #8  #9 ');
        const igual = posicion.includes(posicion1);
        if (igual){
            alert ('Esta posicion ya ha sido descubierta, elige otra');
            continuar = true;
        }else{
            valor1 = numeros[posicion1];
            alert ('El elemento en la posicion #'+ posicion1 +' es : '+ valor1);
            continuar = false;
            break;
        }
    }while (continuar == true)
}

function seleccion2(){
    do{
        posicion2 = prompt ('Elige 2da posicion a descubrir: \n #0  #1  #2  #3  #4 \n #5  #6  #7  #8  #9 ');
        const igual = posicion.includes(posicion2);
        if (posicion2 === posicion1){
            alert ('Es la misma posicion que elegiste primero, elige otra');
            continuar = true;
        }else if(igual){
            alert ('Esta posicion ya ha sido descubierta, elige otra');
            continuar = true;
        }else{
            valor2 = numeros[posicion2];
            alert ('El elemento en la posicion #'+ posicion2 +' es : '+ valor2);
            continuar = false;
            break;
        }
    }while (continuar == true);
}

function comparar (){
    if (valor1 === valor2){
        encontrados = encontrados +1;
        alert('Has encontrado '+ encontrados +' par/es de 5');
        posicion.unshift(posicion1);
        posicion.push(posicion2);
    }else{
        alert('No son iguales, sigue intentado');
    }
}

function encontrar(){
    let ver1= prompt ('Ingresa el valor del elemento que deseas ver/encontrar');
    const pista1 = numeros.find((numero) => numero === ver1);
    alert ('El elemento '+ pista1 +' se encuentra en la posicion'+ numeros.indexOf(pista1))
    usuario1.conteoPistas();
}

function aleatorio(){
    const elemento1 = numeros[Math.floor(Math.random() * numeros.length)];
    alert ('Elemento: '+ elemento1 + ' en la posicion: '+ numeros.indexOf(elemento1));
    usuario1.conteoPistas();
}

do{
    seleccion1();
    if (usuario1.hints > 0){
        alert ('Tienes '+ usuario1.hints+' pistas para usar.');
        let opcionPista= prompt ('Opciones: \n 1. Descubrir un elemento especifico \n 2. Descubrir un elemento aleatorio. \n 3. No usar pistas');
        switch(opcionPista){
            case '1':
                encontrar();
                break;
            case '2':
                aleatorio();
                break;
            case '3':
                break;
            default:
            alert ('Opcion incorrecta');
        }
    }else{ 
        alert('Ya no tienes pistas');
    }
    seleccion2();
    comparar();
}while (encontrados < 5);
if(encontrados===5){
    usuario1.ganaste();
    alert ('Ganaste!')
}