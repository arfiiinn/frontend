import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './Verifyuser.css'
import cglogo from '../../images/cg-logo.png'
import Config from '../../Settings/config'
import {useLocation} from 'react-router-dom'

function VerifyOtp() {
  
    const [Users, setUsers] = useState([])
    const [state, setState] = useState({
    OTP: "",
    CorpMail: "",
  });
    
    const location = useLocation()
    const userId = location.state.Id

     useEffect(() => {
        axios.get(Config.api + `Users/${userId}`) 
        .then(response => response.data)
            .then(res => setUsers(res))
        .catch(error => console.log(error))
    }, [])

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();
    const payload = {
      OTP: state.OTP,
      CorpMail: state.CorpMail, 
      };
      
}

  return (
    <div className="card Verifyuser-card mx-auto">
    <form className='login-form'>
        <div className='login-body'>
        <h3 className='login-head'>
        <img src={cglogo} className="cg-logo mb-4" alt="Cg-Logo" />iTransform Learning</h3>
        {Users.map((u) => (
        <div class="alert alert-warning" role="alert" key={u.UserId}>
            We have sent a mail to{u.CorpMail} !!
        </div>  
        ))}
        <div class="form-floating">
          <input type="number" class="form-control" id="OTP" name="OTP" placeholder="OTP"onChange={handleChange}/>
          <label for="floatingPassword">OTP</label>
        </div>
        <center>
            <button type="submit" className="login-btn mt-3" onClick={handleSubmitClick}>Verify</button>
        </center>
        </div>
    </form>
    </div>

  )
}

export default VerifyOtp