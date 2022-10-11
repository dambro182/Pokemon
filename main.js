const pokemon1 = {
  Nombre: "Charmander",
  Vida: 90,
  Tipo: "Fuego",
  Daño: 30,
};
const pokemon2 = {
  Nombre: "Bulbasaur",
  Vida: 120,
  Tipo: "Planta",
  Daño: 30,
};
const pokemon3 = {
  Nombre: "Squirtle",
  Vida: 110,
  Tipo: "Agua",
  Daño: 30,
};
let opcion1 = pokemon1;
let opcion2 = pokemon2;
let opcion3 = pokemon3;

let Pokesdisponibles = [];
Pokesdisponibles.push("Charmander", "Squirtle", "Bulbasaur");

console.log(Pokesdisponibles);
console.log("Los Pokes Disponibles Son " + Pokesdisponibles.length);

let PokeSelect2 = prompt("Ingresa Un Pokemon");
switch (PokeSelect2) {
  case "charmander":
    PokeSelect2 = opcion1;
    console.log("Has Elegido a Charmander");
    break;
  case "squirtle":
    PokeSelect2 = opcion3;
    console.log("Has Elegido a Squirtle");
    break;
  case "bulbasaur":
    PokeSelect2 = opcion2;
    console.log("Has Elegido a Bulbasaur");
    break;
  default:
    alert("Ingresa un Pokemon Valido");
}

let enemySelect = prompt("Elije Un Pokemon Enemigo");
switch (enemySelect) {
  case "charmander":
    enemySelect = opcion1;
    console.log("Has Elegido a Charmander");
    break;
  case "squirtle":
    enemySelect = opcion3;
    console.log("Has Elegido a Squirtle");
    break;
  case "bulbasaur":
    enemySelect = opcion2;
    console.log("Has Elegido a Bulbasaur");
    break;
  default:
    alert("Ingresa un Pokemon Valido");
}

if (PokeSelect2 === enemySelect) alert("No Puedes Combatir Pokemones Iguales");
if (PokeSelect2 === opcion3 && enemySelect === opcion1) {
  combateSquirtle2();
}
if (PokeSelect2 === opcion1 && enemySelect === opcion2) {
  combate();
}
if (PokeSelect2 === opcion3 && enemySelect === opcion2) {
  combateSquirtle1();
}

function combate() {
  let round = 0;
  while (opcion1.Vida > 0 && opcion2.Vida > 0) {
    let GolpePokemon1 = Math.ceil(Math.random() * opcion1.Daño);
    let GolpePokemon2 = Math.ceil(Math.random() * opcion2.Daño);
    round = round + 1;
    console.log(round);
    if (GolpePokemon1 > GolpePokemon2) {
      opcion2.Vida -= GolpePokemon1;
      console.log(opcion1.Nombre + " " + "Hizo " + GolpePokemon1 + " Daño");
      console.log(opcion1.Nombre + " Vida = " + opcion1.Vida);
      console.log(opcion2.Nombre + " Vida = " + opcion2.Vida);
    } else {
      pokemon1.Vida -= pokemon2.Daño;
      console.log(opcion2.Nombre + " " + "Hizo " + GolpePokemon2 + " Daño");
      console.log(opcion2.Nombre + " Vida = " + opcion2.Vida);
      console.log(opcion1.Nombre + " Vida = " + opcion1.Vida);
    }
  }
}

function combateSquirtle1() {
  //SQUIRTLE VS BULBASAUR
  let round = 0;
  while (opcion3.Vida > 0 && opcion2.Vida > 0) {
    let GolpePokemon1 = Math.ceil(Math.random() * pokemon3.Daño);
    let GolpePokemon2 = Math.ceil(Math.random() * pokemon2.Daño);
    round = round + 1;
    console.log(round);
    if (GolpePokemon1 > GolpePokemon2) {
      opcion2.Vida -= GolpePokemon1;
      console.log(opcion3.Nombre + " " + "Hizo " + GolpePokemon1 + " Daño");
      console.log(opcion3.Nombre + " Vida = " + opcion3.Vida);
      console.log(opcion2.Nombre + " Vida = " + opcion2.Vida);
    } else {
      opcion3.Vida -= opcion2.Daño;
      console.log(opcion2.Nombre + " " + "Hizo " + GolpePokemon2 + " Daño");
      console.log(opcion2.Nombre + " Vida = " + opcion2.Vida);
      console.log(opcion3.Nombre + " Vida = " + opcion3.Vida);
    }
  }
}

function combateSquirtle2() {
  //SQUIRTLE VS CHARMANDER
  let round = 0;
  while (opcion3.Vida > 0 && opcion1.Vida > 0) {
    let GolpePokemon1 = Math.ceil(Math.random() * opcion3.Daño);
    let GolpePokemon2 = Math.ceil(Math.random() * opcion1.Daño);
    round = round + 1;
    console.log(round);
    if (GolpePokemon1 > GolpePokemon2) {
      opcion2.Vida -= GolpePokemon1;
      console.log(opcion3.Nombre + " " + "Hizo " + GolpePokemon1 + " Daño");
      console.log(opcion3.Nombre + " Vida = " + opcion1.Vida);
      console.log(opcion1.Nombre + " Vida = " + opcion1.Vida);
    } else {
      pokemon3.Vida -= pokemon1.Daño;
      console.log(opcion1.Nombre + " " + "Hizo " + GolpePokemon2 + " Daño");
      console.log(opcion1.Nombre + " Vida = " + opcion1.Vida);
      console.log(opcion3.Nombre + " Vida = " + opcion3.Vida);
    }
  }
}
