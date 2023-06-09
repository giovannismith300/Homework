import React from 'react'
import {signOut} from 'firebase/auth'
import {Link} from 'react-router-dom'
import {auth} from "../../firebase/firebase"
import {useNavigate} from 'react-router-dom'


export default function Navbar(props) {
    const navigate = useNavigate()
async function onLogoutClicked(){
    navigate("/")
    await signOut(auth)
    
}



  return (
    <nav className="navbar navbar-expand-lg bg-primary "> 
        <div className='container-fluid'>
            <div className="navbar-brand d-flex" id="myNavBar">
                <p id="library">Library</p><p id="express">Express</p>
            </div>
            <button className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls = "navbarSupportedContent"
            aria-expanded = "false"
            aria-label= "Toggle navigation">

                <i className="bi bi-list"></i>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    {props.user ? (
                        <>
                    <li className="nav-item">
                        <Link className="nav-link active" to="/library"> Library </Link>
                    </li>
                        <li className="nav-item">
                            <div className="btn btn-primary" onClick={onLogoutClicked}>
                                Logout
                            </div>
                        </li>
                        </>
                    ) : (
                        <>
                        <li className="nav-item">
                            <Link className="nav-link active disabled" to="/library"> Library </Link>
                        </li>
                        <li>
                            <Link className = "nav-link active" to ="/">
                                Log In
                            </Link>
                        </li>

                        <li>
                            <Link className = "nav-link active" to ="/register">Register</Link>
                        </li>
                        </>

                    )}

                </ul>
            </div>

        </div>

    </nav>
  )
}
