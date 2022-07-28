import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editImage } from "../store/profileImages";

function ImageTitle({ image }) {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [editContent, setEditContent] = useState(false);
  const [currentTitle, setCurrentTitle] = useState(
    image.title ? image.title : ""
  );
  const [showModal, setShowModal] = useState(false);
  const [errors, setErrors] = useState([]);

  const handleCancel = () => {
    setEditContent(false);
    setCurrentTitle(image.title);
    setErrors([]);
  };

  const handleEdit = () => {
    setEditContent(true);
  };

  const changeTitle = async (e) => {
    e.preventDefault();

    const data = await dispatch(editImage(image.id, currentTitle));
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
          <h1>{currentTitle}</h1>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}

      {errors && errors.map((error, ind) => <div key={ind}>{error}</div>)}

      {editContent && (
        <>
          <form onSubmit={changeTitle}>
            <textarea
              name="currentTitle"
              onChange={(e) => {
                setCurrentTitle(e.target.value);
              }}
              value={currentTitle}
            >
              {currentTitle}
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

export default ImageTitle;
