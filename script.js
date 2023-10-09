const main$$ = document.querySelector('main');
const botonesTipo = document.querySelectorAll('.div-buttom');

const myPokeApi = async () => {
    let allPokemons = [];
    for (let i = 1 ; i <= 150; i++) {
        const response = await fetch ('https://pokeapi.co/api/v2/pokemon/' + i)
        const res= await response.json();
        allPokemons.push(res) 
    }
   return allPokemons;
   
}

const mapCharacters = (charactersWithMappe) => {
    return letCharactersMapped = charactersWithMappe.map((character)=>({
        nombre: character.name,
        imagen: character.sprites.front_default,
        id: character.id,
        tipos: character.types[0].type.name,

    }))
};

const drawCharacters = (mappedCharacters) =>{
    for (const character of mappedCharacters) {
        const div$$ = document.createElement('div');
        div$$.classList.add("pokemon")
        div$$.innerHTML = `
            <p>${character.id}</p>
            <img class='imagen-pokemon'src="${character.imagen}" alt ="${character.nombre}"/>
            <h2 class='nombre-pokemon'>${character.nombre}</h2>
            <button class='button-tipo'>${character.tipos}</button>`;

        main$$.appendChild(div$$)

    }
}

botonesTipo.forEach(button => button.addEventListener("click", (event) =>{
    const buttonId = event.currentTarget.id;
    
}))

const innit = async () => {

const characters = await myPokeApi();

const mappedCharacters = mapCharacters(characters);


drawCharacters(mappedCharacters);
};
innit()