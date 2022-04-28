import React from "react";
import { securityTopics } from "../data";

const RandomTopicGenerator = () => {
  const generateRandomTopic = () => {
    let randNum = Math.floor(Math.random() * securityTopics.length);

    const randomTopic = securityTopics[randNum];

    document.querySelector(".random-topic").textContent = randomTopic;
  };
  return (
    <section className="random-topic-generator">
      <h2>Random Topic Generator</h2>
      <p className="random-topic">
        Proper wanding of visitors at Echo Post especially if they are a pain in
        the ass
      </p>
      <button onClick={generateRandomTopic} className="randomtopic-btn">
        Generate topic
      </button>
    </section>
  );
};

export default RandomTopicGenerator;
