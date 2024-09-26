// import React, { useState } from 'react';
// // import { db } from '../firebase';
// import{db} from '../Service/fire'

// const AddUser = () => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [age, setAge] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (name && email && age) {
//             await db.collection('users').add({ name, email, age: parseInt(age) });
//             setName('');
//             setEmail('');
//             setAge('');
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <input
//                 type="text"
//                 placeholder="Name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 required
//             />
//             <input
//                 type="email"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//             />
//             <input
//                 type="number"
//                 placeholder="Age"
//                 value={age}
//                 onChange={(e) => setAge(e.target.value)}
//                 required
//             />
//             <button type="submit">Add User</button>
//         </form>
//     );
// };

// export default AddUser;
