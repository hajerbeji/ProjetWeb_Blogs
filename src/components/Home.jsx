import React, { useState } from "react";
import Write from "./Write";
import Posts from "./Posts";

function Home({Username,Password,Email,typeChoisis,page}){
    return(
        <div className="home">
            {page==1 ?<Posts typeChoisis={typeChoisis} />  :
            <Write Username={Username} Password={Password} Email={Email} />
            }
                </div>
    )
}
export default Home;