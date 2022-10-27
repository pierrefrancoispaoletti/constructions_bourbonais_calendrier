import { fr } from "date-fns/locale";

export const config = {
  view: "week",
  height: "1500",
  locale: fr,
  month: {
    weekDays: [0, 1, 2, 3, 4],
    weekStartOn: 1,
    startHour: 9,
    endHour: 17,
  },
  week: {
    weekDays: [0, 1, 2, 3, 4],
    weekStartOn: 1,
    startHour: 9,
    endHour: 17,
    step: 60,
  },
  day: {
    startHour: 9,
    endHour: 17,
    step: 60,
  },
  editable: false,
  deletable: false,
  draggable: false,
  translations: {
    navigation: {
      month: "Mois",
      week: "Semaine",
      day: "Jour",
      today: "Aujourd'hui",
    },
    form: {
      addTitle: "Ajouter",
      editTitle: "Editer",
      confirm: "Confirmer",
      delete: "Supprimer",
      cancel: "Annuler",
    },
    event: {
      title: "Titre",
      start: "Début",
      end: "Fin",
    },
    moreEvents: "Voir plus",
  },
  hourFormat: "24",
};
