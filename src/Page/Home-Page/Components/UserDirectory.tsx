import { User } from '../../../data/user_data';


const UserDirectory: React.FC<{ users: User[], searchTerm: string }> = ({ users, searchTerm }) => {
    const filteredUsers = users.filter(user => 
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.role.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">User Directory</h2>
            <table className="min-w-full">
                <thead>
                <tr>
                    <th className="py-2 px-4 bg-gray-100 border-b">Name</th>
                    <th className="py-2 px-4 bg-gray-100 border-b">Email</th>
                    <th className="py-2 px-4 bg-gray-100 border-b">Role</th>
                </tr>
                </thead>
                <tbody>
                {filteredUsers.map(user => (
                    <tr key={user.id}>
                    <td className="py-2 px-4 border-b">{user.name}</td>
                    <td className="py-2 px-4 border-b">{user.email}</td>
                    <td className="py-2 px-4 border-b">{user.role}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
    };

export default UserDirectory;