import React from "react";
import ReactDOM from "react-dom";
import Accordion from "./components/Accordion.jsx";

export default function App() {
  const accordionData = [
    {
      question: "How many team members can I invite?",
      answer:
        "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
    },
    {
      question: "What is the maximum file upload size?",
      answer:
        "No more than 2GB. All files in your account must fit your allotted storage space.",
    },
    {
      question: "How do I reset my password?",
      answer:
        "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
    },
    {
      question: "Can I cancel my subscription?",
      answer:
        "Yes! Send us a message and we’ll process your request no questions asked.",
    },
    {
      question: "Do you provide additional support?",
      answer:
        "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
    },
  ];

  return (
    <div className="outer">
      <img
        className="background__box"
        src="./images/illustration-box-desktop.svg"
      />
      <div className="wrapper">
        <div className="background">
          <img
            className="background__woman"
            src="./images/illustration-woman-online-desktop.svg"
          />
        </div>

        <div className="accordion">
          <div className="accordion__title">FAQ</div>
          <div className="accordion__body">
            {accordionData.map((element, i) => {
              return (
                <Accordion
                  id={i}
                  key={i}
                  question={element.question}
                  answer={element.answer}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
