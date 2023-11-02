import React from "react";
import s from "./card.module.scss";
import { Mod, Native } from "components/images";

const Cards = ({ data }) => {
  return (
    <div className={s.card}>
      <img src={data.thumbnailWideLink} alt="" />
      <div className={s.desc}>
        {data.isMod === true ? <Mod /> : <Native />}
        {data.name}
      </div>
    </div>
  );
};

export default Cards;
