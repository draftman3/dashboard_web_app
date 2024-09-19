import '../../Styles/Login.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { dataUsers } from '../../data/user_data';


const Login: React.FC = () => {

    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const user = dataUsers.find(user => user.username === username && user.password === password);
        if (user) {

            localStorage.setItem('loggedInUser', username);
            navigate('/Home-Page');
        } else {
            setError('Invalid Username or Password!')
        }
    };

    return (
        <div className='login-container bg-white'>
            <div className="text-2xl mb-3 flex justify-center font-black">Login Page</div>
            <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
                <div className='flex items-center gap-3'>
                    <input 
                        className="border border-gray-300 p-2 rounded-xl" 
                        type="text"
                        placeholder='Username'
                        value={username}
                        onChange={(e) => setusername(e.target.value)}
                    />
                </div>

                <div className='flex items-center gap-3'>
                    <input 
                        className="border border-gray-300 p-2 rounded-xl" 
                        type="password" 
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                    />
                </div>

                {error && <div className='text-red-500 text-sm'>{error} </div>}

                <div className='flex justify-center'>
                    <button type="submit" className='flex border border-gray-300 px-2 py-1 rounded hover:bg-zinc-700 hover:rounded-full hover:text-white hover:transition-all'>
                        Log in
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Login;