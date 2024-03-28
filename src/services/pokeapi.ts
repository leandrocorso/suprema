import {
  PokemonLangProps,
  PokemonListProps,
  PokemonTypesProps,
  PokemonAbilityProps,
  PokemonAbilitiesProps,
} from "@/types/Pokemon";

const baseUrl = "https://pokeapi.co/api/v2";
const lang = "en";

type FetchPokemonProps = {
  attr?: string;
  itemId?: string | number;
  offset?: number;
  limit?: number;
  url?: string;
  getAll?: boolean;
};

// extract label names by language
const extractLabel = (names: PokemonLangProps[]) => {
  const extracted = names.filter(
    ({ language }: PokemonLangProps) =>
      language.name === lang || language.genus === lang
  );
  return extracted[0].name || extracted[0].genus;
};

// get every data from PokeAPI
export const fetchData = async (props?: FetchPokemonProps) => {
  const { attr, itemId, offset, limit, url } = props || {};

  let queryString: string;

  if (url) {
    queryString = url;
  } else {
    const pagOffset = offset && `offset=${offset}`;
    const pagLimit = limit && `limit=${limit}`;

    const pagination =
      pagOffset || pagLimit
        ? `?${[pagOffset, pagLimit].filter((i) => i).join("&")}`
        : "";

    queryString = [baseUrl, `${attr}${pagination}`, itemId]
      .filter((i) => i)
      .join("/");
  }

  const fetchData = await fetch(queryString);
  const data = await fetchData.json();
  return data;
};

// get pokemon list or by id
export const fetchPokemon = async (props?: FetchPokemonProps) => {
  const { results } = (await fetchData({
    attr: "pokemon",
    itemId: props?.itemId,
    offset: props?.offset || 0,
    limit: props?.limit || 4,
  })) as PokemonListProps;

  const pokemons = results.map(async (pokemon) => {
    const data = await fetchData({ url: pokemon.url });

    // Abilities label (poderes)
    await Promise.all(
      data.abilities.map(async (abilities: PokemonAbilitiesProps) => {
        const { names } = await fetchData({ url: abilities.ability.url });
        const abilityName = extractLabel(names);
        Object.assign(abilities.ability, { label: abilityName });
        return abilities;
      })
    );

    // Types label (elementos)
    await Promise.all(
      data.types.map(async (item: PokemonTypesProps) => {
        const { names } = await fetchData({ url: item.type.url });
        const typeName = extractLabel(names);
        Object.assign(item.type, { label: typeName });
        return item;
      })
    );

    // Species labels (nome, raça e cor)
    const { names, genera, color } = await fetchData({ url: data.species.url });

    const pokemonLabel = extractLabel(names);
    const genusLabel = extractLabel(genera);

    Object.assign(data, {
      species: {
        label: pokemonLabel,
        genus: genusLabel,
        color: color.name,
      },
    });

    return data;
  });

  return Promise.all(pokemons);
};

// get list of abilities
export const fetchAbilities = async (props?: FetchPokemonProps) => {
  const attr = "ability";
  let data = await fetchData({ attr, ...props });

  if (props?.getAll) {
    data = await fetchData({
      attr,
      offset: 0,
      limit: data.count,
    });
  }

  const abilities = await Promise.all(
    data.results.map(async (ability: PokemonAbilityProps) => {
      const { names } = await fetchData({ url: ability.url });
      const label = extractLabel(names);
      return Object.assign(ability, { label });
    })
  );

  if (props?.getAll) {
    return abilities.sort((a, b) => {
      return a.label < b.label ? -1 : 1;
    });
  }

  return data.results;
};
