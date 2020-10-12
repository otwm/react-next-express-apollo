import React, { useState } from 'react'

const login = () => {
  const [ id, setId ] = useState('')
  const [ pass, setPass ] = useState('')

  const _login = () => {

  }
  return (
    <>
      <input type={'text'} value={id} onChange={({target: {value}}) => setId(value)}/>
      <input type={'password'} value={pass} onChange={({target: {value}}) => setPass(value)}/>
      <button onClick={_login}>login</button>
    </>
  )
}

export default login
