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

const userData = () => {

    message.remove();
    
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

    const selectedCard = divcard.querySelector('.card-link');
    selectedCard.addEventListener('click', () => selection(prop));

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

const userTable = ()=>{
    const userInfo = document.createElement("div");
    userInfo.className="user-table";
    userInfo.innerHTML = `
    <p class = "welcome">Bienvenido ${data.nombre} de la casa ${data.casa}</p>
    <p class = "welcome">Pares encontrados: ${found}</p>
    <div class ="hints">
        <p>Hints: ${data.hints}</p>
        <button class="btn-hints" id="hints-button">Usar</button>
    </div>`;

    div.appendChild(userInfo);
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function comparar (){

    const [card1, card2] = cardUp;
    console.log(cardUp);
    if (card1.id === card2.id) {
        
        posicion.push(card1);
        posicion.unshift(card2);
        cardUp = [];
        found=found+1;
        console.log(found);
        if (found === cards.length / 2) {
            localStorage.clear();
            const clean1= document.querySelector(".table-container");
            const clean2= document.querySelector(".user-table");
            ganar.className="alerta";
            ganar.innerText="Ganaste! Haz click para volver a jugar"
            div.appendChild(ganar);
            clean1.remove();
            clean2.remove();

            ganar.addEventListener("click", initGame);
            
            
        }
    }else{
        tableContainer({cartas:cards});
        cardUp = [];
    }
    
}

function selection(cart){
    const newDiscover = document.querySelector(".table-container");
    const discover = Array.from(newDiscover.children);
    message.className ="content";
    message.innerText = cart.id;
    cards.forEach(element => {
        if (element === cart){
            dato= element;
        }
    });

    const select= () => {
        if (cardUp.length < 2 && !cardUp.includes(cart) && !posicion.includes(cart)) {
            cardUp.push(cart);
            discover.forEach(element1 => {
                if(cards.indexOf(dato)===discover.indexOf(element1)){
                    element1.appendChild(message);
                }
            });
        }
    }
    if (cardUp.length === 2) {
        comparar();
    }else{
        select();
    }
}

function initGame(){
    message.className="start";
    message.innerText = "Haz click para empezar a jugar";
    div.appendChild(message);
    message.addEventListener("click", userData);

    if (data){
        message.remove();
        ganar.remove();
        shuffle(cards);
        userTable();
        div.appendChild(tableContainer({cartas:cards}));
    }
} 

initGame();