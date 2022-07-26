import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

const EditProfileAnswers = ({question, i, questionObj}) => {

    const [edit, setEdit] = useState(false)
    const sessionUser = useSelector(state => state.session.user)



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
                        <ul>
                            {Object.values(question.Options).map((option,i)=>(
                                    <li  key={i}>{option}</li>
                            ))}

                        </ul>
                    </td>
                    <td><button onClick={()=>setEdit(false)}>Cancel</button></td>
                    </>
                }

            </tr>

        </>

    );
}

export default EditProfileAnswers
