import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { netflix_logo } from "../helper/Constant";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSearchSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.showGptSearch);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signOutHandle = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        dispatch(
          addUser({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);
  return (
    <div className="absolute w-screen z-10 px-8 py-2 bg-gradient-to-b from-black flex justify-between">
      <img className="w-44" src={netflix_logo} alt="logo" />
      {user && (
        <div className="flex p-2">

          <button
            onClick={handleGptSearchClick}
            className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-md"
          >
            🔍GPT Search- {showGptSearch}
          </button>
          <span className="p-2 m-2 text-white">{user?.displayName}</span>
          <img className="w-12 h-12 p-2 m-2" src={user.photoURL} alt="Logout" />
          <button className="text-white font-bold" onClick={signOutHandle}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
