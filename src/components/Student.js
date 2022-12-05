import {useState, useEffect} from 'react';
import axios from 'axios';

function Student() {
    const [fname, setFname] = useState();
    const [lname, setLname] = useState();
    const [age, setAge] = useState();
    const [students, setStudents] = useState([]);

    useEffect(()=>{
        const url = 'http://localhost/sat-app/db.php'; //link to db
        axios.get(url).then((response)=>{
            setStudents(response.data);
            console.log(students);
        })
    })

    const submitBtn = function() {
        let getData = new FormData();

        getData.append('fname', fname);
        getData.append('lname', lname);
        getData.append('age', age);
        getData.append('function', 'insert');

        axios({
            method: 'POST',
            url: 'http://localhost/sat-app/db.php',
            data: getData,
            config: 'Content-Type = "multipart/form-data"'
        }).then(function(response) {
        //alert("Success!");
        const url = 'http://localhost/sat-app/db.php';
        axios.get(url).then((response)=>{
            setStudents(response.data);
            console.log(students);
        })
        }).catch(function(response) {
            alert("Error!");
        });
    }

    const delBtn = function(e) {
        //alert (e.currentTarget.id);
        let getData = new FormData();
        
        getData.append('stud_id', e.currentTarget.id);
        getData.append('function', 'delete');
        
        axios({
            method: 'POST',
            url: 'http://localhost/sat-app/db.php',
            data: getData,
            config: 'Content-Type = "multipart/form-data"'
        }).then(function(result) {
        //alert("Success!");
        const url = 'http://localhost/sat-app/db.php';
        axios.get(url).then((response)=>{
            setStudents(response.data);
            console.log(students);
        })
        }).catch(function(response) {
            alert("Error!");
        });
    }

    const upBtn = function(e) {
        //alert(e.currentTarget.title);
        let getData = new FormData();
        getData.append('stud_id', e.currentTarget.title);
        getData.append('fname', document.getElementById('fname' + e.currentTarget.title).value);
        getData.append('lname', document.getElementById('lname' + e.currentTarget.title).value);
        getData.append('age', document.getElementById('age' + e.currentTarget.title).value);
        getData.append('function', 'update');

        axios({
            method: 'POST',
            url: 'http://localhost/sat-app/db.php',
            data: getData,
            config: 'Content-Type = "multipart/form-data"'
        }).then(function(result) {
        alert("Successfully updated!");
        
        }).catch(function(response) {
            alert("Error!");
            console.log('error');
        });
    }

    return(
        <div>
            <h1>Student's List</h1>
            <center>
            <form className='border' style={{width:'600px'}}>
              <label className='fw-bold me-3  mt-5'>Name </label>
                <input type="text" name="fname" value={fname} onChange = {(e) => setFname(e.target.value)}/><br/>
                <label className='fw-bold  me-3 mt-2'>Date of Birth </label>
                <input type="text" name="lname" value={lname} onChange = {(e) => setLname(e.target.value)}/><br/>
                <label className='fw-bold  me-3 mt-2'>Username </label>
                <input type="number" name="age" value={age} onChange = {(e) => setAge(e.target.value)}/><br/><br/>
                <input type="submit" onClick={submitBtn} /><br/><br/>
            
            </form>
            </center>
            <table>
                <thead>
                    <tr>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                  
                {students.map((val) =>{
                    return(
                    <tr key={val.stud_id}>
                        <td><input defaultValue={val.firstname} id={'fname'+val.stud_id} /></td>
                        <td><input defaultValue={val.lastname} id={'lname'+val.stud_id}/></td>
                        <td><input defaultValue={val.age} id={'age'+val.stud_id} /></td>
                        <td><button id={val.stud_id} onClick={delBtn} >Delete</button></td>
                        <td><button title={val.stud_id} onClick={upBtn} >Update</button></td>
                    </tr>
                    )
                })}

                </tbody>
            </table>
        </div>
      )
    }

export default Student;