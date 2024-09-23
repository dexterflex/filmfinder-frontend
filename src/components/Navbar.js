import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import authService from '../services/authService'

const Navbar = () => {
    const navigate = useNavigate()

    const handleLogout = async (e) => {
        e.preventDefault();
        try {
            await authService.logout()
            navigate("/signin");
        }
        catch {

        }
    }
    return (
        <>
            <h1 className='main-title'>FilmFinder</h1>
            <nav>
                <Link to="/">Home</Link>
                {
                    localStorage.getItem('token') ?
                        <>
                            <Link to="/dashboard">Dashboard</Link>
                            <Link onClick={(e) => handleLogout(e)}>Logout</Link>
                        </> :
                        <>
                            <Link to="/signup">Signup</Link>
                            <Link to="/signin">Signin</Link>
                        </>
                }
            </nav >
        </>
    );
};

export default Navbar;
