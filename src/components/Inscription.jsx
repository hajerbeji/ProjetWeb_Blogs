import React from "react";
import { useState } from "react";
import axios from 'axios'


function Inscription(){
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [mail,setMail]=useState('')

    const valider=async(e)=>{
        e.preventDefault();
        const result=await axios.post('http://localhost/register.php',{
            username:username,
            password:password,
            email:mail}).then(response=>alert(response.data)).catch(error=>alert(error))
    }

   return(
    <div className="inscription">
        <form method="POST" action="register.php" className="sous_authentif" onSubmit={valider}>
            <h1>Inscription</h1>
            <div>
                <label htmlFor="">Username :</label>
                <input type="text" name="nom" value={username} onChange={(e)=>setUsername(e.target.value)} required />
            </div>
            <div>
                <label htmlFor="">Email :</label>
                <input type="email" name="mail" value={mail} onChange={(e)=>setMail(e.target.value)} required />
            </div>
            <div>
                <label htmlFor="">Password :</label>
                <input type="password" name="pass" value={password} onChange={(e)=>setPassword(e.target.value)} required />
            </div>
            
            <input type="submit" value="s'inscrire" className="submit_btn" />
        </form>
    </div>
   )
    
}

export default Inscription;