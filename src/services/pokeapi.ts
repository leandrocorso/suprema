const baseUrl = "https://pokeapi.co/api/v2";
const lang = "en";

export const getPokemons = async () => {
  const url = `${baseUrl}/pokemon?offset=0&limit=4`;
  const result = await fetch(url);
  const pokemons = await result.json();

  // Abilities (poderes)
  const getAbilities = async (abilities) => {
    const data = abilities.map(async (item) => {
      const { names } = await getPokemonData(item.ability.url);
      const abilityNames = names.filter((n) => n.language.name === lang);
      return Object.assign(item.ability, { label: abilityNames[0].name });
    });
    return await Promise.all(data);
  };

  // Types (elementos)
  const getTypes = async (types) => {
    const data = types.map(async (item) => {
      const { names } = await getPokemonData(item.type.url);
      const typeNames = names.filter((n) => n.language.name === lang);
      return Object.assign(item.type, { label: typeNames[0].name });
    });
    return await Promise.all(data);
  };

  // Species: name | genus | color (nome | raça | cor)
  const getSpecies = async (species) => {
    const { names, genera, color } = await getPokemonData(species.url);

    const speciesNames = names.filter((n) => n.language.name === lang);
    const generaNames = genera.filter((n) => n.language.name === lang);
    return Object.assign(species, {
      label: speciesNames[0].name,
      genus: generaNames[0].genus,
      color: color.name,
    });
  };

  const pokemonList = pokemons.results.map(async (item) => {
    const pokemon = await getPokemonData(item.url);
    await getAbilities(pokemon.abilities);
    await getTypes(pokemon.types);
    await getSpecies(pokemon.species);
    return pokemon;
  });
  return await Promise.all(pokemonList);
};

export const getPokemonData = async (url: string) => {
  const result = await fetch(url);
  return result.json();
};
