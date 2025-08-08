import React, { createContext, useState } from "react";

// Create a Context for the quiz
export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const quizData = [
    {
      question: "How many rizzlers can a Sigma grind before touching grass?",
      options: ["0", "3", "Infinite", "Only on Wednesdays"],
      answer: "Infinite",
    },
    {
      question: "What is the national animal of Ohio?",
      options: ["Crocodile", "Shrek", "Ford F-150", "Giant Eagle"],
      answer: "Shrek",
    },
    {
      question: "What’s the scientific name for a Skibidi Toilet?",
      options: ["Toiletus Sigma", "Plumbus Maximus", "Gigachadius Porcelainus", "Flushy McFlushface"],
      answer: "Gigachadius Porcelainus",
    },
    {
      question: "If NPC walks into a wall for 5 minutes, what do you do?",
      options: ["Join them", "Call tech support", "Hit alt+F4", "Record for TikTok"],
      answer: "Record for TikTok",
    },
    {
      question: "What sound does the average Discord mod make?",
      options: ["Oink", "Meow", "Breathing heavily into mic", "Rizz Rizz Rizz"],
      answer: "Breathing heavily into mic",
    },
    {
      question: "What is 2 + 2?",
      options: ["4", "Fish", "Ohio", "Yes"],
      answer: "Yes",
    },
    {
      question: "What is the only cure for being cringe?",
      options: ["Stop", "Become based", "Touch grass", "Eat 47 hotdogs"],
      answer: "Touch grass",
    },
  ];

  const initialAnswers = quizData.map(() => null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState(initialAnswers);

  const setAnswerForQuestion = (index, answer) => {
    setUserAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[index] = answer;
      return newAnswers;
    });
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers(quizData.map(() => null));
  };

  return (
    <QuizContext.Provider
      value={{
        quizData,
        currentQuestion,
        setCurrentQuestion,
        userAnswers,
        setAnswerForQuestion,
        resetQuiz,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
