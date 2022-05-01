import faker from "faker";

const createName = () => {
  const first = faker.name.firstName();
  const last = faker.name.lastName();
  return first + " " + last;
};

const getImage = () => {
  return "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
};

const officers = [
  {
    name: createName(),
    id: 1,
    post: "Main Lobby",
    avatar: getImage(),
    bio: "This is the Officer's BIO"
  },
  {
    name: createName(),
    id: 2,
    post: "Rear Entrance",
    avatar: getImage(),
    bio: "This is the Officer's BIO"
  },
  {
    name: createName(),
    id: 3,
    post: "Side Gate",
    avatar: getImage(),
    bio: "This is the Officer's BIO"
  },
  {
    name: createName(),
    id: 4,
    post: "5th Floor Entrance",
    avatar: getImage(),
    bio: "This is the Officer's BIO"
  },
  {
    name: createName(),
    id: 5,
    post: "Parking Garage",
    avatar: getImage(),
    bio: "This is the Officer's BIO"
  },
  {
    name: createName(),
    id: 6,
    post: "Sending Room",
    avatar: getImage(),
    bio: "This is the Officer's BIO"
  }
];

const supTasks = [
  {
    title: "Tell " + createName() + " to sign paperwork",
    completed: false,
    id: 1
  },
  {
    title: "Help Manager with New hire Orientation",
    completed: false,
    id: 2
  },
  {
    title: "Establish Training for next 1st Watch Shift",
    completed: false,
    id: 3
  },
  {
    title: "Load PPE into back / Admin office with Manager",
    completed: false,
    id: 4
  }
];

const securityTopics = [
  "Wanding visitors correctly",
  "AIDET & AHEART Review",
  "Responding to critical incidents",
  "Handling Code Red responses, Fire protocols",
  "Greet passengers with respect",
  "Completing Shift Activity Reports properly"
];

const sites = [
  {
    site: faker.company.companyName(),
    supervisor: createName(),
    totalOfficers: 20,
    security: "unarmed",
    hours: "0600 - 1800"
  },
  {
    site: faker.company.companyName(),
    supervisor: createName(),
    totalOfficers: 13,
    security: "armed",
    hours: "0430 - 1600"
  },
  {
    site: faker.company.companyName(),
    supervisor: createName(),
    totalOfficers: 13,
    security: "armed",
    hours: "0430 - 1600"
  }
];

export { officers, supTasks, securityTopics, sites };
