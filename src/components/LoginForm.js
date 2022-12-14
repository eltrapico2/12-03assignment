import MyAvatar from '../assets/img/MyAvatar.jpg';

function LoginForm() {

  return(
    <div>
      <form className="form-signin w-100 m-auto">
        <div className='mt-5'>
        <img class="mb-4 mt-3 rounded-3" src={MyAvatar} alt="" width="57" height="57" />
        <h1 class="h3 mb-3 mt-4 fw-normal">Please log in</h1>
        </div>
        <div class="form-floating">
          <input type="text" class="form-control" id="floatingInput" placeholder="Username" />
          <label for="floatingInput">Username</label>
        </div>

        <div class="form-floating">
          <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
          <label for="floatingPassword">Password</label>
        </div>

        <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        
        <button class="w-100 btn btn-lg btn-primary" type="submit">Log in</button>
      </form>
    </div>
  )
}

export default LoginForm;