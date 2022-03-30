import React, { useState, useEffect } from "react";


const QuestionList = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then((response) => response.json())
    .then((data) => {
      setQuestions(data.question);
    });
  }, []);
  return (
    //console.log(data)
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        <li>{setQuestions.map((question) => question.prompt)}</li>
      </ul>
    </section>
    
  );


export default QuestionList;
