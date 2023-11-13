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

let cardUp = [];
let posicion = [];
let found = 0;

const div = document.getElementById("container");
const message = document.createElement("p");
const ganar = document.createElement("p");
const data = JSON.parse(localStorage.getItem('userTurn'));


class usuario{
    constructor(nombre, casa){
        this.nombre=nombre;
        this.casa=casa;
        this.ganador=false;
        this.hints=2;
    }
}

////////*Funcion para pedir y guardar informacionde jugador////////

const userData = () => {

    message.remove();
    ganar.remove();
    
    const form = document.querySelector('#form');
    const formContainer = document.querySelector('.form-container-inputs');

    const getUserData = () =>{
        const userName = document.querySelector('#name').value || "falsy";
        const casaH = document.querySelector('#casa').value || "falsy";
        if (userName === "falsy" || casaH === "falsy"){
            Swal.fire({
                title: "Debes completar todos los datos para poder continuar",
                icon: "warning",
                confirmButtonText: "Aceptar",
                background: "goldenrod",
                imageUrl: "https://i.pinimg.com/originals/2c/5d/3f/2c5d3f5dd10f6ca3b7c1f114e6509539.gif"
                })
                userData();
            }else{
                const usuario1 = new usuario (userName, casaH);
                localStorage.setItem('userTurn', JSON.stringify(usuario1));
            } 
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

/////////*Contenedor de los atributos de una carta*/////////
const Card = (prop) => {

    let { id, thumbnail} = prop;
    let divcard = document.createElement("div");
    divcard.className= "card-content";
    divcard.innerHTML =
        `
        <a data-id=${id} class="card-link"><img id="card-img" src=${thumbnail} alt="ficha"></img></a>
    `;

    const selectedCard = divcard.querySelector('.card-link');
    selectedCard.addEventListener('click', () => {
        divcard.className = "fadeOut";
        selection(prop);
    });

    return divcard;
}

/////////*Tablero de cartas*/////////
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

/*Informacion del usuario en pantalla*/
const userTable = ()=>{
    const userInfo = document.createElement("div");
    userInfo.className="user-table";

    userInfo.innerHTML = `
    <p class = "welcome">Bienvenido ${data.nombre} de la casa ${data.casa}</p>
    <p class = "welcome" id="count">Pares encontrados: ${found}</p>
    <div class ="hints">
        <p>Hints: ${data.hints}</p>
        <button class="btn-hints" id="hints-button">Usar</button>
    </div>`;

    const hintsInfo = userInfo.querySelector ("#hints-button");
    hintsInfo.addEventListener("click", ()=>{
        Swal.fire({
            title: "Pistas",
            icon: "warning",
            background: "goldenrod",
            html: `<ul>
                        <li>
                            <p>Hipotetica opcion 1</p>
                        </li>
                        <li>
                            <p>Hiotetica opcion 2</p>
                        </li>
                    </ul>`,
            showCancelButton: true,
            cancelButtonText: "Cancelar",
            confirmButtonText: "Aceptar",
        })
    })

    div.appendChild(userInfo);

    return userInfo;
}

////////*Funcion para orden aleatorio de cartas*/////////
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

////////*Comparo*////////
function comparar (){
    console.log('comparando')
    const [card1, card2] = cardUp;
    if (card1.id === card2.id) {
        posicion.push(card1);
        posicion.unshift(card2);
        cardUp = [];
        found++;
        console.log("encontre par " + found);
    }else{
        console.log('no son iguales');
        setTimeout(() =>{
            const newDiscover = document.querySelector(".table-container");
            const discover = Array.from(newDiscover.children);
        
            discover.forEach(element1 => {
            if(discover.indexOf(element1)===cards.indexOf(card1)){
                element1.className = "fadeIn";
                element1.innerHTML =`<a data-id=${card1.id} class="card-link"><img id="card-img" src=${card1.thumbnail} alt="ficha"></img></a>`;
                const selectCard = element1.querySelector('.card-link');
                selectCard.addEventListener('click', () => {
                    element1.className = "fadeOut";
                    selection(card1);
                });
            }
        });
        discover.forEach(element2 => {
            if(discover.indexOf(element2)===cards.indexOf(card2)){
                element2.className = "fadeIn";
                element2.innerHTML = `<a data-id=${card2.id} class="card-link"><img id="card-img" src=${card2.thumbnail} alt="ficha"></img></a>`
                const selectCard = element2.querySelector('.card-link');
                selectCard.addEventListener('click', () => {
                    element2.className = "fadeOut";
                    selection(card2);
                });
            }
        });}, 1000);
    }
    
    if (found === cards.length / 2) {
        localStorage.clear();
        const clean1 = document.querySelector(".table-container");
        const clean2 = document.querySelector(".user-table");
        clean1.remove();
        clean2.remove();
        ganar.className="alerta";
        ganar.innerText="Ganaste!"
        div.appendChild(ganar);
        
        setTimeout(()=>{
            localStorage.clear();
            ganar.remove();
            message.className="start";
            message.innerText = "Haz click para empezar a jugar";
            div.appendChild(message);
            message.addEventListener("click", userData);},2000);
    }else{
        tableContainer({cartas:cards});
        cardUp = [];
    }
}

/////////*Funcion que se ejecuta al seleccionar o hacer "click" en una carta*///////
function selection(cart){
    const newDiscover = document.querySelector(".table-container");
    const discover = Array.from(newDiscover.children);
    discover.forEach(element1 => {
        if(cards.indexOf(cart)===discover.indexOf(element1)){
            element1.className = "fadeIn";
            element1.innerHTML = `<div id="temp-div"> <p> ${cart.id} </p> </div>`;
        }
        if (cardUp.length < 2 && !cardUp.includes(cart) && !posicion.includes(cart)) {
            cardUp.push(cart);
            setTimeout(()=>{cardUp.length === 2 && comparar();},1000);
        }
        
    });
}

function initGame(){

    message.className="start";
    message.innerText = "Haz click para empezar a jugar";
    div.appendChild(message);
    message.addEventListener("click", userData);
    const player = (res) => {
        return new Promise ((resolve, reject) => {
            if(res){
                resolve ('Data');
            }else {
                reject ('Falta player info');
            }
        });
    }

    player (data)
        .then ((respuesta) => {
            console.log(respuesta);
            message.remove();
            ganar.remove();
            shuffle(cards);
            userTable();
            div.appendChild(tableContainer({cartas:cards}));
        })
        .catch((respuesta) => {
            console.log(respuesta);
        })
} 

initGame();

