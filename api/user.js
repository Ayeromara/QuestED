import { initializeApp } from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth'
import firestore, { getFirestore } from '@react-native-firebase/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyB1ssEzRwmxt3-em5J7dy2Vb4MgXOFykXQ",
    authDomain: "quested-44a4b.firebaseapp.com",
    projectId: "quested-44a4b",
    storageBucket: "quested-44a4b.appspot.com",
    messagingSenderId: "361443685118",
    appId: "1:361443685118:android:e8031a9ff4bd755c70abaf"
  };
  
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  
  export { db };



export const createUser = async(fullName, email, password) =>{
    try{
        const user = await auth().createUserWithEmailAndPassword(email, password);
        await user.user.updateProfile({displayName: fullName})



  const userId = user.user.uid;

  

        await firestore()
        .collection('users')  // Collection name
        .doc(userId)          // Document ID = user UID
        .set({
        name: fullName,
        email: email,
        points: 0,
        completedCourses: [],
        createdAt: firestore.FieldValue.serverTimestamp(),
        });
        return user


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
        const response = await auth().signInWithEmailAndPassword(email, password);
        const token = await response.user.getIdToken();
        return{
            status:true,
            data: {
                displayName:response.user.displayName,
                email: response.user.email,
                token,
            },
        }
        
    } catch(error){
        console.log(error.code)
        if(error.code === 'auth/wrong-password'){
        return {status: false, error: 'please enter a correct password'}
        }
        else if (error.code === 'auth/user-not-found') {
            return {
              status: false,
              error:
                'The email you entered does not exist. Please create a new account.',
            };
        }
        else if (error.code === 'auth/invalid-credential') {
            return {
              status: false,
              error:
                'Invalid credential.',
            };
        }

        return {status: false, error: 'Something went wrong'};
    }
    
}




export const logOut = async () => {
    await signOut(auth);
  };
