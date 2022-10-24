import Axios from "axios";

let zone = "metropole";

export const getJoursFeries = async (setter) => {
  let annee = new Date().getFullYear();
  const url = `https://calendrier.api.gouv.fr/jours-feries/${zone}/${annee}.json`;

  try {
    const response = await Axios.get(url);

    let dates = Object.keys(response.data);

    let holidayEvents = dates.map((date) => ({
      event_id: date,
      title: `Férié ${response.data[date]}`,
      start: new Date(`${date} 00:01`),
      end: new Date(`${date} 23:59`),
      disabled: false,
      color: "grey",
    }));
    setter([...holidayEvents]);
  } catch (error) {
    console.log(error);
    return null;
  }
};
