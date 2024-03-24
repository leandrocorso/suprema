import Image from "next/image";
import classNames from "classnames";

import { StyledTypes } from "./types.style";

export const Types = () => {
  return (
    <StyledTypes>
      <h5 className="title">Elementos</h5>
      <ul className="list">
        <li className={classNames("item", "grass")}>
          <span>
            <Image src="/icons/grass.svg" alt="Grass" width={20} height={20} />
            <span>Grass</span>
          </span>
        </li>
        <li className={classNames("item", "poison")}>
          <span>
            <Image
              src="/icons/poison.svg"
              alt="Poison"
              width={20}
              height={20}
            />
            <span>Poison</span>
          </span>
        </li>
      </ul>
    </StyledTypes>
  );
};
