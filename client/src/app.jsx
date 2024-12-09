import React, { useEffect, useState } from 'react'; // Import useState
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    const [users, setUsers] = useState([]); // Declare state for users

    useEffect(() => {
        axios.get('http://localhost:5000/getUsers')
            .then(response => setUsers(response.data)) // Use 'response' instead of 'users'
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="w-100 100-vh d-flex justify-content-center align-items-center">
            <div className='w-50'>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id}> {/* Add a unique key for each row */}
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.age}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default App;
