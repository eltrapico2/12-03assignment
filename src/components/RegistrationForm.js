import {useState, useEffect} from 'react';
import axios from 'axios';

function RegistrationForm() {
  const [fullname, setFname] = useState();
  const [username, setUname] = useState();
  const [password, setPword] = useState();
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    const url = 'http://localhost/sat-app/12-03assignmentdb.php'; //link to db
    axios.get(url).then((response)=>{
        setUsers(response.data);
        console.log(users);
    })
})

const submitBtn = function() {
  let getData = new FormData();

  getData.append('fullname', fullname);
  getData.append('username', username);
  getData.append('password', password);
  getData.append('function', 'insert');

  axios({
    method: 'POST',
    url: 'http://localhost/sat-app/12-03assignmentdb.php',
    data: getData,
    config: 'Content-Type = "multipart/form-data"'
    }).then(function(_response) {
    //alert("Success!");
    const url = 'http://localhost/sat-app/12-03assignmentdb.php';
    axios.get(url).then((response)=>{
    setUsers(response.data);
    //console.log(users);
    })
    }).catch(function(_response) {
    alert("Error!");
    });
}

  return(
    <center>
      <div></div>
      <div class="container mt-5">
        <form className="form-signup w-100 m-auto">
          <div>
            <h1 className="h3 my-5 fw-normal">Please Sign-up</h1>
          </div>

          <div class="row justify-content-start align-items-center">
            <label for="inputFullname" className='col-sm-4 col-form-label'>Full Name </label>
            <div className="col-sm-8">
              <input type="text" className="form-control" name="fullname" id="inputFullname" value={fullname} onChange = {(e) => setFname(e.target.value)}/>
            </div>
          </div>

          <div className="row 3 justify-content-start align-items-center">
            <label for="inputUsername" className='col-sm-4 col-form-label'>Username </label>
            <div className="col-sm-8">
              <input type="text" className="form-control" name="username" id='inputUsername' value={username} onChange = {(e) => setUname(e.target.value)}/>
            </div>
          </div>

          <div className="row mb-5 justify-content-start align-items-center">
            <label for="inputPassword" className='col-sm-4 col-form-label'>Password </label>
            <div class="col-sm-8">
              <input type="text" class="form-control" name="password" id="inputPassword" value={password} onChange = {(e) => setPword(e.target.value)}/>
            </div>
          </div>

          <button class="w-100 btn btn-lg btn-primary" type="submit" onClick={submitBtn}>Submit</button>
        </form>
      </div>
    </center>
  )
}

export default RegistrationForm;