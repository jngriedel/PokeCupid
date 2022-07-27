import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUserGender } from "../store/session";

function Gender({}) {
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
        <div>
          <h1>{currentGender}</h1>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}

      {editContent && (
        <>
          <form onSubmit={changeGender}>
            <select
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

export default Gender;
