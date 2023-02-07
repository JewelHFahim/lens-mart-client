import React, { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import vic from "../Assets/slider/slide3.jpg";
import ema from "../Assets/slider/slide5.jpg";

export const UserContext = createContext();

const auth = getAuth(app);
const AuthContext = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const googleLogin = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const updatedProfile = (profile) => {
    setLoading(true);
    return updateProfile(auth.currentUser, profile);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(false);
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const [dbUser, setDbUser] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users", {
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setDbUser(data));
  }, []);

  const [name, setName] = useState(vic);

  const changeName = () => {
    let value = name;

    if (value === vic) {
      setName(ema);
    } else {
      setName(vic);
    }
  };

  const authInfo = {
    user,
    createUser,
    logIn,
    logOut,
    googleLogin,
    updatedProfile,
    loading,
    dbUser,
    changeName,
    name,
  };

  return (
    <UserContext.Provider value={authInfo}>{children}</UserContext.Provider>
  );
};

export default AuthContext;
