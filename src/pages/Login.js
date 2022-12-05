import {Routes, Route} from 'react-router-dom';

function Login() {
  return(
    <div>
        <Routes>
          <Route path='/registrationform' element={<RegistrationForm />}/>;
        </Routes>
      </div>
    
  )
}

export default Login;