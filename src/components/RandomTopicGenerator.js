import React, { useState } from "react";
import { securityTopics } from "../data";

const RandomTopicGenerator = () => {
  const [currentTopic, setCurrentTopic] = useState(0);
  // console.log("current topic: " + currentTopic);

  const showNextTopic = () => {
    if (currentTopic === securityTopics.length - 1) {
      setCurrentTopic(0);
    } else {
      setCurrentTopic((prevState) => prevState + 1);
    }

    document.querySelector(".random-topic").textContent =
      securityTopics[currentTopic];
  };

  return (
    <section className="random-topic-generator">
      <h2>Random Topic Generator</h2>
      <p className="random-topic">{securityTopics[currentTopic]}</p>
      <button onClick={showNextTopic} className="randomtopic-btn">
        Generate topic
      </button>
    </section>
  );
};

export default RandomTopicGenerator;
