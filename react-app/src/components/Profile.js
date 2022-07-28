import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getUserImages,
  uploadImage,
  deleteImage,
} from "../store/profileImages";
import { getUserMatches } from "../store/matches";
import ImageTitle from "./ImageTitle";
import Bio from "./Bio";
import Gender from "./Gender";
import Pokemon from "./Pokemon";

import ProfileAnswers from "./ProfileAnswers";

function Profile() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const userImages = useSelector((state) => state.profileImages);

  const userImagesArr = Object.values(userImages);

  const [errors, setErrors] = useState([]);
  //    const [name, setName] = useState('');
  //    const [email, setEmail] = useState('');
  //    const [gender, setGender] = useState('Male');
  //    const [bio, setBio] = useState('');
  //    const [pokemonId, setPokemonId] = useState(1);
  const [image, setImage] = useState(null);
  const [imageLoading, setImageLoading] = useState(false);

  useEffect(() => {
    dispatch(getUserImages(sessionUser?.id));
    dispatch(getUserMatches(sessionUser?.id));
  }, []);

  const addNewProfImg = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", image);

    // aws uploads can be a bit slow—displaying
    // some sort of loading message is a good idea
    setImageLoading(true);

    const res = await fetch(`/api/users/${sessionUser.id}/images`, {
      method: "POST",
      body: formData,
    });
    if (res.ok) {
      const data = await res.json();
      setImageLoading(false);

      await dispatch(uploadImage(data.image));
      document.getElementById("uploadProfPic").value = null;
    } else if (!res.ok) {
      setImageLoading(false);
      const data = await res.json();
      setErrors([data.errors]);

      // a real app would probably use more advanced
      // error handling
    }
  };

  const updateImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };
  const handleDelete = (imageId) => {
    let result = window.confirm(
      "This photo will be gone forever. Are you Sure?"
    );
    if (result) {
      dispatch(deleteImage(imageId));
    }
  };

  return (
    <>
      {sessionUser && (
        <div className="profileMain">
          <div>{sessionUser?.name}</div>
          {userImagesArr.length <= 3 && (
            <div>
              {errors &&
                errors.map((error, ind) => <div key={ind}>{error}</div>)}

              <form onSubmit={addNewProfImg}>
                <label>Add new Profile Image:</label>
                <input
                  id="uploadProfPic"
                  name="image"
                  type="file"
                  accept="image/*"
                  onChange={updateImage}
                ></input>
                <button type="submit">Upload</button>
                {imageLoading && <p>Uploading Image...</p>}
              </form>
            </div>
          )}
          <div className="profileImages">
            {userImagesArr[0] && (
              <>
                {userImagesArr.map((image, i) => (
                  <div key={i}>
                    <div>
                      <ImageTitle image={image} />
                    </div>
                    <img src={image.imgUrl} />
                    <button onClick={() => handleDelete(image.id)}>
                      Delete
                    </button>
                  </div>
                ))}
              </>
            )}
            {!userImagesArr[0] && (
              <>
                <img src="https://www.kindpng.com/picc/m/74-743336_global-link-question-question-mark-unknown-pokemon-hd.png" />
              </>
            )}
          </div>
          <div>
            <img src={sessionUser?.pokemon?.imgUrl} />
            <Pokemon />
          </div>
          <div>
            <Bio />
          </div>

          <div>
            <Gender />
          </div>
          <ProfileAnswers />
        </div>
      )}
    </>
  );
}
export default Profile;
