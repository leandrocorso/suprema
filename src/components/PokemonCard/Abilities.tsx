import classNames from "classnames";
import { EyeBlocked } from "@/components/Icons";

import { StyledAbilities } from "./abilities.style";

export const Abilities = () => {
  return (
    <StyledAbilities>
      <h5>Poderes</h5>
      <ul className="list">
        <li className={classNames("item")}>Poder 1</li>
        <li className={classNames("item", "isHidden")}>
          Poder 2 <EyeBlocked title="Habilidade oculta" />
        </li>
      </ul>
    </StyledAbilities>
  );
};
