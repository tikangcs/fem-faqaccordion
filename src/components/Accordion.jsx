import React, { useState } from "react";

export default function Accordion({ id, question, answer }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion__item">
      <a className="accordion__question--wrapper">
        <div
          id={id}
          className={
            isActive ? "accordion__question--bold" : "accordion__question"
          }
          onClick={(e) => {
            console.log(e.currentTarget);
            setIsActive(!isActive);
          }}
        >
          {question}
        </div>
        <img
          className={isActive ? "accordion__arrow--active" : "accordion__arrow"}
          src="../images/icon-arrow-down.svg"
          onClick={() => setIsActive(!isActive)}
        />
      </a>
      {isActive && <div className="accordion__answer">{answer}</div>}
    </div>
  );
}
