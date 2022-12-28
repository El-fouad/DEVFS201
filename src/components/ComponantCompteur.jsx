import React from "react";
import { useState } from "react";
import Button from "./Button";
import { Title } from "./title";
const ComponantCompteur = () => {
  const [Compteur, SetCompteur] = useState(0);

  const Increment = () => {
    SetCompteur(Compteur + 1);
  };
  const Decrement = () => {
    SetCompteur(Compteur - 1);
  };
  return (
    <>
      <Title title="Composant Compteur" />
      <p>Compteur : {Compteur}</p>
      <Button name="Incrementer" onClick={Increment} />
      <Button name="Decrementer" onClick={Decrement} />
    </>
  );
};

export default ComponantCompteur;
