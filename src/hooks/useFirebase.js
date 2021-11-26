import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut ,createUserWithEmailAndPassword ,signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase/firebase.init";
initializeAuthentication()
const useFirebase=()=>{
    const [user,setUser] = useState({});
    const [pass,setPass] = useState('')
    const [name,setName] = useState('')
    const [isLoading,setIsLoading] = useState(true)
    const auth = getAuth();
    // console.log(user)
    const signInusingGoogle = () =>{
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
        


    }
    const logOut = () =>{
        setIsLoading(true)
          signOut(auth)
          .then((res) => {
              // Sign-out successful.
              setUser({})
              setPass("")
              setName("")
              console.log(user)
              
              
              // user.email=""
              // user.UserImpl={}
              
              
              
            }).catch((error) => {
              
            });
            setIsLoading(false)
      }

    
  
         
        
      
    //   sign in using email

    const signUp = (user,pass) =>{
        setIsLoading(true)
        
        return createUserWithEmailAndPassword(auth, user, pass)
           
        }

    const signIn = (user,pass) =>{
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, user, pass)
  
    }
    const setUserName =  () =>{
        
        updateProfile(auth.currentUser, {
        displayName: name
      });
      


    }
    









    return {
        user,
        setUser,
        signInusingGoogle,
        logOut,
        signUp,
        signIn,
        pass,
        setPass,
        setIsLoading,
        isLoading,
        name,
        setName,
        setUserName



        
    }
}
export default useFirebase;