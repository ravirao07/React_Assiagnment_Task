import React, { useContext } from 'react';
import { Themecontex } from '../context/Themecontext';
const Title = () => {
  const {theme}=useContext(Themecontex)
  return (
    <div>
        <h1>Themes</h1>
        <h1>Theme is {theme}</h1>
    </div>
  )
}

export default Title