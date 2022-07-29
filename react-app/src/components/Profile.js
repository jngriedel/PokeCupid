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
import "./Profile.css";

function Profile() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const userImages = useSelector((state) => state.profileImages);

  const userImagesArr = Object.values(userImages);

  const [errors, setErrors] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [image, setImage] = useState(null);
  const [imageLoading, setImageLoading] = useState(false);

  useEffect(() => {
    dispatch(getUserImages(sessionUser?.id));
    dispatch(getUserMatches(sessionUser?.id)).then((res) =>{
      setTimeout(() => {
        setLoaded(true)
      }, 1000)
      });
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
      {loaded && (
        <div className="profileMain">
          <div className="profile-nameplate">
            {userImagesArr[0] && (
              <img
                className="profile-picture"
                src={sessionUser?.profileImages[0]?.imgUrl}
              ></img>
            )}
            <p className="profile-name">{sessionUser?.name}</p>
            <p className="profile-title">Profile</p>
          </div>
          <div className="profile-info-container">
            <div className="titles-container">
              <p className="biography-title">Biography</p>
              <p className="pokemon-title">Your Pokemon</p>
            </div>
            <div className="bio-and-pokemon">
              <Bio />
              <p className="pokemon-number"># {sessionUser.pokemonId}.</p>
              <img className="pokemon-img" src={sessionUser?.pokemon?.imgUrl} />
              <Pokemon />
            </div>
            <div>
              <div className="profile-images-container">
                {/* {userImagesArr.length <= 3 && ( */}
                  <div>
                    <p className="profile-picture-title">Profile Pictures</p>
                  </div>
                {/* )} */}
                <div className="profile-images">
                  {userImagesArr[0] && (
                    <>
                      {userImagesArr.map((image, i) => (
                        <div className="profile-pictures-div" key={i}>
                          <div>
                            <ImageTitle image={image} />
                          </div>
                          <div className="profile-pictures-container">
                            <img
                              className="profile-pictures"
                              src={image.imgUrl}
                            />
                            <button
                              className="profile-picture-delete"
                              onClick={() => handleDelete(image.id)}
                            >
                              <i className="fa-solid fa-x"></i>
                            </button>
                          </div>
                        </div>
                      ))}
                    </>
                  )}
                  {!userImagesArr[0] && (
                    <>
                      <img
                        className="profile-pictures"
                        src="https://www.kindpng.com/picc/m/74-743336_global-link-question-question-mark-unknown-pokemon-hd.png"
                      />
                    </>
                  )}
                </div>
                {errors &&
                  errors.map((error, ind) => (
                    <div key={ind} className="images-errors">
                      {error}
                    </div>
                  ))}
                {userImagesArr.length <=2 &&
                <form className="upload-photo-form" onSubmit={addNewProfImg}>
                  <div className="upload-container">
                    <label className="upload-text">
                      Add new Profile Image:
                    </label>
                    <input
                      id="uploadProfPic"
                      name="image"
                      type="file"
                      accept="image/*"
                      onChange={updateImage}
                    ></input>
                    <button id="upload-button" type="submit">Upload</button>
                  </div>
                  {imageLoading && <p>Uploading Image...</p>}
                </form> }
              </div>
              <div>
                <Gender />
              </div>
              <ProfileAnswers />
            </div>
          </div>
        </div>
      )}
      {!loaded && (
        <div className="loadHold">
          <div className="loader"></div>
        </div>
      )}
    </>
  );
}
export default Profile;
