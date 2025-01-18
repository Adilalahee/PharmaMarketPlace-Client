import { useEffect, useState } from "react";
import Authcontext from "./Authcontext";
import axios from 'axios';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../Authentication/Firebase";

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider=new GoogleAuthProvider();
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
      }
      const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
      }
    
      const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
      }
    
      const logOut = async () => {
        setLoading(true)
        return signOut(auth)
      }
    
      const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        })
      }
      useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async currentUser => {
          
          console.log('CurrentUser-->', currentUser)
          if(currentUser?.email){
            setUser(currentUser)
            await axios.post(`${import.meta.env.VITE_API_URL}/users/${currentUser?.email}`,
              {
                name:currentUser?.displayName,
                image:currentUser?.photoURL,
                email:currentUser?.email
              }
            )
            
          }else{
            setUser(currentUser)
          }
          setLoading(false)
          
        })
        return () => {
          return unsubscribe()
        }
      }, [])
    const authInfo = {
        user,
        setUser,
        loading,
        setLoading,
        createUser,
        signIn,
        signInWithGoogle,
        logOut,
        updateUserProfile,
      }
      
    return (
  <Authcontext.Provider value={authInfo} >
    {children}
  </Authcontext.Provider>
    );
};

export default AuthProvider;