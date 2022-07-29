import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import './LoginStyle.scss'

export default function Login(props) {
  return (
    <div className='login-form-display'>
        <div className='login-form-container'>
            <form className='login-form-content' onSubmit={(e) => props.onSubmitClick(e, props.userDetails)}>
                <TextField id="standard-basic" label="Email" variant="standard" className='text-field-style'
                value={props.userDetails.email}
                required
                onChange={(event) =>
                  props.setUserDetails({ ...props.userDetails, email: event.target.value })
                }/>
                <TextField id="standard-basic" label="Password" variant="standard" className='text-field-style'
                value={props.userDetails.password}
                required
                onChange={(event) =>
                  props.setUserDetails({ ...props.userDetails, password: event.target.value })
                }/>
                <p
                  style={{
                    color: "red",
                    textAlign: "center",
                  }}
                >
                  {props.validation}
                </p>
                <Button className='text-field-style bottom-style'
                type="submit"
                disabled={!(props.userDetails.email && props.userDetails.password)}>Login</Button>
            </form>
        </div>
    </div>
  )
}
