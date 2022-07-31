// import { useState } from "react";

// import { useDispatch } from "react-redux";

const UserAnswers = ({ question, i, user }) => {
  const answersUnsorted = user.answers;
  const answersObj = answersUnsorted.sort(
    (a, b) => a.questionId - b.questionId
  );



  // const dispatch = useDispatch();

  return (
    <>
      <tbody>
        <tr>
          <td className="profile-question">{question.Question}</td>

          <>
            <td className="profile-answers">
              {question.Options[+answersObj[i]?.content]}
            </td>
          </>
        </tr>
      </tbody>
    </>
  );
};

export default UserAnswers;
