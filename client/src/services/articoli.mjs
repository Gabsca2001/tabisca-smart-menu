import { getDocs, collection, addDoc } from "firebase/firestore"; 
import { db } from "./firebase-config.mjs";
import { setDoc, doc } from "firebase/firestore";
import { deleteDoc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import { storage } from "./firebase-config.mjs";


const collection_name = "prodotti";

//find all documents in the collection
export const findAll = async () => {
    try {
        const doc_refs = await getDocs(collection(db, collection_name));
        const res = doc_refs.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        return res;
    } catch (error) {
        console.error("Error fetching documents: ", error);
        throw new Error("Failed to fetch documents");
    }
}

//find element with category
export const findByCategory = async (category) => {
    try {
        const doc_refs = await getDocs(collection(db, collection_name));
        const res = doc_refs.docs.map(doc => doc.data()).filter(doc => doc.categoria === category);
        return res;
    } catch (error) {
        console.error("Error fetching documents: ", error);
        throw new Error("Failed to fetch documents");
    }
}

//add a new document to the collection
export const add = async (data) => {
    try {
        const doc_ref = await addDoc(collection(db, collection_name), data);
        console.log("Document added with ID: ", doc_ref.id);
    } catch (error) {
        console.error("Error adding document: ", error);
        throw new Error("Failed to add document");
    }
}

//edit a document in the collection using id
export const updateItem = async (data, id) => {
    try {
        const doc_ref = doc(db, collection_name, id);
        await setDoc(doc_ref, data);
        console.log("Document updated with ID: ", id);
    } catch (error) {
        console.error("Error updating document: ", error);
        throw new Error("Failed to update document");
    }
}

//upload image to firebase storage
export const uploadImage = async (image) => {
    try {
        const storageRef = ref(storage, image.name);
        await set(storageRef, image);
        const url = await getDownloadURL(storageRef);
        return url;
    } catch (error) {
        console.error("Error uploading image: ", error);
        throw new Error("Failed to upload image");
    }
}

//delete a document in the collection using id
export const deleteItem = async (id, image) => {
    try {
        const doc_ref = doc(db, collection_name, id);
        await deleteDoc(doc_ref);

        if(image){
            const imageRef = ref(storage, image);
            await deleteObject(imageRef);
        }

        console.log("Document deleted with ID: ", id);
    } catch (error) {
        console.error("Error deleting document: ", error);
        throw new Error("Failed to delete document");
    }
}