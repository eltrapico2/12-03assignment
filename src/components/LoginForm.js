import React from 'react';

function LoginForm() {
  return(
    <div>
      <form className='add-form'>
      <div className='form-control'>
        <label>Email Address</label>
        <input
          type='text'
          placeholder='Email Address'
        />
      </div>
      <div className='form-control'>
        <label>Password</label>
        <input
          type='text'
          placeholder='Password'
        />
      </div>
      <input type='submit' value='Login' className='btn btn-block' />
      </form>
    </div>
  )
}

export default LoginForm;