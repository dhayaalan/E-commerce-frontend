import React from 'react';
import '../css/Login.css';

function Login() {
  return (
    <div className='bg'>
      <div class='wrapper'>
        <div className='login'>Login Page</div>
        <form class='p-3 mt-3'>
          <div class='form-field d-flex align-items-center'>
            <span class='far fa-user'></span>
            <input
              type='text'
              name='userName'
              id='userName'
              placeholder='Username'
            />
          </div>
          <div class='form-field d-flex align-items-center'>
            <span class='fas fa-key'></span>
            <input
              type='password'
              name='password'
              id='pwd'
              placeholder='Password'
            />
          </div>
          <button class='btn mt-3'>Login</button>
        </form>
        <div class='text-center fs-6'>
          <a href='Login'>Forget password?</a> or <a href='Sign-up'>Sign up</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
