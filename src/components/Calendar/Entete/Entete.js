import React from "react";
import "./entete.css";

const Entete = () => {
  const year = new Date().getFullYear();
  // get the week number
  const months = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Aout",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ];
  return (
    <div className="entete">
      {months.map((month, index) => (
        <div className="month">{month}</div>
      ))}
    </div>
  );
};

export default Entete;
