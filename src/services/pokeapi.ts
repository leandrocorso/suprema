import {
  PokemonAbilitiesProps,
  PokemonLangProps,
  PokemonListProps,
  PokemonSpeciesProps,
  PokemonTypesProps,
} from "@/types/Pokemon";

const baseUrl = "https://pokeapi.co/api/v2";
const lang = "en";

export const getPokemons = async (offset: number = 0, limit: number = 4) => {
  const url = `${baseUrl}/pokemon?offset=${offset}&limit=${limit}`;
  const result = await fetch(url);
  const pokemons: PokemonListProps = await result.json();

  // Abilities (poderes)
  const getAbilities = async (abilities: PokemonAbilitiesProps[]) => {
    const data = abilities.map(async (item) => {
      const { names } = await getPokemonData(item.ability.url);
      const abilityNames = names.filter(
        (n: PokemonLangProps) => n.language.name === lang
      );
      return Object.assign(item.ability, { label: abilityNames[0].name });
    });
    return await Promise.all(data);
  };

  // Types (elementos)
  const getTypes = async (types: PokemonTypesProps[]) => {
    const data = types.map(async (item) => {
      const { names } = await getPokemonData(item.type.url);
      const typeNames = names.filter(
        (n: PokemonLangProps) => n.language.name === lang
      );
      return Object.assign(item.type, { label: typeNames[0].name });
    });
    return await Promise.all(data);
  };

  // Species: name | genus | color (nome | raça | cor)
  const getSpecies = async (species: PokemonSpeciesProps) => {
    const { names, genera, color } = await getPokemonData(species.url);

    const speciesNames = names.filter(
      (n: PokemonLangProps) => n.language.name === lang
    );
    const generaNames = genera.filter(
      (n: PokemonLangProps) => n.language.name === lang
    );
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
