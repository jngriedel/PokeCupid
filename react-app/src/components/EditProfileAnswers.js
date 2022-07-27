import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { rehydrateState } from '../store/session';

const EditProfileAnswers = ({question, i, questionObj}) => {

    const [edit, setEdit] = useState(false)
    const sessionUser = useSelector(state => state.session.user)
    const [answer, setAnswer] = useState(question.Options[+sessionUser?.answers[i]?.content])
    const answersObj = Object.values(sessionUser.answers).sort((a, b) => (a.quesitonId > b.questionId) ? 1 : -1)
    const answerId = answersObj[i].id
    const dispatch = useDispatch()

    const changeAnswer = async()=>{
        await fetch(`/api/users/answers/${answerId}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({content:answer}),
          })
          .then((res)=>{
            dispatch(rehydrateState(sessionUser.id))

          })
          .then((res)=>{
            setEdit(false)
          })




    }


    return (
        <>
            <tbody>
            <tr>
                <td>{question.Question}</td>
                { !edit &&
                <>
                <td>{question.Options[+answersObj[i]?.content]}</td>
                <td><button onClick={()=>setEdit(true)}>Edit</button></td>
                </>
                }
                {
                    edit &&
                    <>
                    <td>
                        <select onChange={(e)=>{setAnswer(e.target.value)}}>
                            {Object.values(question.Options).map((option,i)=>(
                                    <option value={i} key={i}>{option}</option>
                            ))}

                        </select>
                    </td>
                    <td><button onClick={()=>setEdit(false)}>Cancel</button>
                    <button onClick={changeAnswer}>Save</button></td>
                    </>
                }

            </tr>
            </tbody>

        </>

    );
}

export default EditProfileAnswers
