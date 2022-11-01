import React, { createContext, useEffect, useState } from 'react';
import {getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import app from '../../Firebase/Firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    useEffect(()=>{
     const unsubscribe = onAuthStateChanged(auth, (currenUser)=>{
        console.log(currenUser);
        setUser(currenUser);
      });
      return unsubscribe();
    },[])

    const authInfo = {
        user, loading, createUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;