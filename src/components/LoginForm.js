function LoginForm() {
  return(
    <div>
      <form>
      <div>
        <label>Email Address</label>
        <input
          type='text'
          placeholder='Email Address'
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type='text'
          placeholder='Password'
        />
      </div>
      <input type='submit' value='Login' className='btn btn-outline-dark' />
      </form>
    </div>
  )
}

export default LoginForm;