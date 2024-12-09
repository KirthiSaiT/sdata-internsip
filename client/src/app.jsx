import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    const [users, setUsers] = useState([]); // Declare state for users

    useEffect(() => {
        axios.get('http://localhost:5000/getUsers')
            .then(response => {
                console.log("Fetched Users:", response.data); // Log the response to check the data
                setUsers(response.data); // Set the users data
            })
            .catch(err => {
                console.error("Error fetching data:", err); // Log any errors that occur during fetching
            });
    }, []);

    return (
        <div className="w-100 100-vh d-flex justify-content-center align-items-center">
            <div className="w-50">
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
  {users.length > 0 ? (
    users.map(user => (
      <tr key={user._id}> {/* Use _id for key if available */}
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.age}</td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="3">No data available</td> {/* Show message if no users */}
    </tr>
  )}
</tbody>

                </table>
            </div>
        </div>
    );
}

export default App;
