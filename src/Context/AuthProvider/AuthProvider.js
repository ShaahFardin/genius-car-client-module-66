import React, { createContext, useEffect, useState } from 'react';
import {getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import app from '../../Firebase/Firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const login = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logout = ()=>{
        setLoading(true);
        return signOut(auth);
    }
    useEffect(()=>{
     const unsubscribe = onAuthStateChanged(auth, (currenUser)=>{
        console.log(currenUser);
        setUser(currenUser);
        setLoading(false)
      });
      return unsubscribe();
    },[])

    const authInfo = {
        user, loading, createUser, login, logout
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;