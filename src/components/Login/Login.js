import React, { useEffect, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link , useLocation , useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';
import useHistoryst from '../../hooks/useHistoryst';

const Login = () => {
   
   const {user,setUser,signInusingGoogle,logOut,signUp,signIn,pass,setPass, setIsLoading,setName,setUserName} =useAuth();
   const [error,setError] = useState('');
   const {location,history,url,historyState,setHistoryState} = useHistoryst()
   const [isLogIn,setIsLogIn] = useState(true)
  //  const [historyState,setHistoryState] = useState({})
  //  const location = useLocation();
  //  const history = useHistory();
    
    // const url = location.state?.from || '/home';
  //   useEffect(()=>{
  //     setHistoryState(url)
  //     console.log(url)
  //     console.log(historyState)

  // },[])
    

    
    const googleSignInHandler = () =>{
        
        
      signInusingGoogle()
       .then(result =>{
         setUser(result)
          // setName(user.displayName)
          history.push(url)
          // console.log(url)
          

      })
      .finally(
        ()=>{ setIsLoading(false)}
      )

  }
  const signUpHandler = (e) =>{
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
   const handleSubmit = (e) =>{
     if(isLogIn){
       signInHandler(e)
     }
     else{
       signUpHandler(e)
     }
   } 
    


    const signInHandler = e =>{
        signIn(user,pass)
        .then(result =>{
         
          history.push(url)
          
          
          

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
    const toggleLogin = event => {
      setIsLogIn(!event.target.checked);
  }
    return (
        <div className="container p-5 my-5">
            <Form>
                
                {!isLogIn?<Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                  <Form.Label column sm="2">
                    Name
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control   type="name"  placeholder="name" onBlur={nameHandler} required  />
                  </Col>
                </Form.Group>:
                ""}
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                  <Form.Label column sm="2">
                    Email
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control   type="email"  placeholder="example@gmail.com" onBlur={inputHandler} required  />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                  <Form.Label column sm="2">
                    Password
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control type="password"  placeholder="Password" onBlur={passHandler} required />
                  </Col>
                  <Button className="my-3" variant="primary" type="submit" onClick={handleSubmit}>
                  {isLogIn ? "Login" : "Submit"}
                 </Button>
                 
                  
                <div>
                <input
                        onChange={toggleLogin}
                        className="form-check-input"
                        
                        type="checkbox"
                        id="gridCheck1"
                    />
                    <label className="form-check-label " htmlFor="gridCheck1">
                        New User? Create a account.
                    </label>
                </div>
                </Form.Group>
                    {
                <ul>
                  <li className="text-danger">{error}</li>
                </ul>
                   }
                
                

            </Form>
          
                
                <div>
                <br />
                <p>.....or sign up with google.....</p>
                <Button className="my-3" variant="primary" type="submit" onClick={googleSignInHandler}>
                Google SignUp
                </Button>
                </div>
                
            
        </div>
    );
};

export default Login;