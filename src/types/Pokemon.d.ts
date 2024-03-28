export type PokemonAbilityProps = {
  label: string;
  name: string;
  url: string;
};

export type PokemonAbilitiesProps = {
  ability: PokemonAbilityProps;
  is_hidden: boolean;
};

export type PokemonSpeciesProps = {
  color: string;
  genus: string;
  label: string;
  name: string;
  url: string;
};

export type PokemonSpritesProps = {
  other: {
    "official-artwork": {
      front_default: string;
    };
  };
};

export type PokemonTypesProps = {
  type: {
    label: string;
    name: string;
    url: string;
  };
};

export type PokemonLangProps = {
  language: {
    name: string;
    url: string;
    genus: string;
  };
  genus: string;
  name: string;
};

export type PokemonListProps = {
  next: string;
  results: { name: string; url: string }[];
};

export type PokemonProps = {
  id: number;
  name: string;
  abilities: PokemonAbilitiesProps[];
  species: PokemonSpeciesProps;
  sprites: PokemonSpritesProps;
  types: PokemonTypesProps[];
};
