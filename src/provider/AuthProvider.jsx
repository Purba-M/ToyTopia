import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
export const Authcontext=createContext()
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    
    
    const[user,setuser]=useState(null)

    const createuser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signin=(email,password)=>{
         return signInWithEmailAndPassword(auth,email,password)
    }

     const logout=()=>{
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setuser(currentUser);
        });
        return()=>{
            unsubscribe();
        }

    },[])


    const authdata={
        user,setuser,createuser,logout,signin
    }

   
   return <Authcontext.Provider value={authdata}>{children}</Authcontext.Provider>

};

export default AuthProvider;