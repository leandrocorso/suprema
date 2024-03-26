import { PokemonCard } from "@/components/PokemonCard";
import { Loading } from "@/components/Loading";

import { StyledPokemonListWrapper, StyledPokemonList } from "./style";
import { PokemonProps } from "@/types/Pokemon";
import { nanoid } from "nanoid";

export const PokemonList = ({
  pokemons,
  isLoading,
}: {
  pokemons: PokemonProps[];
  isLoading: boolean;
}) => {
  return (
    <StyledPokemonListWrapper>
      <StyledPokemonList>
        {pokemons?.map((pokemon) => (
          <PokemonCard key={nanoid()} pokemon={pokemon} />
        ))}
      </StyledPokemonList>
      {isLoading && <Loading />}
    </StyledPokemonListWrapper>
  );
};
