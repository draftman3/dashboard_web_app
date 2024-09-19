import { User } from '../../../data/user_data';

const Dashboard: React.FC<{ users: User[] }> = ({ users }) => {
    const totalUsers = users.length;
    const roleCount = users.reduce((acc, user) => {
        acc[user.role] = (acc[user.role] || 0) + 1;
        return acc;
    }, {} as Record<string, number>);

    return (
        <div className="bg-white shadow rounded-lg p-6 mb-6 ">
            <h2 className="text-xl font-bold mb-4">Dashboard</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-blue-100 p-4 rounded-lg">
                    <h3 className="font-bold text-blue-800">Total Users</h3>
                    <p className="text-2xl">{totalUsers}</p>
                </div>
                {Object.entries(roleCount).map(([role, count]) => (
                <div key={role} className="bg-green-100 p-4 rounded-lg">
                    <h3 className="font-bold text-green-800">{role}s</h3>
                    <p className="text-2xl">{count}</p>
                </div>
                ))}
            </div>
        </div>
    );
    };

export default Dashboard;