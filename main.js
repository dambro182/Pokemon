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
  Daño: 26,
};
const pokemon3 = {
  Nombre: "Squirtle",
  Vida: 100,
  Tipo: "Agua",
  Daño: 28,
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
  while (Pokeselect.Vida > 0 && enemySelect.Vida > 0) {
    let GolpePokemon1 = Math.ceil(Math.random() * opcion1.Daño);
    let GolpePokemon2 = Math.ceil(Math.random() * opcion2.Daño);
    round = round + 1;
    console.log(round);
    if (GolpePokemon1 > GolpePokemon2) {
      enemySelect.Vida -= GolpePokemon1;
      document.write(
        Pokeselect.Nombre + " " + "Hizo " + GolpePokemon1 + " Daño"
      );
      document.write(Pokeselect.Nombre + " Vida = " + Pokeselect.Vida);
      document.write(enemySelect.Nombre + " Vida = " + enemySelect.Vida);
    } else {
      Pokeselect.Vida -= enemySelect.Daño;
      document.write(
        enemySelect.Nombre + " " + "Hizo " + GolpePokemon2 + " Daño"
      );
      document.write(enemySelect.Nombre + " Vida = " + enemySelect.Vida);
      document.write(Pokeselect.Nombre + " Vida = " + Pokeselect.Vida);
    }
  }
}

Boton.addEventListener("click", combate);

//modo oscuro
const btnSwitch = document.querySelector("#switch");

btnSwitch.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  btnSwitch.classList.toggle("active");

  // Guardamos el modo en localstorage.
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("dark-mode", "true");
  } else {
    localStorage.setItem("dark-mode", "false");
  }
});

// Obtenemos el modo actual.
if (localStorage.getItem("dark-mode") === "true") {
  document.body.classList.add("dark");
  btnSwitch.classList.add("active");
} else {
  document.body.classList.remove("dark");
  btnSwitch.classList.remove("active");
}
