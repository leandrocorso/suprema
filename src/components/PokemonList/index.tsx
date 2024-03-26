import { PokemonCard } from "@/components/PokemonCard";

import { StyledPokemonList } from "./style";
import { PokemonProps } from "@/types/Pokemon";
import { nanoid } from "nanoid";

export const PokemonList = ({ pokemons }: { pokemons: PokemonProps[] }) => {
  console.log(pokemons);
  return (
    <StyledPokemonList>
      {pokemons?.map((pokemon) => (
        <PokemonCard key={nanoid()} pokemon={pokemon} />
      ))}
    </StyledPokemonList>
  );
};
