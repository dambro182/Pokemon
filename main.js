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

const pokemonContainer = document.querySelector(".title1");
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

if (Pokeselect != undefined) {
  let Pokeselecthp = Pokeselect.Vida;
}
if (enemySelect != undefined) {
  let enhp = enemySelect.Vida;
}
fetch("https://pokeapi.co/api/v2/pokemon/charmander")
  .then((response) => {
    return response.json();
  })
  .then((user) => {
    console.log(user);
    document.getElementById("title1").innerHTML = user.name;
  });
fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur")
  .then((response) => {
    return response.json();
  })
  .then((user) => {
    console.log(user);
    document.getElementById("title2").innerHTML = user.name;
  });
fetch("https://pokeapi.co/api/v2/pokemon/squirtle")
  .then((response) => {
    return response.json();
  })
  .then((user) => {
    console.log(user);
    document.getElementById("title3").innerHTML = user.name;
  });
fetch("https://pokeapi.co/api/v2/pokemon/squirtle").then((response) => {
  return response.json();
});
fetch("https://pokeapi.co/api/v2/pokemon/charmander")
  .then((response) => {
    return response.json();
  })
  .then((user) => {
    console.log(user);
    document.getElementById("title4").innerHTML = user.name;
  });
fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur")
  .then((response) => {
    return response.json();
  })
  .then((user) => {
    console.log(user);
    document.getElementById("title5").innerHTML = user.name;
  });
fetch("https://pokeapi.co/api/v2/pokemon/squirtle")
  .then((response) => {
    return response.json();
  })
  .then((user) => {
    console.log(user);
    document.getElementById("title6").innerHTML = user.name;
  });

//boton Start Game
const Boton = document.getElementById("start");

//COMBATES
function combate() {
  let round = 0;
  while (Pokeselect.Vida > 0 && enemySelect.Vida > 0) {
    let GolpePokemon1 = Math.ceil(Math.random() * Pokeselect.Daño);
    let GolpePokemon2 = Math.ceil(Math.random() * enemySelect.Daño);
    round = round + 1;
    let Pokeselecthp = Pokeselect.Vida;
    let enemySelecthp = enemySelect.Vida;

    if (GolpePokemon1 > GolpePokemon2) {
      enemySelect.Vida -= GolpePokemon1;
      document.getElementById("miPagina").innerHTML +=
        "<div id=final>" +
        " este es el round " +
        round +
        "<br>" +
        " tu vida restante es de " +
        Pokeselecthp +
        "<br>" +
        " la vida restante del rival es " +
        enemySelecthp +
        "<br>";
    } else {
      Pokeselect.Vida -= enemySelect.Daño;
      document.getElementById("miPagina").innerHTML +=
        "<div id=final>" +
        " este es el round " +
        round +
        "<br>" +
        " tu vida restante es de " +
        Pokeselecthp +
        "<br>" +
        " la vida restante del rival es " +
        enemySelecthp +
        "<br>";
    }
    if (Pokeselect.Vida <= -20) {
      swal.fire(
        "Tu Digimon se ha debilitado, la pelea duro " + round + " rounds"
      );
    } else {
      swal.fire("Tu digimon ha ganado, la pelea duro " + round + " rounds");
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
