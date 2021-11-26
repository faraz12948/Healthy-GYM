import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link,useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useHistoryst from '../../hooks/useHistoryst';


const Register = () => {
    const {user,setUser,signInusingGoogle,logOut,signUp,signIn,pass,setPass,setIsLoading,setName,setUserName} = useAuth();
    const {location,history,url,historyState,setHistoryState} = useHistoryst()
  
    // const location = useLocation();
    // const history = useHistory();
    const [error,setError] = useState('');
    
    
    
    // const url = location.state?.from || '/home';
    // console.log(url)
    
    
    
    


    const signUpHandler = e =>{
        signUp(user,pass)
        .then(result =>{
          history.push(url)
          setUserName();
          
          // console.log(url)
          

      })
      .finally(()=>{
        setIsLoading(false)
      })
        .catch((error) => {
        
          setError(error.message)
          // ..
        });
        e.preventDefault()
    }
    
    const inputHandler = e =>{
        setUser(e?.target.value)
    }
    const passHandler = e =>{
        setPass(e?.target.value)
    }
    const nameHandler = e =>{
      setName(e?.target.value)

    }
    




    return (
        <div className="container p-5 my-5">
            <Form>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                  <Form.Label column sm="2">
                    Name
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control type="name" placeholder="your name" onBlur={nameHandler} required/>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                  <Form.Label column sm="2">
                    Email
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control type="email" placeholder="example@gmail.com" onBlur={inputHandler} required/>
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                  <Form.Label column sm="2">
                    Password
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control type="password" placeholder="Password" onBlur={passHandler} required />
                  </Col>
                  <Button className="my-3" variant="primary" type="submit" onClick={signUpHandler}>
                 SignUp
                 </Button>
                  <p>Already have an account?  <Link to="/login">login</Link></p>
                </Form.Group>
                {
                <ul>
                  <li className="text-danger">{error}</li>
                </ul>
                   }
                
                

            </Form>
                
            

          
                
                <br />
                <p>.....or sign up with google.....</p>
                <Button className="my-3" variant="primary" type="submit" onClick={signInusingGoogle}>
                Google SignUp
                </Button>
                
            
        </div>
    );
};

export default Register;