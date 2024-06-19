import { ref } from "firebase/storage";
import { storage } from "./firebase-config.mjs";
import { uploadBytes, getDownloadURL } from "firebase/storage";

export const uploadImage = async (file) => {

    const imageRef = ref(storage, `images/${file.name}`);
    try{
        await uploadBytes(imageRef, file);
        const url = await getDownloadURL(imageRef);
        return url;
    }catch(error){
        console.error(error);
    }

};
