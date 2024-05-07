const pokemonDetailsContainer = document.getElementById('pokemonDetails');
const urlParams = new URLSearchParams(window.location.search);
const pokemonName = urlParams.get('pokemon');

//fetch pokemon from api
fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
  .then(response => response.json())
  .then(data => {
    const types = data.types.map(type => type.type.name);
    pokemonDetailsContainer.classList.add(...types);

    const pokemonDetails = `
      <div class="pokemon-card">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png" alt="${data.name}">
        <h2>${data.name}</h2>
        <p>Height: ${data.height / 10} m</p>
        <p>Weight: ${data.weight / 10} kg</p>
        <p>Types:</p>
        <ul>
          ${data.types.map(type => `<li>${type.type.name}</li>`).join('')}
        </ul>
      </div>
    `;
    pokemonDetailsContainer.innerHTML = pokemonDetails;
  })
  .catch(error => console.error('Error fetching Pokémon details:', error));

  const typeColors = {
    normal: "#F8F8FF", 
    fire: "#FFD1DC", 
    water: "#ADD8E6", 
    electric: "#F0FFF0", 
    grass: "#90EE90", 
    ice: "#D3D3D3", 
    fighting: "#FFDAB9",
    poison: "#F0FFFF", 
    ground: "#F5F5DC", 
    flying: "#87CEFA", 
    psychic: "#F0E68C", 
    bug: "#F0FFF0", 
    rock: "#D3D3D3", 
    ghost: "#ADD8E6",
    dragon: "#87CEEB", 
    dark: "#708090", 
    steel: "#D3D3D3",
    fairy: "#FFD1DC", 
  };
  

fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
  .then(response => response.json())
  .then(data => {
    const types = data.types.map(type => type.type.name);
    const primaryType = types[0];
    const backgroundColor = typeColors[primaryType];
    const textColor = getContrastYIQ(backgroundColor) ? '#000' : '#fff';

    pokemonDetailsContainer.style.backgroundColor = backgroundColor;
    pokemonDetailsContainer.style.color = textColor;

    const pokemonDetails = `
      <div class="pokemon-card">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png" alt="${data.name}">
        <h2>${data.name}</h2>
        <p>Height: ${data.height / 10} m</p>
        <p>Weight: ${data.weight / 10} kg</p>
        <p>Types:</p>
        <ul>
          ${data.types.map(type => `<li>${type.type.name}</li>`).join('')}
        </ul>
      </div>
    `;
    pokemonDetailsContainer.innerHTML = pokemonDetails;
  })
  .catch(error => console.error('Error fetching Pokémon details:', error));

function getContrastYIQ(hexColor) {
}
  
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then(response => response.json())
    .then(data => {
      const types = data.types.map(type => type.type.name);
      const primaryType = types[0];
      const backgroundColor = typeColors[primaryType];
      const textColor = getContrastYIQ(backgroundColor) ? '#000' : '#fff';
  
      pokemonDetailsContainer.style.backgroundColor = backgroundColor;
      pokemonDetailsContainer.style.color = textColor;
  
      const pokemonDetails = `
        <div class="pokemon-card">
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png" alt="${data.name}">
          <h2>${data.name}</h2>
          <p>Height: ${data.height / 10} m</p>
          <p>Weight: ${data.weight / 10} kg</p>
          <p>Types:</p>
          <ul>
            ${data.types.map(type => `<li>${type.type.name}</li>`).join('')}
          </ul>
        </div>
      `;
      pokemonDetailsContainer.innerHTML = pokemonDetails;
    })
    .catch(error => console.error('Error fetching Pokémon details:', error));
  
  function getContrastYIQ(hexColor) {
    const r = parseInt(hexColor.substr(1, 2), 16);
    const g = parseInt(hexColor.substr(3, 2), 16);
    const b = parseInt(hexColor.substr(5, 2), 16);
    const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
    return yiq >= 128;
  }