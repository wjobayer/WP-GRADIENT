import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { useEffect, useState } from "react";
import initializeAuthentication from './firebase.init';
initializeAuthentication();

const useFirebase = () => {
  
  const [user , setUser]=useState({})
  const [isLoading , setIsLoading] =useState(true);
  const [admin, setAdmin] = useState(false);
  const auth = getAuth()
  const googleProvider= new GoogleAuthProvider();


useEffect(() =>{
     const unsubscribe = onAuthStateChanged(auth , (user)=> {
        console.log(user);
          if(user){
               
              setUser(user)
          } else{
              setUser({})
          }
          setIsLoading(false)
     })
      return ()=> unsubscribe()
},[])
 

  const signInWithGoogle=()=> {
   return  signInWithPopup(auth, googleProvider)
 
  }


const  createAccountWithGoogle =(email , password)=> {

    return createUserWithEmailAndPassword(auth, email, password)
}


const loginWithEmailAndPassword =(email,password)=> {
    return signInWithEmailAndPassword(auth, email, password)
}
    

const updateName= (name)=> {
  updateProfile(auth.currentUser, {
    displayName: name
  }).then(() => {
    const newUser={...user, displayName: name} // recommend
   setUser(newUser)
    
    // ...
  }).catch((error) => {
    // An error occurred
    // ...
  });
}
  useEffect(()=>{
    fetch(`http://localhost:5000/addUserInfo/${user.email}`)
    .then(res=>res.json())
    .then(data=>setAdmin(data.admin))
  },[user.email])


 const logOut=()=> {
     console.log("logout");
    signOut(auth).then(() => {
        setUser({})
      }).catch((error) => {
        // An error happened.
      });
 }
//  console.log(user.email);
 const hanldeUserInfoRegister = (email,name) => {
  fetch("http://localhost:5000/addUserInfo", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ email,name }),
  })
    .then((res) => res.json())
    .then((result) => console.log(result));
};

    return {
       user,
       setUser,
       admin,
       signInWithGoogle,
       createAccountWithGoogle,
       loginWithEmailAndPassword,
       isLoading,
       setIsLoading,
       logOut,
       updateName,
       auth,
       hanldeUserInfoRegister
       
    }
}

export default useFirebase;