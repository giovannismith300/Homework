import { db } from "../firebase/firebase"
import { Profile } from "../models/Profile"
import {collection, query, getDocs, addDoc} from "firebase/firestore"

 

class NameService{
    constructor(){
        this.collection = "names"

    }
    async createProfile(profile){
        const collectionRef = collection(db, this.collection)
        
        const docRef = await addDoc(collectionRef, profile.toJson())

        profile.id = docRef.id
        return profile

        
    }

    async fetchMovies(){
        const collectionRef = collection(db, this.collection)

        const querySnapshot = getDocs(query(collectionRef))

        const profiles = [];
        querySnapshot.forEach((doc) => {
            profiles.push(Profile.fromFirebase(doc))
        })

    }
}

const service = new NameService()
export default service