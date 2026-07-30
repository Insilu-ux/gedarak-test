import { db, storage } from "./firebase-config.js";

import {
    doc,
    getDoc,
    deleteDoc
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

import {
    ref,
    deleteObject
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-storage.js";

export async function deletePropertyCompletely(propertyId){

    // Get property
    const propertyRef = doc(db,"properties",propertyId);

    const snap = await getDoc(propertyRef);

    if(!snap.exists()){
        return;
    }

    const property = snap.data();

    // Delete every image
    if(property.images){

        for(const imageUrl of property.images){

            try{

                const imageRef = ref(storage,imageUrl);

                await deleteObject(imageRef);

            }catch(error){

                console.log("Couldn't delete image:",error);

            }

        }

    }

    // Delete Firestore document
    await deleteDoc(propertyRef);

}
