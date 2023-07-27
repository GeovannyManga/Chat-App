import { useContext, createContext, useState, useEffect } from "react";
import { auth } from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged} from "firebase/auth";




export const authContext = createContext()

export const useAuth = ()=>{
    const context = useContext(authContext);
    if (!context) {
        console.log("error creating auth context")
    }
    return context;
}


export function AuthProvider({children}) {
    const register = async(email, password)=>{
       const response = await createUserWithEmailAndPassword( auth, email, password)
       console.log(response)
    }
    const login = async(email,password)=>{
       const response = await signInWithEmailAndPassword(auth, email, password)
       console.log(response)
    }

    const loginWithGoogle = async()=>{
        const responseGoogle =  new GoogleAuthProvider()
        return await signInWithPopup(auth, responseGoogle)
    }

    const logout = async()=>{
        const response = await signOut(auth)
        console.log(response)
    }

    const [user, setUser] = useState("");
  /* A hook that is called when the component is mounted and when the component is updated. */
  useEffect(() => {
    const subscribed = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        setUser("");
      } else {
        setUser(currentUser);
      }
    });
    return () => subscribed();
  }, []);

    return <authContext.Provider value={{
        register,
        login,
        loginWithGoogle,
        logout, 
        user
    }}>{children}</authContext.Provider>
}

