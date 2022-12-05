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
    }).then(function(response) {
    //alert("Success!");
    const url = 'http://localhost/sat-app/12-03assignmentdb.php';
    axios.get(url).then((response)=>{
        setUsers(response.data);
        //console.log(users);
    })
    }).catch(function(response) {
        alert("Error!");
    });
}

  return(
    <div>
        <h1>Users List</h1>
        <center>
        <form className='border' style={{width:'600px'}}>
          <label className='fw-bold me-3  mt-5'>Full Name </label>
            <input type="text" name="fullname" value={fullname} onChange = {(e) => setFname(e.target.value)}/><br/>
            <label className='fw-bold  me-3 mt-2'>Username </label>
            <input type="text" name="username" value={username} onChange = {(e) => setUname(e.target.value)}/><br/>
            <label className='fw-bold  me-3 mt-2'>Password </label>
            <input type="text" name="pasword" value={password} onChange = {(e) => setPword(e.target.value)}/><br/><br/>
            <input type="submit" onClick={submitBtn} /><br/><br/>
        </form>
        </center>
    </div>
  )


}

export default RegistrationForm;