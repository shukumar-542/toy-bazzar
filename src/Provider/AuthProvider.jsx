/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../Firebase/Firebase.config";
import { GoogleAuthProvider } from "firebase/auth";


export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] =  useState(true)

    const googleProvider = new GoogleAuthProvider();
    const signInWithGoogle = ()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const createUserWithEMail = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signUserWithEmailPass = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = ()=>{
        return signOut(auth)
        
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUSer=>{
            setUser(currentUSer)
            setLoading(false)
        })
        return ()=>{
            unSubscribe()
        }
    },[])

    const authInfo ={
        user,
        loading,
        setUser,
        signInWithGoogle,
        createUserWithEMail,
        signUserWithEmailPass,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;