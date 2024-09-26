import React from 'react'
import Signin from './Service/Signin'
import Login from './Service/Login'
// import AddUser from './Service/AddUser'

const App = () => {
  return (
    <div>
        <Signin/>
        <hr />
        <Login />
        <hr />
        {/* <AddUser />  */}
    </div>
  )
}

export default App