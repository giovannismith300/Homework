import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../../firebase/firebase'
import Spinner from "../common/Spinner"

export default function LoginPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [loading, setLoading] = useState(false)

  async function onFormSubmit(e){
    e.preventDefault()
    console.log(email)
    console.log(password)
    try{
      setLoading(true)
      const userCred = await signInWithEmailAndPassword(auth, email, password)
      console.log(userCred)
      navigate('/library')
    }catch(err){
      alert(err)
    }
    setLoading(false)

  }
  return (
    <div className="container my-5">
      <div className ="card card-body">
        <h1 className="text-center"> Log In</h1>

<form onSubmit={onFormSubmit}>
  <div class="form-group mb-2">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
    onChange = {(e) => {
      setEmail(e.target.value)
    }}
    value = {email}
    ></input>
    
  </div>
  <div class="form-group mb-2">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"
    onChange = {(e) => {
      setPassword(e.target.value)
    }}
    value = {password}
    ></input>
  </div>

  <div className=" d-flex justify-content-end">
    <button type="submit" class="btn btn-primary mt-2 d-flex justify-content-end superButton"> {loading ? (<Spinner variant="light"></Spinner>) : ("Log In")}</button>
  </div>
</form>

      </div>
    </div>
  )
}
