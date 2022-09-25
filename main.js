let PokeSelect = alert("A Continuacion Elegiras Tu Pokemon Inicial ");
alert("Charmander  - Squirtle  - Bulbasaur ");
let vida1 = 100; // Hp De Los Pokemones
let vida2 = 100;

let PokeSelect2 = prompt("Ingresa Un Pokemon");
switch (PokeSelect2) {
  case "charmander":
    console.log("Has Elegido a Charmander");
    break;
  case "squirtle":
    console.log("Has Elegido a Squirtle");
    break;
  case "bulbasaur":
    console.log("Has Elegido a Bulbasaur");
    break;
  default:
    alert("Ingresa un Pokemon Valido");
}

let enemySelect = prompt("Elije Un Pokemon Enemigo");
switch (enemySelect) {
  case "charmander":
    console.log("Has Elegido a Charmander");
    break;
  case "squirtle":
    console.log("Has Elegido a Squirtle");
    break;
  case "bulbasaur":
    console.log("Has Elegido a Bulbasaur");
    break;
  default:
    alert("Ingresa un Pokemon Valido");
}

function combate() {
  let round = 0;
  while (vida1 > 0 && vida2 > 0) {
    let GolpePokemon1 = Math.ceil(Math.random() * 30);
    let GolpePokemon2 = Math.ceil(Math.random() * 30);
    round = round + 1;
    console.log(round);
    if (GolpePokemon1 > GolpePokemon2) {
      vida2 -= GolpePokemon1;
      console.log(PokeSelect2 + " vida = " + vida1);
      console.log(enemySelect + " Vida = " + vida2);
    } else {
      vida1 -= GolpePokemon2;
      console.log(enemySelect + " Vida = " + vida2);
      console.log(PokeSelect2 + " Vida = " + vida1);
    }
  }
}
if (enemySelect === "charmander") {
  combate();
}
if (enemySelect === "bulbasaur") {
  combate();
}
if (enemySelect === "squirtle") {
  combate();
}
if (vida1 > vida2) {
  console.log(PokeSelect2 + " Ha Ganado El Combate");
} else {
  console.log(enemySelect + " Ha Ganado El Combate");
}
