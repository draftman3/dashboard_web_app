import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const username = localStorage.getItem('loggedInUser');
        if (username) {
            setLoggedInUser(username);
        }
    })  
    
    const handleLogout = () => {
        localStorage.removeItem('loggedInUser');
        navigate('/login-Page');
    };


    return (
        <div className="navbar-container w-full bg-gray-100 static top-0 right-0 flex items-center justify-around">
            <div className='text-primaryTitle text-xl font-bold relative py-2'>
                <h1>Hi! {loggedInUser}👋🏻</h1>
            </div>
            <div>
                Dashboard
            </div>
            <div>
                <button 
                    onClick={handleLogout} 
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">
                    Logout
                </button>
            </div>
            
        </div>
    )
};

export default Navbar;
