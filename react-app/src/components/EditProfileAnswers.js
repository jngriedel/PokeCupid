import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { rehydrateState } from "../store/session";

const EditProfileAnswers = ({ question, i, questionObj }) => {
  const [edit, setEdit] = useState(false);
  const sessionUser = useSelector((state) => state.session.user);
  const answersUnsorted = sessionUser.answers;
  const answersObj = answersUnsorted.sort(
    (a, b) => a.questionId - b.questionId
  );

  // const [answer, setAnswer] = useState(question.Options[+sessionUser?.answers[i]?.content])
  const [answer, setAnswer] = useState(+answersObj[i].content);
  const answerId = answersObj[i].id;

  const dispatch = useDispatch();

  const changeAnswer = async () => {
    await fetch(`/api/users/answers/${answerId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: answer }),
    })
      .then((res) => {
        dispatch(rehydrateState(sessionUser.id));
      })
      .then((res) => {
        setEdit(false);
      });
  };

  return (
    <>
      <tbody>
        <tr>
          <td className="profile-question">{question.Question}</td>
          {!edit && (
            <>
              <td className="profile-answers">
                {question.Options[+answersObj[i]?.content]}
              </td>
              <td>
                <button className="edit-answers" onClick={() => setEdit(true)}>
                  <i className="fa-solid fa-pencil"></i>
                </button>
              </td>
            </>
          )}
          {edit && (
            <>
              <td>
                <select
                  value={answer}
                  onChange={(e) => {
                    setAnswer(e.target.value);
                  }}
                >
                  {Object.values(question.Options).map((option, i) => (
                    <option value={i} key={i}>
                      {option}
                    </option>
                  ))}
                </select>
              </td>
              <td>
                <button className="answer-submit" onClick={changeAnswer}>
                  <i className="fa-solid fa-check"></i>
                </button>
                <button
                  className="answer-cancel"
                  onClick={() => setEdit(false)}
                >
                  <i className="fa-solid fa-x"></i>
                </button>
              </td>
            </>
          )}
        </tr>
      </tbody>
    </>
  );
};

export default EditProfileAnswers;
