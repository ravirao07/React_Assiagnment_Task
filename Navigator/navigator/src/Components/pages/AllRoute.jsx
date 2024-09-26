import React from 'react'
import{Routes,Route} from 'react-router-dom'
import Homepages from './Homepages'
import Aboutpage from './Aboutpage'
import Productpage from './Productpage'
import Projectpage from './Projectpage'
import Loginpage from './Loginpage'
import NotFountpage from './NotFoundpage'
import PrivateRoutes from './PrivateRoutes'

const AllRoute = () => {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Homepages/>}></Route>
      <Route path='about' element={<Aboutpage/>}></Route>
      <Route path='product' element={
        <PrivateRoutes>
        <Productpage/>
        </PrivateRoutes>
        }>
        </Route>
      <Route path='project/:id' element={<Projectpage/>}></Route>
      <Route path='login' element={<Loginpage/>}></Route>
      <Route path='*' element={<NotFountpage/>}></Route>
      </Routes>
    </div>
  )
}

export default AllRoute
