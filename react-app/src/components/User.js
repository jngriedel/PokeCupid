import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { newMatch } from "../store/matches";
import { getUserImages } from "../store/profileImages";
import UserQuestions from "./UserQuestions";

function User() {
  const sessionUser = useSelector((state) => state.session.user);
  const userImages = useSelector((state) => state.profileImages);
  const userImagesArr = Object.values(userImages);
  const [user, setUser] = useState({});
  const { userId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      // if (Object.keys(user).length === 0) {
      //   history.push("/404");
      // }
      setUser(user);

      dispatch(getUserImages(user.id));
    })();
  }, [userId]);

  const handleLike = () => {
    dispatch(newMatch(sessionUser.id, userId));
  };

  const [errors, setErrors] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [image, setImage] = useState(null);
  const [imageLoading, setImageLoading] = useState(false);

  useEffect(() => {
    dispatch(getUserImages(user?.id));
  }, []);

  if (!loaded) {
    setTimeout(() => {
      setLoaded(true);
    }, 1000);
  }

  return (
    <>
      {loaded && (
        <div className="profileMain">
          <div className="profile-nameplate">
            {userImagesArr[0] && (
              <img
                className="profile-picture"
                src={user?.profileImages[0]?.imgUrl}
              ></img>
            )}
            {!user?.profileImages[0]?.imgUrl && (
              <img
                className="profile-picture"
                src="https://www.kindpng.com/picc/m/74-743336_global-link-question-question-mark-unknown-pokemon-hd.png"
              ></img>
            )}
            <p className="profile-name">{user?.name}</p>
            <p className="profile-title">{user.name}'s Profile</p>
          </div>
          <div className="profile-info-container">
            <div className="titles-container">
              <p className="biography-title">Biography</p>

              <p className="pokemon-title">{user.name}'s Pokemon</p>
            </div>
            <div className="bio-and-pokemon">
              <p>"{user.bio}"</p>
              <p className="pokemon-number"># {user.pokemonId}.</p>
              <img className="pokemon-img" src={user?.pokemon?.imgUrl} />
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
                          <div></div>
                          <div className="profile-pictures-container">
                            <img
                              className="profile-pictures"
                              src={image.imgUrl}
                            />
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
              </div>
              <div>
                <UserQuestions user={user} />
              </div>
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
export default User;
