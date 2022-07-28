import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import './LoginStyle.scss'

export default function Login() {
  return (
    <form className='login-form-display'>
        <div className='login-form-container'>
            <div className='login-form-content'>
                <TextField id="standard-basic" label="Email" variant="standard" className='text-field-style'/>
                <TextField id="standard-basic" label="Password" variant="standard" className='text-field-style'/>
                <Button variant="contained" className='text-field-style bottom-style'>Login</Button>
            </div>
        </div>
    </form>
  )
}
