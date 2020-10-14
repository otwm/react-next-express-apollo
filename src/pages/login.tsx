import React, { useState } from 'react'
import * as Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import { useLoginMutation } from '../generated/graphql'

const login = () => {
  const router = useRouter()
  const [ accountId, setAccountId ] = useState('')
  const [ pass, setPass ] = useState('')
  const [ _login, { error, loading }] = useLoginMutation({
    onCompleted({ login}) {
      Cookies.set('token', login)
      router.push('/')
    }
  })

  if (loading) return <><p>...loading</p></>
  if (error) throw error

  return (
    <>
      <input type={'text'} value={accountId} onChange={({target: {value}}) => setAccountId(value)}/>
      <input type={'password'} value={pass} onChange={({target: {value}}) => setPass(value)}/>
      <button onClick={() => _login({ variables: { accountId, pass }})}>login</button>
    </>
  )
}

export default login
