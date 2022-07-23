import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {editImage} from '../store/profileImages'






function ImageTitle ({image}) {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user);
    const [editContent, setEditContent] = useState(false);
    const [currentTitle, setCurrentTitle] = useState(image.title)
    const [showModal, setShowModal] = useState(false);
    const [errors, setErrors] = useState([]);


    const handleCancel = ()=> {
        setEditContent(false)
        setCurrentTitle(image.title)
    }

    const handleEdit = () => {
        setEditContent(true)
    }

    const changeTitle = (e)=> {
        e.preventDefault()
        setErrors([]);

       dispatch(editImage(image.id, currentTitle))
       .then((res)=>{
        setEditContent(false)
       })
       .catch(async (res) => {
        const data = await res.json();

        if (data && data.errors){
            setCurrentTitle(image.title)
            setEditContent(false)
        setErrors(data.errors)
        }
        })



    }

    return (
        <>
            {!editContent &&
            <div>
                <h1>{currentTitle}</h1>
                <button onClick={handleEdit}>Edit</button>
                </div>}


            {editContent &&
            <>
                <form onSubmit={changeTitle}

                >
                    <textarea
                        name='currentTitle'

                        onChange={(e) => { setCurrentTitle(e.target.value) }}


                        value={currentTitle}
                    >{currentTitle}
                    </textarea>
                    <div className='add-comment-bttn-box'>
                        <button id='edit-comment-bttn' className='bttn' type='submit'>Save</button>
                        <button id='edit-comment-bttn' className='bttn' onClick={handleCancel}>Cancel</button>
                    </div>
                </form>

            </>
            }
        </>
)
}

export default ImageTitle
