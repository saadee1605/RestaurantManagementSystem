import React, { useState, useEffect, useRef } from 'react';
import '../CSS/LoginSignup.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = (props) => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [response, setResponse] = useState('');
  const [isResponse, setIsResponse] = useState(false);
  const [upperHeading, setUpperHeading] = useState('Login Form');
  const [isLogin, setIsLogin] = useState(true);
  const [transition, setTransition] = useState(true);
  const [handleError, setError] = useState(false);
  const myDivRef = useRef(null);
  const navigate = useNavigate();
console.log(name,password);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const dataForLogin = { email, password };
    try {
      const response = await axios.post(
        'http://localhost:5000/api/auth/login',
        dataForLogin,
        { withCredentials: true } 
      );
      console.log(response.data);
      
      setEmail('');
      setPassword('');
      setResponse(response.data.message);
      setIsResponse(true);
      navigate('/')
    } catch (error) {
      setEmail('');
      setPassword('');
      setResponse(error.response.data.message);
      setIsResponse(true);
      setError(true);
      console.error('Login failed:', error);
    }
    setTimeout(() => {
      setResponse('');
      setIsResponse(false);
      setError(false);
    }, 3000);
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    const dataForSignup = { name, username, email, password };
    try {
      const response = await axios.post('http://localhost:5000/api/auth/signup', dataForSignup);
      console.log('Signup successful:', response.data);
      setName('');
      setEmail('');
      setUsername('');
      setPassword('');
      setResponse(response.data.message);
      setIsResponse(true);
    } catch (error) {
      setName('');
      setEmail('');
      setUsername('');
      setPassword('');
      setResponse(error.response.data.message);
      setError(true);
      setIsResponse(true);
    }
    setTimeout(() => {
      setResponse('');
      setIsResponse(false);
      setError(false);
    }, 3000);
  };

  if (myDivRef.current) {
    if (isResponse && handleError) {
      myDivRef.current.style.opacity = 1;
      myDivRef.current.style.backgroundColor = 'red';
    } else if (isResponse && !handleError) {
      myDivRef.current.style.opacity = 1;
      myDivRef.current.style.backgroundColor = '#4a90e2';
    } else {
      myDivRef.current.style.opacity = 0;
      myDivRef.current.style.backgroundColor = '#4a90e2';
    }
  }

  const switchToSignup = () => {
    setUpperHeading('Signup Form');
    setIsLogin(false);
  };

  const switchToLogin = () => {
    setUpperHeading('Login Form');
    setIsLogin(true);
  };

  useEffect(() => {
    setTransition(false);
    const timeout = setTimeout(() => {
      setTransition(true);
    }, 400);

    return () => clearTimeout(timeout);
  }, [upperHeading]);

  return (
    <div>
      <h1 ref={myDivRef} className='response'>{response}</h1>
      <div className="main-log-sig">
        <div className="login-signUp">
          <h2 style={{ textAlign: 'center' }}>{upperHeading}</h2>
          <hr style={{ marginBottom: '20px' }} />
          <div className="log-sig-but">
            <button className={`${isLogin ? 'buttt' : ''}`} onClick={switchToLogin}>
              Login
            </button>
            <button className={`${!isLogin ? 'buttt' : ''}`} onClick={switchToSignup}>
              Sign Up
            </button>
          </div>

          {isLogin ? (
            <div className={`main-log-sig-container log ${transition ? 'show' : 'hide'}`}>
              <form className="form-log-sig" onSubmit={handleLoginSubmit}>
                <input
                  type="text"
                  placeholder="Email or username"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="off"  
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div>
                  <span>Not a member?</span>
                  <span style={{ cursor: 'pointer', color: 'blue' }} onClick={switchToSignup}>
                    Signup now
                  </span>
                </div>
                <button type="submit" className="log-sig-buut">
                  Login
                </button>
              </form>
            </div>
          ) : (
            <div className={`main-log-sig-container sig ${transition ? 'show' : 'hide'}`}>
              <form className="form-log-sig" onSubmit={handleSignupSubmit}>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className="log-sig-buut">
                  Sign Up
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUp;