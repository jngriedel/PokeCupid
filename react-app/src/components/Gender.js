import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUserGender } from "../store/session";

function Gender() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [editContent, setEditContent] = useState(false);
  const [currentGender, setCurrentGender] = useState(sessionUser.gender);
  const [selected, setSelected] = useState("");
  const [errors, setErrors] = useState([]);

  const handleCancel = () => {
    setEditContent(false);
    setCurrentGender(sessionUser.gender);
  };

  const handleEdit = () => {
    setEditContent(true);
  };

  const changeGender = (e) => {
    e.preventDefault();
    setErrors([]);

    dispatch(editUserGender(sessionUser.id, currentGender))
      .then((res) => {
        setEditContent(false);
      })
      .catch(async (res) => {
        const data = await res.json();

        if (data && data.errors) {
          setCurrentGender(sessionUser.gender);
          setEditContent(false);
          setErrors(data.errors);
        }
      });
  };

  return (
    <>
      {!editContent && (
        <div className="gender-container">
          <h3 className="gender-text">{currentGender}</h3>
          <button className="gender-button" onClick={handleEdit}>
            <i className="fa-solid fa-pencil"></i>
          </button>
        </div>
      )}

      {editContent && (
        <>
          <form onSubmit={changeGender}>
            <select
              className="gender-container"
              name="currentGender"
              onClick={(e) => {
                setCurrentGender(e.target.value);
              }}
              onChange={(e) => setSelected(e.target.value)}
              value={selected}
            >
              {currentGender}
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <div className="add-comment-bttn-box">
              <button
                id="edit-comment-bttn"
                className="gender-button-submit"
                type="submit"
              >
                <i className="fa-solid fa-check"></i>
              </button>
              <button
                id="edit-comment-bttn"
                className="gender-button-cancel"
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

export default Gender;
