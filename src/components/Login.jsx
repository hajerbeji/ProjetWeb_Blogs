import React from "react";
import { useState } from "react";
import axios from 'axios'

function Login(){
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [mail,setMail]=useState('')

    const valider=async()=>{
        const result=await axios.post('http://localhost:80/register.php',{username,password,mail});
    }

    return(
        <div className="login">
            <div className="sous_authentif">
                <h1>Login</h1>
                <div>
                    <label htmlFor="">Username : </label>
                    <input type="text" name="username" onChange={(e)=>{setUsername(e.target.value)}} />
                </div>
                <div>
                    <label htmlFor="">Password : </label>
                    <input type="password" name="password" onChange={(e)=>{setPassword(e.target.value)}} />
                </div>
                <input type="submit" value="Login" className="submit_btn" />
            </div>
        </div>
    )
}
export default Login;