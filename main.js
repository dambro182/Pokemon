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

//Almacenamiento De  Pokemones Seleccionados
let Pokeselect = undefined;
let enemySelect = undefined;

//pokemon aliados
const PokeSelect1 = document.getElementsByClassName("charmander")[0];
PokeSelect1.addEventListener("click", () => {
  Pokeselect = pokemon1;
});
const PokeSelect2 = document.getElementsByClassName("bulbasaur")[0];
PokeSelect2.addEventListener("click", () => {
  Pokeselect = pokemon2;
});
const PokeSelect3 = document.getElementsByClassName("squirtle")[0];
PokeSelect3.addEventListener("click", () => {
  Pokeselect = pokemon3;
});

//pokemon enemigos
const enemySelect1 = document.getElementsByClassName("charmander1")[0];
enemySelect1.addEventListener("click", () => {
  enemySelect = pokemon1;
});
const enemySelect2 = document.getElementsByClassName("bulbasaur2")[0];
enemySelect2.addEventListener("click", () => {
  enemySelect = pokemon2;
});
const enemySelect3 = document.getElementsByClassName("squirtle3")[0];
enemySelect3.addEventListener("click", () => {
  enemySelect = pokemon3;
});

//boton Start Game
const Boton = document.getElementById("start");

//COMBATES
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

//SQUIRTLE VS BULBASAUR
function combateSquirtle1() {
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
//SQUIRTLE VS CHARMANDER
function combateSquirtle2() {
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

if (Pokeselect == pokemon1 && enemySelect == pokemon2) {
  Boton.addEventListener("click", combate);
}
if (Pokeselect == pokemon3 && enemySelect == pokemon2) {
  Boton.addEventListener("click", combateSquirtle1);
}
