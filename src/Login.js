import React from 'react';
import Login from './Login.css';
const login=()=>{
     
     const Signup=()=>
    {
        var userdata=[
            {username:'AMR', passcode:123, cart:[]},
            {username:'og', passcode:234, cart:[]},
             {username:'goat', passcode:345, cart:[]},
        ]
         var username=document.getElementById('username').value;
         var Userpasscode=document.getElementById('passcode').value;
         var activeDetail=userdata.filter((data)=>
        {
            return username==data.username;
        });
        console.log(activeDetail);
        if(activeDetail.length>0)
        {
           if(activeDetail[0].passcode==Userpasscode)
           {
            localStorage.setItem('username',username);
            localStorage.setItem('Password',Userpasscode);
            window.location.replace("/Home");

           }
           else
           {
            alert("Wrong Passcode");
           }
        }    
     };

     
    return(
        <div className="login-page">
            <div className="login-form">
                <h1>Login Page</h1>
                {/* <lable >USER NAME</lable> */}
                <label htmlFor="yourInputId">User Name</label>
                <input id='username' type="text" placeholder='Enter User-Name' className='inputbox'></input>
                {/* <lable >PASSWORD</lable> */}
                <label htmlFor="yourInputId">Password</label>
                <input id='passcode'  type="text" placeholder='Enter Password' className='inputbox'></input>
                <button onClick={Signup} className='b1'>Login</button>
            </div>
        </div>
    )

};
export default login;