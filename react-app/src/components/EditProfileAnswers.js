import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

const EditProfileAnswers = ({question, i, questionObj}) => {

    const [edit, setEdit] = useState(false)
    const sessionUser = useSelector(state => state.session.user)

    const answerId = sessionUser?.answers[i].id

    return (
        <>

            <tr>
                <td>{question.Question}</td>
                { !edit &&
                <>
                <td>{question.Options[+sessionUser?.answers[i]?.content]}</td>
                <td><button onClick={()=>setEdit(true)}>Edit</button></td>
                </>
                }
                {
                    edit &&
                    <>
                    <td>
                        <select>
                            {Object.values(question.Options).map((option,i)=>(
                                    <option value={i} key={i}>{option}</option>
                            ))}

                        </select>
                    </td>
                    <td><button onClick={()=>setEdit(false)}>Cancel</button></td>
                    </>
                }

            </tr>

        </>

    );
}

export default EditProfileAnswers
