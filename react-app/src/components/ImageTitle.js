import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { editComment, removeComment,} from '../../store/comments';






function ImageTitle ({image}) {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user);
    const [editContent, setEditContent] = useState(false);
    const [currentTitle, setCurrentTitle] = useState(image.title)
    const [showModal, setShowModal] = useState(false);
    const [errors, setErrors] = useState([]);


    const handleCancel = ()=> {
        setEditContent(false)
    }


    const changeTitle = (e)=> {
        e.preventDefault()
        setErrors([]);
    //    dispatch(editComment(comment.id, currentComment))
    //    .catch(async (res) => {
    //     const data = await res.json();

    //     if (data && data.errors){

    //     setErrors(data.errors)
    //     if (!showModal) setShowModal((oldstate)=>{
    //         return true});}
    //   });
    //   setCurrentTitle(comment.body)
    //   setEditContent(false)


    }

    return (
        <>
            {!editContent &&
            <div>
                <h1>{currentTitle}</h1>
                </div>}


            {editContent &&
            <>
                <form onSubmit={changeTitle}

                >
                    <input
                        name='currentTitle'

                        onChange={(e) => { setCurrentTitle(e.target.value) }}


                        value={currentTitle}
                    >{currentTitle}
                    </input>
                    <div className='add-comment-bttn-box'>
                        <button id='edit-comment-bttn' className='bttn' type='submit'>Save</button>
                        <button id='edit-comment-bttn' className='bttn' onClick={()=>handleCancel}>Cancel</button>
                    </div>
                </form>

            </>
            }
        </>
)
}

export default ImageTitle
