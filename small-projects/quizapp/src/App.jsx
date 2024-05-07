import { useState } from "react";
import "./App.css";

function App() {
  const ALL_QUESTIONS = [
    {
      _id: 100,
      question: "What does HTML stand for ?",
      answer: "Hypertext Markup Language",
      options: [
        "Hypertext transfer protocol",
        "Hyperlink and Text Markup Language",
        "Hypertext Markup Language",
        "Home Tool markup language",
      ],
    },
    {
      _id: 101,
      question: "What is the primary purpose of CSS?",
      answer: "Styling web pages",
      options: [
        "Handling server-side requests",
        "Styling web pages",
        "Managing databases",
        "Creating interactive games",
      ],
    },
    {
      _id: 102,
      question: "What is the role of JavaScript in web development?",
      answer: "Adding interactivity and dynamic content",
      options: [
        "Styling web pages",
        "Handling server-side requests",
        "Adding interactivity and dynamic content",
        "Creating database schemas",
      ],
    },
    {
      _id: 103,
      question: "What does the acronym SQL stand for?",
      answer: "Structured Query Language",
      options: [
        "Simple Query Language",
        "Structured Question Language",
        "Server Quality Language",
        "Structured Query Language",
      ],
    },
    {
      _id: 104,
      question:
        "Which programming language is known for its use in machine learning and data science?",
      answer: "Python",
      options: ["Java", "Python", "C++", "Ruby"],
    },
    {
      _id: 105,
      question: "What is the purpose of the 'git' version control system?",
      answer: "Tracking changes in code and collaborating with others",
      options: [
        "Building user interfaces",
        "Tracking changes in code and collaborating with others",
        "Creating databases",
        "Optimizing website performance",
      ],
    },
    {
      _id: 106,
      question:
        "What is the difference between 'let', 'const', and 'var' in JavaScript?",
      answer: "Scoping rules and reassignment capabilities",
      options: [
        "Data types they support",
        "Scoping rules and reassignment capabilities",
        "Their popularity among developers",
        "Their length in characters",
      ],
    },
    {
      _id: 107,
      question: "What is the purpose of the 'npm' package manager?",
      answer: "Managing and sharing JavaScript code",
      options: [
        "Creating user interfaces",
        "Managing and sharing JavaScript code",
        "Optimizing database performance",
        "Writing server-side logic",
      ],
    },
    {
      _id: 108,
      question: "What does the acronym API stand for?",
      answer: "Application Programming Interface",
      options: [
        "Automated Program Integration",
        "Application Programming Interface",
        "Advanced Protocol Invocation",
        "Automated Package Installation",
      ],
    },
    {
      _id: 109,
      question:
        "What is the primary use of the 'fetch' function in JavaScript?",
      answer: "Making asynchronous HTTP requests",
      options: [
        "Rendering UI components",
        "Sorting arrays",
        "Making asynchronous HTTP requests",
        "Creating animations",
      ],
    },
    {
      _id: 110,
      question: "What is the purpose of the 'localStorage' in web development?",
      answer: "Storing data locally in the browser",
      options: [
        "Communicating with servers",
        "Storing data locally in the browser",
        "Handling user authentication",
        "Optimizing code performance",
      ],
    },
    {
      _id: 111,
      question: "What is the difference between '=='' and '===' in JavaScript?",
      answer:
        "'===' checks both value and type equality, while '==' checks only value equality",
      options: [
        "'===' checks both value and type equality, while '==' checks only value equality",
        "'===' is used for assignment, while '==' is used for comparison",
        "'===' is a deprecated syntax, while '==' is the modern way of comparison",
        "'===' and '==' are interchangeable and can be used interchangeably",
      ],
    },
    {
      _id: 112,
      question: "What is the purpose of the 'map' function in JavaScript?",
      answer: "Iterating over an array and transforming its elements",
      options: [
        "Creating a new array with specified values",
        "Iterating over an array and transforming its elements",
        "Sorting an array in descending order",
        "Filtering out specific elements from an array",
      ],
    },
    {
      _id: 113,
      question: "What is a callback function in JavaScript?",
      answer:
        "A function passed as an argument to another function, which will be invoked later",
      options: [
        "A function that calls another function",
        "A function that returns another function",
        "A function that is executed immediately",
        "A function passed as an argument to another function, which will be invoked later",
      ],
    },
    {
      _id: 114,
      question:
        "What is the purpose of the 'try...catch' statement in JavaScript?",
      answer: "Handling exceptions and preventing program crashes",
      options: [
        "Defining custom functions",
        "Handling asynchronous operations",
        "Optimizing code performance",
        "Handling exceptions and preventing program crashes",
      ],
    },
  ];

  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(ALL_QUESTIONS[index]);
  const [score, setScore] = useState(0);
  const [attempt, setAttempt] = useState(1);

  const checkAnswer = (e, userAnswer) => {
    if (attempt === ALL_QUESTIONS.length) {
      alert(`You scored : ${score} out of ${attempt}`);
      return;
    }

    // check whether answer is correct or not
    if (userAnswer === question.answer) {
      // update score
      setScore(score + 1);

      e.target.classList.add("correct");
    }

    e.target.classList.add("incorrect");
  };

  const next = () => {
    setAttempt(attempt + 1);

    if (index >= ALL_QUESTIONS.length - 1) {
      setIndex(0);
      setQuestion(ALL_QUESTIONS[0]);
      return;
    }

    setIndex(index + 1);
    setQuestion(ALL_QUESTIONS[index + 1]);
  };

  return (
    <div className="app">
      <h1>Quiz App</h1>

      <div className="container">
        <h3>
          {index + 1} {question.question}
        </h3>

        <ul>
          {question.options.map((option) => (
            <li
              key={question._id + option}
              onClick={(e) => {
                checkAnswer(e, option);
              }}
            >
              {option}
            </li>
          ))}
        </ul>

        <button onClick={next}>Next</button>
      </div>
    </div>
  );
}

export default App;
