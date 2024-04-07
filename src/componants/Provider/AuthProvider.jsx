/* eslint-disable react/prop-types */
// import React from 'react';

import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase.config";

 
export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider;

 const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword (auth,email,password)
    }

    const singhInUser = (email,password)=>{
        return signInWithEmailAndPassword (auth,email,password)
    }

    const singInWithGoogle = () =>{
        return signInWithPopup(auth,googleProvider)
    }
         
    const logOut = ()=>{
        return signOut(auth);
    }

    useEffect(()=>{
       const unSubscribe= onAuthStateChanged(auth,curentUser =>{
            setUser(curentUser);
        });
        return ()=>{
            unSubscribe();
        }
    },[])

    const authInfo = {user,createUser,singhInUser,logOut,singInWithGoogle }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;