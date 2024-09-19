import React, { useEffect, useState } from 'react';
import { dataUsers } from '../../data/user_data';
import { useNavigate } from 'react-router-dom';
import { Navbar, Dashboard, UserDirectory } from '../../data/index'

const Home: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [loggedInUserName, setLoggedInUserName] = useState<string | null>(null);
    const navigate = useNavigate();

    // ตรวจสอบว่ามีผู้ใช้ล็อกอินอยู่หรือไม่และค้นหา name ของผู้ใช้
    useEffect(() => {
        const loggedInUsername = localStorage.getItem('loggedInUser'); // username ที่เก็บใน localStorage
        if (loggedInUsername) {
            // หา user ใน mock data ที่ตรงกับ loggedInUsername
            const user = dataUsers.find((user) => user.username === loggedInUsername);
            if (user) {
                setLoggedInUserName(user.name); // เซ็ต name ของผู้ใช้ที่เจอ
            }
        } else {
            // ถ้าไม่มี username ใน localStorage ให้ redirect ไปที่หน้า login
            navigate('/login');
        }
    }, [navigate]);

    return (
        <div>
            <Navbar />
            <div className='home-container'>     
                <div className="container mx-auto p-4 relative top-16">
                    <div>
                        <div className="flex justify-between items-center mb-6">
                            {/* แสดง name แทน username */}
                            <h1 className="text-primaryTitle text-4xl font-bold ">Welcome {loggedInUserName}! 🪅</h1>
                        </div>
                        <div className='pb-6'>
                            <p className='text-gray-500 text-lg'>
                                Dashboard web app! This website has been created as a testing tool utilizing modern technologies such as React, JavaScript, TypeScript, and Tailwind CSS.
                            </p>
                        </div>
                    </div>

                    {/* แสดง Dashboard */}
                    <Dashboard users={dataUsers} />
                    
                    {/* ช่องค้นหาผู้ใช้ */}
                    <div className="mb-4">
                        <input 
                            type="text" 
                            placeholder="Search users..." 
                            value={searchTerm} 
                            onChange={(e) => setSearchTerm(e.target.value)} 
                            className="w-full px-3 py-2 border rounded-md" 
                        />
                    </div>

                    {/* แสดง UserDirectory */}
                    <UserDirectory users={dataUsers} searchTerm={searchTerm} />
                </div>
            </div>
        </div>
    );
};

export default Home;

