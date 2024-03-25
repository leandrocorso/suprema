import Image from "next/image";
import { StyledPokemonCard } from "./pokemonCard.style";
import { Abilities } from "./Abilities";
import { Types } from "./Types";

export const PokemonCard = () => {
  return (
    <StyledPokemonCard>
      <div className="heading">
        <h4 className="title">Bulbasaur</h4>
        <p className="genus">
          <strong>Raça:</strong> Bicho doido
        </p>
      </div>
      <div className="content">
        <Image
          className="artwork"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
          alt="Bulbsaur"
          style={{ maxWidth: "100%", height: "auto" }}
          width={256}
          height={256}
          priority
        />
        <div className="data-wrapper">
          <Abilities />
          <Types />
        </div>
      </div>
    </StyledPokemonCard>
  );
};
