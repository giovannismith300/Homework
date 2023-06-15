import {ref, getDownloadURL, uploadBytesResumable} from 'firebase/storage'
import {storage} from "../firebase/firebase"

class FileService{
     uploadImage(file, onUploadProgress){
        return new Promise((resolve, reject) => {
            const fileRef = ref(storage,"images/" + file.name )
            const uplaodFile = uploadBytesResumable(fileRef, file)

            uplaodFile.on("state_changed", 
            (snapshot) => {
                //handle update
                //listen to updates
                this.handleProgressUpdate(snapshot, onUploadProgress)

            }, (err) => {
                reject(err.message)
            },
            () => {
                getDownloadURL(uplaodFile.snapshot.ref).then((downloadURL) => {
                    resolve(downloadURL)
                })
            })
            

        })
 
    }


    handleProgressUpdate(snapshot, onUploadProgress){
        if(onUploadProgress){
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            onUploadProgress(progress)
        }
    }
}
const fileService = new FileService()
export default fileService