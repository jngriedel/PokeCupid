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
  };

  const handleEdit = () => {
    setEditContent(true);
  };

  const changeBio = (e) => {
    e.preventDefault();
    setErrors([]);

    dispatch(editUserBio(sessionUser.id, currentBio))
      .then((res) => {
        setEditContent(false);
      })
      .catch(async (res) => {
        const data = await res.json();

        if (data && data.errors) {
          setCurrentBio(sessionUser.bio);
          setEditContent(false);
          setErrors(data.errors);
        }
      });
  };

  return (
    <>
      {!editContent && (
        <div>
          <h1>{currentBio}</h1>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}

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
