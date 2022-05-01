import faker from "faker";

const createName = (first, last) => {
  return first + " " + last;
};

const officers = [
  {
    name: createName(faker.name.firstName(), faker.name.lastName()),
    id: 1,
    post: "Main Lobby"
  },
  {
    name: createName(faker.name.firstName(), faker.name.lastName()),
    id: 2,
    post: "Rear Entrance"
  },
  {
    name: createName(faker.name.firstName(), faker.name.lastName()),
    id: 3,
    post: "Side Gate"
  },
  {
    name: createName(faker.name.firstName(), faker.name.lastName()),
    id: 4,
    post: "5th Floor Entrance"
  },
  {
    name: createName(faker.name.firstName(), faker.name.lastName()),
    id: 5,
    post: "Parking Garage"
  },
  {
    name: createName(faker.name.firstName(), faker.name.lastName()),
    id: 6,
    post: "Sending Room"
  }
];

const supTasks = [
  {
    title: "Tell Morgan Freeman to sign paperwork",
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
  "Wanding visitors properly",
  "Greeting people in the main lobby",
  "Responding to critical incidents",
  "Handling fire protocols",
  "Talking to passengers",
  "Greet passengers with respect"
];

let sites = [
  {
    site: "Rancho Relaxo",
    supervisor: "Armani Vuitton",
    totalOfficers: 20,
    security: "unarmed",
    hours: "0600 - 1800"
  },
  {
    site: "BioWaste Management",
    supervisor: "Champion Riviera",
    totalOfficers: 13,
    security: "armed",
    hours: "0430 - 1600"
  }
];

export { officers, supTasks, securityTopics, sites };
