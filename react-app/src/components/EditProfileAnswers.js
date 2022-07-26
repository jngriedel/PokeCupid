import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux';

const EditProfileAnswers = () => {
    const [showEditMaster, setShowEditMaster] = useState(false)
    const [showEditSub, setShowEditSub] = useState(false)

    const handleEditSubmit = () => {
        setShowEditMaster(true)
    }

    useEffect(()=>{
        if (setShowEditMaster) {
            setShowEditSub(true)
        }
    })


    return (
        <>
        {showEditMaster && (
            <div>
                <button onClick={handleEditSubmit}>Edit</button>
            </div>)}
        </>
        
    );
}

export default EditProfileAnswers