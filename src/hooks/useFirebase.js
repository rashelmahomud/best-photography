// import { useState } from "react"
// import { getAuth, GoogleAuthProvider,signInWithPopup } from "firebase/auth";
// import app from "../firebase.init";


// const auth = getAuth(app)

// const provider = new GoogleAuthProvider();

// const useFirebase = () => {
//     const [user, setUser] =useState({});



//     const singInWighGoogle = () => {
//         signInWithPopup(auth, provider)
//         .then(result => {
//             const user = result.user;
//             setUser(user);
//             console.log(user);
//         })
//     }


//     return {user, singInWighGoogle};
// }

// export default useFirebase;