import React from "react";

function Write(){
    return(
        <div className="write">
            <div className="left_side">
                <input type="text" name="title" placeholder="Title : " /><br/>
                <textarea name="text" id=""></textarea>
            </div>
            <div className="right_side">
                <div className="publish">
                    <h3>Status : Draft</h3>
                    <h3>Visibility : Public</h3>
                    <input type="file" name="upload image" id="" />
                    <input type="submit" value="Update" />
                </div>
                <div>
                    <h2>Categorie</h2>
                    <ul>
                        <li><input type="radio" name="art" id="" />Art</li>
                        <li><input type="radio" name="science" id="" />Science</li>
                        <li><input type="radio" name="technology" id="" />Technology</li>
                        <li><input type="radio" name="cinema" id="" />Cinema</li>
                        <li><input type="radio" name="design" id="" />Design</li>
                        <li><input type="radio" name="food" id="" />Food</li>
                    </ul>
                </div>

            </div>
        </div>
    )
}
export default Write;