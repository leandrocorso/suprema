export type PokemonAbilitiesProps = {
  ability: {
    label: string;
    name: string;
    url: string;
  };
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
    url: URL;
  };
};

export type PokemonProps = {
  id: number;
  name: string;
  abilities: PokemonAbilitiesProps[];
  species: PokemonSpeciesProps;
  sprites: PokemonSpritesProps;
  types: PokemonTypesProps[];
};
