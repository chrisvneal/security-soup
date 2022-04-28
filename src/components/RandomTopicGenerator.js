import React, { useState, useEffect } from "react";
import { securityTopics } from "../data";

const RandomTopicGenerator = () => {
  const [currentTopic, setCurrentTopic] = useState(0);

  const generateRandomTopic = () => {
    setCurrentTopic(Math.floor(Math.random() * securityTopics.length));

    document.querySelector(".random-topic").textContent =
      securityTopics[currentTopic];
  };

  return (
    <section className="random-topic-generator">
      <h2>Random Topic Generator</h2>
      <p className="random-topic">{securityTopics[currentTopic]}</p>
      <button onClick={generateRandomTopic} className="randomtopic-btn">
        Generate topic
      </button>
    </section>
  );
};

export default RandomTopicGenerator;
