import faker from "faker";

const createName = () => {
  const first = faker.name.firstName();
  const last = faker.name.lastName();
  return first + " " + last;
};

const generateImage = () => {
  // return "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
  const num = Math.floor(Math.random() * 8 + 1);
  return `/images/avatars/avatar-${num}.png`;
};

const officers = [
  {
    name: createName(),
    id: 1,
    post: "Main Lobby",
    avatar: generateImage(),
    bio: faker.lorem.paragraph(),
  },
  {
    name: createName(),
    id: 2,
    post: "Rear Entrance",
    avatar: generateImage(),
    bio: faker.lorem.paragraph(),
  },
  {
    name: createName(),
    id: 3,
    post: "Side Gate",
    avatar: generateImage(),
    bio: faker.lorem.paragraph(),
  },
  {
    name: createName(),
    id: 4,
    post: "5th Floor Entrance",
    avatar: generateImage(),
    bio: faker.lorem.paragraph(),
  },
  {
    name: createName(),
    id: 5,
    post: "Parking Garage",
    avatar: generateImage(),
    bio: faker.lorem.paragraph(),
  },
  {
    name: createName(),
    id: 6,
    post: "Sending Room",
    avatar: generateImage(),
    bio: faker.lorem.paragraph(),
  },
];

const securityTopics = [
  "Wanding visitors correctly",
  "AIDET & AHEART Review",
  "Responding to critical incidents",
  "Handling Code Red responses, Fire protocols",
  "Greet passengers with respect",
  "Completing Shift Activity Reports properly",
];

const sites = [
  {
    site: faker.company.companyName(),
    supervisor: createName(),
    totalOfficers: 20,
    security: "unarmed",
    hours: "0600 - 1800",
  },
  {
    site: faker.company.companyName(),
    supervisor: createName(),
    totalOfficers: 13,
    security: "armed",
    hours: "0430 - 1600",
  },
  {
    site: faker.company.companyName(),
    supervisor: createName(),
    totalOfficers: 13,
    security: "armed",
    hours: "0430 - 1600",
  },
];

export { officers, securityTopics, sites };
