import React from "react";
import "./service.css";

const Service = ({ groupes, nomGroupe }) => {
  return (
    <li className="service">
      <h2 className="service__title">
        {nomGroupe.replace("Filtre - Service ", "")}
      </h2>
      {groupes
        .filter((group) => group.groupe === nomGroupe)
        .map((el) => (
          <div
            className="service__element"
            style={{ color: el.couleur }}
            key={el.id}
          >
            {el.nom}
          </div>
        ))}
    </li>
  );
};

export default Service;
