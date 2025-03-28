import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";



const firebaseConfig = {
    apiKey: "AIzaSyB1ssEzRwmxt3-em5J7dy2Vb4MgXOFykXQ",
    authDomain: "quested-44a4b.firebaseapp.com",
    projectId: "quested-44a4b",
    storageBucket: "quested-44a4b.appspot.com",
    messagingSenderId: "361443685118",
    appId: "1:361443685118:android:e8031a9ff4bd755c70abaf",
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const createUser = async(fullName, email, password, matricNo) =>{
    try{
        const user = await createUserWithEmailAndPassword(auth, email, password);
        await user.user.updateProfile({displayName: fullName, matric:matricNo});
        return user;
    }
    catch(error){
        if(error.code === 'auth/email-already-in-use'){
            return {error: 'The email you entered is already in use.'}
        }
        else if (error.code === 'auth/invalid-email'){
            return {error: 'Please enter a valid email address.'}        }
        return {error:'Something went wrong with your request.'}
    }
}

export const loginUser = async(email, password) =>{
    try{
        const response = await signInWithEmailAndPassword(auth, email, password);
        const token = await response.user.getIdToken();
        return{
            status:true,
            data: {
                displayName:response.user.displayName,
                matric:response.user.matric,
                email: response.user.email,
                token,
            },
        }
    } catch(error){
        if(error.code === 'auth/wrong-password'){
        return {status: false, error: 'please enter a correct password'};
        }
        else if (error.code === 'auth/user-not-found') {
            return {
              status: false,
              error:
                'The email you entered does not exist. Please create a new account.',
            };
        }
        return {status: false, error: 'invalid credentials'};
        
    }
    
}