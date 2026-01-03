// import React, { createContext, useState } from 'react'

// const AuthContext = createContext();

// export const AuthProvider = ({children}) => {

//     const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);

//     const login = (email, password) => {
//         if(email === 'admin@gmail.com' && password === 'admin1234'){
//            const userData = {}
//            setUser(userData)
//         }else if(email === 'customer@gmail.com' && password === 'customer1234'){
//             navigate('/customer/dashboard');
//         }else{
//             alert('Wrong credentials');
//             return;
//         }
//     }

//     const logout = () => {

//     }

//     return (
//         <AuthContext.Provider value={{

//         }}>
//             {children}
//         </AuthContext.Provider>
//     )
// }