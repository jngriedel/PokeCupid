import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUserBio } from "../store/session";

function Bio({}) {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [editContent, setEditContent] = useState(false);
  const [currentBio, setCurrentBio] = useState(
    sessionUser.bio ? sessionUser.bio : ""
  );
  const [showModal, setShowModal] = useState(false);
  const [errors, setErrors] = useState([]);

  const handleCancel = () => {
    setEditContent(false);
    setCurrentBio(sessionUser.bio);
    setErrors([]);
  };

  const handleEdit = () => {
    setEditContent(true);
  };

  const changeBio = async (e) => {
    e.preventDefault();

    const data = await dispatch(editUserBio(sessionUser.id, currentBio));
    if (data === null) {
      setEditContent(false);
      setErrors([]);
    } else {
      setErrors(data);
    }
  };

  return (
    <>
      {!editContent && (
        <div>
          <h1>{currentBio}</h1>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}

      {errors && errors.map((error, ind) => <div key={ind}>{error}</div>)}

      {editContent && (
        <>
          <form onSubmit={changeBio}>
            <textarea
              name="currentBio"
              onChange={(e) => {
                setCurrentBio(e.target.value);
              }}
              value={currentBio}
            >
              {currentBio}
            </textarea>
            <div className="add-comment-bttn-box">
              <button id="edit-comment-bttn" className="bttn" type="submit">
                Save
              </button>
              <button
                id="edit-comment-bttn"
                className="bttn"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </form>
        </>
      )}
    </>
  );
}

export default Bio;
