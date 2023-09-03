import React from 'react'
import './login.css';

const ComponentA = () => {
  return (
    <div className='pageContainer'>
      <div className='border border-red-400 loginContainer'>
        <h2 style={{marginBottom:'64px', fontSize:'24px'}}>Create account</h2>
        <div className='inputContainer'>
        <label>Email</label>
        <input />
        </div>
        <div className='inputContainer'>
        <label>Password</label>
        <input />
        </div>

      </div>
      <div className='border border-blue-400'>

      </div>


    </div>
  )
}

export default ComponentA