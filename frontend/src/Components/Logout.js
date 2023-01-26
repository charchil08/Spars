import React, { useEffect } from 'react'
import {  useNavigate } from 'react-router-dom'
import { Container, Button } from 'react-bootstrap';

const Logout = () => {
  const navigate = useNavigate()

  useEffect(() =>{
    fetch('/logout',{
      method:"GET",
      header:{
        Accept:"aplication/json",
        "Content-Type":"application/json"
      },
      credentials:"include"
    }).then((res) =>{
      navigate.push('/dashboard', { replace: true });
      if(res.status !== 200){
        const error = new Error(res.error);
        throw error;
      }
    }).catch((err) => {
      console.log(err);
    })
  })
  return (
    <div>
      <Container>

      <h1 className=' text-center m-5'>Logout Successfully</h1>
      <Button
            className="text-center"
            variant="primary"
            value="register"
            href='/dashboard'
            type="submit"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width:"wrapContent",
              flex: "1"
            }}
          >
            Login
          </Button>
      </Container>
    </div>
  )
}

export default Logout
