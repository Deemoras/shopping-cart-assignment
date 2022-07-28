import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


import './RegisterStyle.scss'

export default function Register() {
  return (
    <form>
        <div className='form-container'>
            <div className='form-content'>
                <TextField id="standard-basic" label="First Name" variant="standard" className='text-field-style'/>
                <TextField id="standard-basic" label="Last Name" variant="standard" className='text-field-style'/>
                <TextField id="standard-basic" label="Email" variant="standard" className='text-field-style'/>
                <TextField id="standard-basic" label="Password" variant="standard" className='text-field-style'/>
                <TextField id="standard-basic" label="Confirm Password" variant="standard" className='text-field-style'/>
                <Button variant="contained" className='text-field-style bottom-style'>Signup</Button>
            </div>
        </div>
    </form>
  )
}
