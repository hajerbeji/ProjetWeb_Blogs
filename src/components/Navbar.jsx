import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar({ Username, setPage }) {
    const navigate = useNavigate();

    const handleNavigateToInscription = () => {
        navigate('/inscription');
    };

    return (
        <div className="navbar">
            <ul>
                <li onClick={() => setPage(1)}>Art</li>
                <li onClick={() => setPage(1)}>Science</li>
                <li onClick={() => setPage(1)}>Technology</li>
                <li onClick={() => setPage(1)}>Cinema</li>
                <li onClick={() => setPage(1)}>Design</li>
                <li onClick={() => setPage(1)}>Food</li>
                <li>{Username !== '' ? Username : "Username"}</li>
                <li onClick={handleNavigateToInscription}>Login</li>
                <li onClick={() => setPage(2)}>Write</li>
            </ul>
        </div>
    );
}

export default Navbar;
