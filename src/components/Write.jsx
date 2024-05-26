import React, { useEffect, useRef } from "react";
import JoditEditor from 'jodit-react';
import { useState } from "react";
import axios from "axios";

function Write({Username,Password,Email}){
    const editor = useRef(null);

    const [content,setContent] = useState('')
    const [photo,setPhoto] = useState('')
    const [titre,setTitre] = useState('')
    const [num,setNum] = useState(1)
    const [typePost,setTypePost] = useState('')


    const [ifupload,setIfupload] = useState(false)
    const [image_upload,setImage_upload] = useState('')
    useEffect(() => {
        switch (num) {
            case 1:
                setTypePost('Art');
                break;
            case 2:
                setTypePost('Science');
                break;
            case 3:
                setTypePost('Technology');
                break;
            case 4:
                setTypePost('Cinema');
                break;
            case 5:
                setTypePost('Design');
                break;
            case 6:
                setTypePost('Food');
                break;
            default:
                setTypePost('Art');
        }
    }, [num]);

    const ajouter=async(e)=>{
        e.preventDefault();
        const result=await axios.post('http://localhost/blogs_backend/write.php',{
            image:photo,
            title:titre,
            description:content,
            type_post:typePost,
            usernameOfPost:Username,
        },
        {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
    ).then(()=>
        {
            alert("post created successfully !");
            setPhoto('')
            setTitre('')
            setContent('')
            setNum(1)
        }
    ).catch(error=>alert(error))
    }
    return(
        <div className="write">
            <div className="left_side">
                <input type="text" name="titre" placeholder="titre : " value={titre} onChange={(e)=>setTitre(e.target.value)} /><br/>
                <JoditEditor                        
                    ref={editor}
                    value={content}
                    tabIndex={1} 
                    onBlur={newContent => setContent(newContent)} 
                    onChange={newContent => {setContent(newContent)}}
		        />
            </div>
            <div className="right_side">
                <div className="publish">
                    <h3>Status : Draft</h3>
                    <h3>Visibility : Public</h3>
                    <button onClick={()=>setIfupload(true)} >Upload image</button>
                    {ifupload ? 
                    <input type="text" 
                        placeholder="Entrez l'url de l'image" 
                        value={photo} onChange={(e)=>setPhoto(e.target.value)} required
                    /> : null}
                    <br/>
                    <input type="submit" value="Save" onClick={ajouter} />
                    <input type="submit" value="Update" />
                </div>
                <div className="category">
                    <h2>Categorie</h2>
                    <ul>
                        <li><input type="radio" name="art" id="" onClick={()=>setNum(1)} />Art</li>
                        <li><input type="radio" name="science" id="" onClick={()=>setNum(2)}  />Science</li>
                        <li><input type="radio" name="technology" id="" onClick={()=>setNum(3)} />Technology</li>
                        <li><input type="radio" name="cinema" id="" onClick={()=>setNum(4)} />Cinema</li>
                        <li><input type="radio" name="design" id="" onClick={()=>setNum(5)} />Design</li>
                        <li><input type="radio" name="food" id="" onClick={()=>setNum(6)} />Food</li>
                    </ul>
                </div>

            </div>
        </div>
    )
}
export default Write;