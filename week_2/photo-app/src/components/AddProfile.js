import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import FileService from "../services/file-service"
import NameService from "../services/name-service"
import { Profile } from '../models/Profile'




export default function AddProfile() {
const[name, setName] = useState('')
const[file, setFile]= useState(null)
const navigate = useNavigate()



async function onFormSubmit(event){
    event.preventDefault()
try{
    const downloadURL = await FileService.uploadImage(file, (progress) => {
        console.log("Upload progress: ", progress)


    })
    
    await NameService.createProfile(new Profile(null, name,downloadURL ))
    navigate("/image-display")
}catch(err){
    console.log(err)
}
}

     function onFileSelected(e){
        if(e.target.value.length){
            setFile(e.target.files[0])
        }
        else{
            setFile(null)
        }
     }
  return (
    <>
    <div className="container mt-5">
        <Link to="/image-display">Image Display</Link>
    </div>
        <div className="card card-body my-3">
            <h1> Add Your Name and Profile Picture</h1>

            <form onSubmit = {onFormSubmit}>

                <div className="form-group mb-4">
                    <label className="form-label"> Name:</label>
                    <input 
                    value = {name}
                    onChange={(e) => setName(e.target.value)}
                    type = "text" 
                    className="form-control"
                    placeholder="Please enter your name"></input>
                </div>

                <div>
                    <label className="form-label"> Upload Image</label>
                    <input
                    
                    onChange = {onFileSelected}
                    className="form-control"
                    type="file"
                    multiple>
                    </input>
                </div>

                <div className="text-center mt-3">

                    <button className="btn btn-primary" type="submit"> Add Account</button>
                </div>
            </form>
        </div>
    </>
    
  )
}
