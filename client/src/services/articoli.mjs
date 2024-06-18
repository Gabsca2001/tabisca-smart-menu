import { getDocs, collection } from "firebase/firestore"; 
import { db } from "./db.mjs";

const collection_name = "prodotti";

export const findAll = async () => {
    
    try {
        const doc_refs = await getDocs(collection(db, collection_name));

        const res = doc_refs.docs.map(doc => doc.data());
        console.log("Documents fetched: ", res);


        return res;
    } catch (error) {
        console.error("Error fetching documents: ", error);
        throw new Error("Failed to fetch documents");
    }
}

//find element with category = antipasto
export const findByCategory = async (category) => {
    try {
        const doc_refs = await getDocs(collection(db, collection_name));
        const res = doc_refs.docs.map(doc => doc.data()).filter(doc => doc.categoria === category);
        console.log("Documents fetched: ", res);
        return res;
    } catch (error) {
        console.error("Error fetching documents: ", error);
        throw new Error("Failed to fetch documents");
    }
}