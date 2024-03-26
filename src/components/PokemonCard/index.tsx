import Image from "next/image";

import { PokemonProps } from "@/types/Pokemon";

import { StyledPokemonCard } from "./style";
import { Abilities } from "./Abilities";
import { Types } from "./Types";

export const PokemonCard = ({ pokemon }: { pokemon: PokemonProps }) => {
  const { abilities, species, sprites, types } = pokemon;

  return (
    <StyledPokemonCard color={species.color}>
      <div className="heading">
        <h4 className="title">{species.label}</h4>
        <p className="genus">
          <strong>Raça:</strong> {species.genus}
        </p>
      </div>
      <div className="content">
        <Image
          className="artwork"
          src={sprites.other["official-artwork"].front_default}
          alt={species.label}
          style={{ maxWidth: "100%", height: "auto" }}
          width={256}
          height={256}
          priority
        />
        <div className="data-wrapper">
          <Abilities abilities={abilities} />
          <Types types={types} />
        </div>
      </div>
    </StyledPokemonCard>
  );
};
