import React, { useState } from "react";
import { securityTopics } from "../data";

const SecurityTopicGenerator = () => {
  const [currentTopic, setCurrentTopic] = useState(0);
  // console.log("current topic: " + currentTopic);

  const showNextTopic = () => {
    if (currentTopic === securityTopics.length - 1) {
      setCurrentTopic(0);
    } else {
      setCurrentTopic((prevState) => prevState + 1);
    }

    document.querySelector(".security-topic").textContent =
      securityTopics[currentTopic];
  };

  return (
    <section className="security-topic-generator">
      <h2>Security Topic Generator</h2>
      <p className="security-topic">{securityTopics[currentTopic]}</p>
      <button onClick={showNextTopic} className="securitytopic-btn">
        Generate topic
      </button>
    </section>
  );
};

export default SecurityTopicGenerator;
