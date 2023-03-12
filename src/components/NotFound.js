import React from 'react'
import {useNavigate} from 'react-router-dom'
import {Button} from 'reactstrap'

function NotFound() {
    const navigate = useNavigate()
  return (
    <div className='text-center center' bordered>
        <h1>Ooops!</h1>
        <h2>404-Page Not Found!</h2>
        <Button onClick={()=>navigate("/")}>Back To Home Page!</Button>
    </div>
  )
}

export default NotFound