import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Container, Form ,Button} from 'react-bootstrap';
import { useHistory, useLocation,Link} from 'react-router-dom';
import useAuth from '../../Firebase/useAuth';
import './SignIn.css'


const SignIn = () => {
    const { hanldeUserInfoRegister,signInWithGoogle,setUser ,loginWithEmailAndPassword, setIsLoading} = useAuth();



    const history= useHistory()
const location = useLocation()

const url= location.state?.from || "/home"

const [email , setEmail]= useState("")
const [password , setPassword] = useState("")


const handleGetEmail = (e) =>{
setEmail(e.target.value);
}

const handleGetPassword = (e)=> {
  setPassword(e.target.value);
}




const handleLoginWithEmailAndPassword=(e)=>{
  e.preventDefault();

  loginWithEmailAndPassword(email,password)
  .then((res) => {
    setIsLoading(true)
      setUser(res.user);
      history.push(url)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    })
    .finally(() => {
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
                <h1 className="display-4">Sign In</h1>

                {/* -----------React Bootstrap Form -----------*/}
                <Form  onSubmit={handleLoginWithEmailAndPassword}   className="bg-light border rounded w-100 mx-auto left mt-5 mb-5 p-5 text-primary">
                <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label >Email address</Form.Label>
                <Form.Control onBlur={handleGetEmail} type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onBlur={handleGetPassword} type="password" placeholder="Password" />
                </Form.Group>
                <input className="btn btn-primary" type="submit" value ="Sign in"/>
                </Form>
                <div className="d-grid gap-2">
                    
                    <Button onClick={handleGoogleLogin} className="mb-2" variant="primary" size="lg">
                    <FontAwesomeIcon icon={faGoogle} />  Google Sign In
                    </Button>
                    <h6 className="textcenter text-black">Not A Member?
                    <Link to="/signup" className="text-decoration-none">Sign Up Now</Link>
                    </h6>
                </div>
                {/* ------------end form----------- */}
            </Container>
        </div>
    );
};

export default SignIn;