const main$$ = document.querySelector('main');


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
        tipos: character.types.map((type) => type.type.name).join(', '),

    }))
};

const drawCharacters = (mappedCharacters) =>{
    for (const character of mappedCharacters) {
        const div$$ = document.createElement('div');
        div$$.classList.add("pokemon")
        div$$.innerHTML = `
            <p>${character.id}</p>
            <img class='imagen-pokemon'src="${character.imagen}" alt ="${character.nombre}"/>
            <div class='contenedor'>
            <div class='contenedor-child'>
            <h2 class='nombre-pokemon'>${character.nombre}</h2>
            <buttom class='button-tipo'>${character.tipos}</buttom>
            </div>
            </div>`;

        main$$.appendChild(div$$)

    }
}

// const searchType = (mappedCharacters) =>{
// const botonesTipo = document.querySelectorAll('.div-buttom')
// botonesTipo.addEventListener('click', () => {
    
// })
// }

const innit = async () => {

const characters = await myPokeApi();

const mappedCharacters = mapCharacters(characters);


drawCharacters(mappedCharacters);

searchType(mappedCharacters);
};
innit()