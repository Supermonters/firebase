import { initializeApp } from 'firebase/app';
import { deleteObject,getDownloadURL,getStorage,ref } from "firebase/storage";



 
const firebaseConfig = {
    apiKey: "AIzaSyAVr8GCpsz2luRAwKKkit6b2ITxshCeVIg",
    authDomain: "login-ffd4f.firebaseapp.com",
    databaseURL: "https://login-ffd4f-default-rtdb.firebaseio.com",
    projectId: "login-ffd4f",
    storageBucket: "login-ffd4f.appspot.com",
    messagingSenderId: "212347808876",
    appId: "1:212347808876:web:b466c1b6d975542a673c49"
  };

const app = initializeApp(firebaseConfig);
const storage = getStorage();



//Upload


// Create a reference to 'mountains.jpg'
const mountainsRef = ref(storage, 'mountains.jpg');

// Create a reference to 'images/mountains.jpg'
const mountainImagesRef = ref(storage, 'images/mountains.jpg');

// While the file names are the same, the references point to different files
mountainsRef.name === mountainImagesRef.name;           // true
mountainsRef.fullPath === mountainImagesRef.fullPath;   // false 
//Download


// Create a reference to the file we want to download
const starsRef = ref(storage, 'images/stars.jpg');
// Get the download URL
getDownloadURL(starsRef)
  .then((url) => {
    // Insert url into an <img> tag to "download"
  })
  .catch((error) => {
    // A full list of error codes is available at
    // https://firebase.google.com/docs/storage/web/handle-errors
    switch (error.code) {
      case 'storage/object-not-found':
        // File doesn't exist
        break;
      case 'storage/unauthorized':
        // User doesn't have permission to access the object
        break;
      case 'storage/canceled':
        // User canceled the upload
        break;

      // ...

      case 'storage/unknown':
        // Unknown error occurred, inspect the server response
        break;
    }
  });
//Delete


// Create a reference to the file to delete
const desertRef = ref(storage, 'images/desert.jpg');

// Delete the file
deleteObject(desertRef).then(() => {
  // File deleted successfully
}).catch((error) => {
  // Uh-oh, an error occurred!
});