import React, { useState } from "react";
import { securityTopics } from "../data";

const SecurityTopicGenerator = () => {
  const [securityTopic, setSecurityTopic] = useState(0);

  const showNextTopic = () => {
    if (securityTopic === securityTopics.length - 1) {
      setSecurityTopic(0);
    } else {
      setSecurityTopic((prevState) => prevState + 1);
    }

    document.querySelector(".security-topic").textContent = securityTopic;
  };

  return (
    <section className="security-topic-generator">
      <h2>Security Topic Generator</h2>
      <p className="security-topic">{securityTopics[securityTopic]}</p>
      <button onClick={showNextTopic} className="securitytopic-btn">
        Generate topic
      </button>
    </section>
  );
};

export default SecurityTopicGenerator;
