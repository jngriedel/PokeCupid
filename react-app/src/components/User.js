import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
// import { newMatch } from "../store/matches";
import { getUserImages } from "../store/profileImages";
import UserQuestions from "./UserQuestions";

function User() {
  // const sessionUser = useSelector((state) => state.session.user);
  const userImages = useSelector((state) => state.profileImages);
  const userImagesArr = Object.values(userImages);
  const [user, setUser] = useState({});
  const { userId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory()
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {

    if (!userId || isNaN(+userId) ) {
      history.push("/404");
    }

    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      if (!response.ok){
        history.push('/404')
      }
      const user = await response.json();

      dispatch(getUserImages(user?.id))
      .then((res)=>{ setTimeout(() => {
        setLoaded(true);
      }, 1000)});

      if (!user) {
        history.push("/404");
      }
      setUser(user);

    })();
  }, [userId, dispatch, history]);




  // useEffect(() => {
  //   dispatch(getUserImages(user?.id));
  // }, [dispatch, user]);





  return (
    <>
      {loaded && (
        <div className="profileMain">
          <div className="profile-nameplate">
            <div className="profile-items">
              {userImagesArr[0] && (
                <img
                  alt="profile"
                  className="profile-picture"
                  src={user?.profileImages[0]?.imgUrl}
                ></img>
              )}
              {!user?.profileImages[0]?.imgUrl && (
                <img
                  alt="unknown"
                  className="profile-picture"
                  src="https://www.kindpng.com/picc/m/74-743336_global-link-question-question-mark-unknown-pokemon-hd.png"
                ></img>
              )}
              <div className="profile-name-gender">
                <p className="profile-name">{user?.name}</p>
                <p className="gender-text">{user?.gender}</p>
              </div>
            </div>
            <p className="profile-title">{user.name}'s Profile</p>
          </div>

          <div className="profile-info-container">
            <div className="titles-container">
              <p className="biography-title">Biography</p>
              <p className="pokemon-title">{user.name}'s Pokemon</p>
            </div>
            <div className="bio-and-pokemon">
              <div className="current-bio-div">"{user.bio}"</div>
              <div className="profile-pokemon">
                <p className="pokemon-number"># {user.pokemonId}.</p>
                <img className="pokemon-img" alt={user?.pokemon?.name} src={user?.pokemon?.imgUrl} />
              </div>
            </div>
            <div className="profile-bottom">
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
                              alt="profile"
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
                        alt="unknown"
                        className="profile-pictures"
                        src="https://www.kindpng.com/picc/m/74-743336_global-link-question-question-mark-unknown-pokemon-hd.png"
                      />
                    </>
                  )}
                </div>
                {/* {errors &&
                  errors.map((error, ind) => (
                    <div key={ind} className="images-errors">
                      {error}
                    </div>
                  ))} */}
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
