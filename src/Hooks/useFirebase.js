import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/Firebase.init";
import {getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";


initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
       return signInWithPopup(auth, googleProvider)
    };

    const logout = () => {
        signOut(auth)
        .then(() => {
            setUser({})
        })
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
            } 
          });
    }, []);

    return {
        user,
        signInUsingGoogle,
        logout
    }
};

export default useFirebase;