import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
export const UserContext = createContext()

const auth = getAuth(app)
const AuthContext = ({children}) => {
    const [user, setUser] = useState();

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }

    const googleLogin = (provider) =>{
        return signInWithPopup(auth, provider)
    }

    const updatedProfile = (profile) =>{
        return updateProfile(auth.currentUser, profile )
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser=>{
            setUser(currentUser)
        }))
        return ()=>{
            unsubscribe()
        }
    },[])

    const authInfo = { user, createUser, logIn, logOut, googleLogin, updatedProfile }

    return (
       <UserContext.Provider value={authInfo} >
        {children}
       </UserContext.Provider>
    );
};

export default AuthContext;