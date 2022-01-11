import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Container, Form ,Button} from 'react-bootstrap';
import { useHistory, useLocation,Link } from 'react-router-dom';
import useAuth from '../../Firebase/useAuth';
import './SignUp.css'

const SignUp = () => {
    const { auth,signInWithGoogle,user, createAccountWithGoogle,setUser ,hanldeUserInfoRegister, setIsLoading , updateName } = useAuth();

    const history= useHistory()
    const location = useLocation()
    const url= location.state?.from || "/home"

const [name , setName] =useState('')
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')


const handleGetName=(e)=> {
    console.log(e.target.value);
   setName(e.target.value)
}

const handleGetEmail=(e)=> {
    console.log(e.target.value);
   setEmail(e.target.value)
}

const handleGetPassword=(e)=> {
    console.log(e.target.value);
   setPassword(e.target.value)
}



const handleRegistration=(e)=> {
    e.preventDefault();
    createAccountWithGoogle(email,password)
    .then((res) => {
     
      setIsLoading(true)
      updateName(name)
      const newUser = { email, displayName: name };
      setUser(newUser);
        history.push(url)
        hanldeUserInfoRegister(email, name, 'POST')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      })
      .finally(()=> {
        setIsLoading(false)
      })
}


    
const handleGoogleLogin = () => {
        signInWithGoogle()
          .then((res) => 
            {
              const user = res.user;
              hanldeUserInfoRegister(user.email, user.displayName, 'PUT');
              setIsLoading(true)
            //   setUser(res.user)
              history.push(url)
            }
              )
          .catch((err) => console.log(err))
          .finally(() => {
            setIsLoading(false)
          })
      };

    return (
        <div>
            <Container className="signup-width">
                <h1 className="display-4">Sign Up</h1>


                <Form onSubmit={handleRegistration} className=" bg-light border rounded w-100 mx-auto left mt-5 mb-5 p-5 text-primary">
                <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label >Name</Form.Label>
                <Form.Control onBlur={handleGetName} type="text" placeholder="Your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label >Email address</Form.Label>
                <Form.Control onBlur={handleGetEmail} type="email"  placeholder="Enter Your email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onBlur={handleGetPassword} type="password"  placeholder="Password" />
                </Form.Group>
                
                <input className="btn btn-primary" type="submit" value="Sign Up"/>
                </Form>
                <div className="d-grid gap-2">
                    
                    
                    <Button onClick={handleGoogleLogin}  className="mb-2" variant="primary" size="lg">
                    <FontAwesomeIcon className="me-3" icon={faGoogle} />  Google Sign Up
                    </Button>
                    <h6 className="textcenter text-black">Already Have An Account?
                    <Link className="text-decoration-none" to="/signin" >Sign In Now</Link>
                    </h6>
                    </div>
            </Container>
        </div>
    );
};

export default SignUp;