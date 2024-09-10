import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const QuestionList = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const api = await fetch("/api/question/all", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await api?.json();
        console.log(data?.questions);
        setQuestions(data?.questions);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchQuestions();
  }, []);

  const handleCheckboxChange = (id) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((question) =>
        question.id === id
          ? { ...question, checked: !question.checked }
          : question
      )
    );
  };

  return (
    <div className=" mx-auto p-4  text-xl">
      <div className="space-y-4">
        {questions.length > 0 &&
          questions.map((question) => (
            <div
              key={question._id}
              className={`flex items-center justify-between p-4 border rounded-lg transition-colors duration-300 ${
                question?.checked
                  ? "bg-green-100 text-green-800"
                  : "bg-white text-gray-800"
              }`}
            >
              <div className="title">
                <input
                  type="checkbox"
                  checked={question?.checked || false}
                  onChange={() => handleCheckboxChange(question.id)}
                  className="mr-4"
                />
                <Link
                  className="hover:text-blue-600 hover:opacity-70 hover:shadow-sm"
                  to={question.link_lt}
                >
                  {question.title}
                </Link>
              </div>
              <div className="buttons">
                <Link className="mx-4" to={question.link_yt}>
                  {" "}
                  <i className="fa-brands fa-youtube text-red-600"></i>
                </Link>
                <Link className="mx-4" to={"/write"}>
                  {" "}
                  <i className="fa-solid fa-plus"></i>
                </Link>
                <Link className="mx-4" to={"/write"}>
                  {" "}
                  <i className="fa-solid fa-pen-nib"></i>
                </Link>
                <Link className="mx-4" to={`/question/${question._id}`}>
                  {" "}
                  <i className="fa-regular fa-comment"></i>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default QuestionList;
