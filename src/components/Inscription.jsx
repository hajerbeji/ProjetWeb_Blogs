import React from "react";
import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";


function Inscription({Username,setUsername , Password,setPassword,Email,setEmail}){

    const navigate = useNavigate()
    const valider=async(e)=>{
        e.preventDefault();
        const result=await axios.post('http://localhost/blogs_backend/inscription.php',{
            username:Username,
            password:Password,
            email:Email
        },
        {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
    ).then(()=>
        {
            navigate('/');
            setUsername('');
            setPassword('');
            setEmail('');
        }
    ).catch(error=>alert(error))
    }

   return(
    <div className="inscription">
        <form action="register.php" method="post" className="sous_authentif" onSubmit={valider}>
            <h1>Inscription</h1>
            <div>
                <label htmlFor="">Username :</label>
                <input type="text" name="nom" value={Username} onChange={(e)=>setUsername(e.target.value)} required />
            </div>
            <div>
                <label htmlFor="">Email :</label>
                <input type="email" name="email" value={Email} onChange={(e)=>setEmail(e.target.value)} required />
            </div>
            <div>
                <label htmlFor="">Password :</label>
                <input type="Password" name="pass" value={Password} onChange={(e)=>setPassword(e.target.value)} required />
            </div>
            
            <input type="submit" value="s'inscrire" className="submit_btn" />
        </form>


    </div>
   )
    
}

export default Inscription;