


const cards = [{
    id: 21,
    thumbnail: './images/harry.jpeg',
},
{
    id:11,
    thumbnail: './images/hermione.jpeg',
},
{
    id:22,
    thumbnail: './images/ron.jpeg',
},
{
    id:12,
    thumbnail: './images/castillo.jpeg',
},
{
    id:15,
    thumbnail: './images/tres.jpeg',
},
{
    id:15,
    thumbnail: './images/hppatronus.jpeg',
},
{
    id:22,
    thumbnail: './images/herpatronus.jpeg',
},
{
    id:21,
    thumbnail: './images/ronpatronus.jpeg',
},
{
    id:11,
    thumbnail: './images/expreso.jpeg',
},
{
    id:12,
    thumbnail: './images/HOGWARTSes.jpeg',
}];

const posicion = [];
let encontrados = 0;

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

const userData = () => {

    message.remove();
    localStorage.clear();
    const form = document.querySelector('#form');
    const formContainer = document.querySelector('.form-container-inputs');

    const getUserData = () =>{

        const userName = document.querySelector('#name').value;
        const casaH = document.querySelector('#casa').value;
        const usuario1 = new usuario (userName, casaH);
        localStorage.setItem('userTurn', JSON.stringify(usuario1));
        
    }
        form.innerHTML = `
        <div>
            <label for="name">Ingresa tu nombre:</label>
            <input id="name" placeholder="Ingresa tu nombre" type"text">
        </div>
        <div>
            <label for="casa">Ingresa tu casa de hogwarts:</label>
            <input id="casa" placeholder="Ingresa tu casa de hogwarts" type"text">
        </div>
        <button class="btn" id="save-button">Empezar</button>
        `;
    
        const saveButton = document.getElementById("save-button");
        saveButton.addEventListener("click", getUserData);

        form.appendChild(formContainer);

        return form;
}

const Card = (prop) => {

    let { id, thumbnail} = prop;
    let divcard = document.createElement("div");
    divcard.className= "card-content";
    divcard.innerHTML =
        `
        <a data-id=${id} class="card-link"><img src=${thumbnail} alt=""></img></a>
    `;

    /*const selectedCard = divcard.querySelector('.card-link');
    selectedCard.addEventListener('click', ());*/

    return divcard;
}

const tableContainer = (props) => {

    let { cartas } = props;
    let section = document.createElement("section");
    section.className ="table-container";
    cartas.forEach(carta => {
        const card = Card(carta);
        section.appendChild(card);
    });
    return section;
}


const div = document.getElementById("container");

const message = document.createElement("p");
message.className="start";
message.innerText = "Haz click para empezar a jugar";
div.appendChild(message);
message.addEventListener("click", userData);


const data = JSON.parse(localStorage.getItem('userTurn'));

if (data){
message.remove();
const userInfo = document.createElement("p");
userInfo.className="welcome";
userInfo.innerText = `Bienvenido ${data.nombre} de la casa ${data.casa}`;
div.appendChild(userInfo);
div.appendChild(tableContainer({cartas:cards}));
}

localStorage.clear();
/*

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
    const pista1 = numeros.find(numero => numero === ver1);
    alert ('El elemento '+ pista1 +' se encuentra en la posicion'+ numeros.indexOf(pista1));
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
}*/