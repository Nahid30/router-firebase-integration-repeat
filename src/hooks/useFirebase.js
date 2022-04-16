import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react"
import app from "../firebase.init";



const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider()


const useFirebase = () =>{
    const [user, setUser] = useState({});

    useEffect( () =>{
        onAuthStateChanged(auth, (user)=>{
            setUser(user);
        })
    } ,[])

    const signInWithGoogle = () =>{
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            const user = result.user;
            console.log(user)
            setUser(user);
        })
        .catch(error =>{
            console.error(error);
        })
    }


    const handleSignOut = () =>{
        signOut(auth)
        .then( () =>{
            setUser('')
        })
        .catch(error =>{
            console.error(error)
        })
    }


    // return [user, setUser];
    return {
        user,
        signInWithGoogle,
        handleSignOut
    }
}

export default useFirebase;