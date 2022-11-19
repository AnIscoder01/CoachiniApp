import React from 'react'
import { useSelector } from 'react-redux'
import "./Profile.css"

const Profile = () => {
  const user=useSelector(state=>state.authReducer.user)

if(user.role==="client"){ 
  
  return (
    <div>
        
      <div className="container mt-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-7">
            <div className="card p-3 py-4">
              <div className="text-center">
                <img src="https://i.imgur.com/bDLhJiP.jpg" width={100} className="rounded-circle" />
              </div>
                <div className="text-center mt-3">
                <span className="bg-secondary p-1 px-4 rounded text-white">Client</span>
                <h5 className="mt-2 mb-0">{user&&user.name}</h5>
                <span>{user&&user.role}</span>
                <div className="px-4 mt-1">
                  <p className="fonts">{user&&user.mail} </p>
                </div>
    
             
                <div>

              
                </div>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  )
}
else{
  return(
    <div>
        
      <div className="container mt-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-7">
            <div className="card p-3 py-4">
              <div className="text-center">
                <img src="https://i.imgur.com/bDLhJiP.jpg" width={100} className="rounded-circle" />
              </div>
              <div className="text-center mt-3">
                <span className="bg-secondary p-1 px-4 rounded text-white">Coach</span>
                <h5 className="mt-2 mb-0">{user&&user.name}</h5>
                <span>{user&&user.role}</span>
                <div className="px-4 mt-1">
                  <p className="fonts">{user&&user.mail} </p>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  )

}
}


export default Profile