import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editImage } from "../store/profileImages";

function ImageTitle({ image }) {
  const dispatch = useDispatch();
  // const sessionUser = useSelector((state) => state.session.user);
  const [editContent, setEditContent] = useState(false);
  const [currentTitle, setCurrentTitle] = useState(
    image.title ? image.title : ""
  );
  // const [showModal, setShowModal] = useState(false);
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
        <div className="profile-pictures-title-container">
          <p className="profile-pictures-title">{currentTitle}</p>
          <button className="edit-photo" onClick={handleEdit}>
            <i className="fa-solid fa-pencil"></i>
          </button>
        </div>
      )}

      {errors &&
        errors.map((error, ind) => (
          <div key={ind}>
            <p className="errors-title">{error}</p>
          </div>
        ))}

      {editContent && (
        <>
          <form onSubmit={changeTitle}>
            <textarea
              className="image-title-textarea"
              name="currentTitle"
              onChange={(e) => {
                setCurrentTitle(e.target.value);
              }}
              value={currentTitle}
            >
              {currentTitle}
            </textarea>
            <div className="edit-title-container">
              <button
                id="edit-comment-bttn"
                className="edit-profile-title-submit"
                type="submit"
              >
                <i className="fa-solid fa-check"></i>
              </button>
              <button
                id="edit-comment-bttn"
                className="edit-profile-title-cancel"
                onClick={handleCancel}
              >
                <i className="fa-solid fa-x"></i>
              </button>
            </div>
          </form>
        </>
      )}
    </>
  );
}

export default ImageTitle;
