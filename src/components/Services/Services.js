import React from "react";
import Service from "../Service/Service";
import "./services.css";

const Services = ({ groupes }) => {
  const getNomGroupes = () => {
    return Array.from(new Set(groupes.map((group) => group.groupe)));
  };

  return (
    groupes.length && (
      <ul className="services">
        {getNomGroupes().map((nomGroupe) => (
          <Service key={nomGroupe} nomGroupe={nomGroupe} groupes={groupes} />
        ))}
      </ul>
    )
  );
};

export default Services;
