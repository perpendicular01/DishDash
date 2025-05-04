import {  createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.config";




// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    
    const logOut = () => {
        return signOut(auth);
    }

    const updateUserProfile = (name, photoUrl) => {
        return updateProfile(auth.currentUser, {
            displayName : name,
            photoURL: photoUrl
        })

    }

    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, (currUser) => {
            setUser(currUser);
            setLoading(false)
        })
        return () => {
            return unsubscribe();
        }
    }, [])



    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        updateUserProfile,
        logOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;