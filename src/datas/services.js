// sql request =
// Select A.user_id, A.firstname, A.lastname, C.group_desc From users A inner join usergroup_content B, usergroups C where A.user_id = B.user_id and B.group_id = C.group_id
export let users = [
  {
    user_id: "70590a02a99e1c061eac0318af82a7aea",
    firstname: "Jeff",
    lastname: "Tuche",
    group_desc: "Filtre - Service Conducteurs de travaux",
  },
  {
    user_id: "70590a02a99e1c061eac0318af82a7aeah",
    firstname: "TEST",
    lastname: "TEST",
    group_desc: "Filtre - Service Conducteurs de travaux",
  },
  {
    user_id: "70590a02a99e1c061eac0318af82a7aeb",
    firstname: "Dumé",
    lastname: "Tulupiantu",
    group_desc: "Filtre - Service Fabrication",
  },
  {
    user_id: "70590a02a99e1c061eac0318af82a7aec",
    firstname: "Ahmed",
    lastname: "Zavvia",
    group_desc: "Filtre - Service Magasinier",
  },
  {
    user_id: "70590a02a99e1c061eac0318af82a7aed",
    firstname: "Helene",
    lastname: "Vaillant",
    group_desc: "Filtre - Service Pose",
  },
  {
    user_id: "70590a02a99e1c061eac0318af82a7aee",
    firstname: "Pierre",
    lastname: "Paoletti",
    group_desc: "Filtre - Service Administratif",
  },
  {
    user_id: "70590a02a99e1c061eac0318af82a7aef",
    firstname: "Jimmy",
    lastname: "Hendrix",
    group_desc: "Filtre - Service Bureau d'étude",
  },
  {
    user_id: "70590a02a99e1c061eac0318af82a7aeg",
    firstname: "Johnny",
    lastname: "Cash",
    group_desc: "Filtre - Service Calculateur",
  },
  {
    user_id: "70590a02a99e1c061eac0318af82a7aeh",
    firstname: "Brian",
    lastname: "Setzer",
    group_desc: "Filtre - Service Chargé d'affaires",
  },
];
