// src/components/UserList.js
import React, { useEffect, useState } from 'react';
import { db } from '../firebase';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const unsubscribe = db.collection('users').onSnapshot((snapshot) => {
            const usersData = [];
            snapshot.forEach((doc) => usersData.push({ ...doc.data(), id: doc.id }));
            setUsers(usersData);
        });

        return () => unsubscribe();
    }, []);

    return (
        <div>
            {users.map((user) => (
                <div key={user.id}>
                    {user.name} - {user.email} - {user.age}
                </div>
            ))}
        </div>
    );
};

export default UserList;
