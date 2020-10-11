import React, { useState } from 'react'
import Link from 'next/link'
import { useGetUsersLazyQuery } from '../../generated/graphql'

const users = () => {
  const [ text, setText ] = useState('')
  const [ getUsers, { loading, data, error }] = useGetUsersLazyQuery({ variables: { name: text } })

  return (
    <div>
      { loading && <div>...loading</div> }
      { error && <div>Error </div> }
      {
        <div>
          users : <input type="text" value={text} onChange={({ target: { value }}) => {
          setText(value)
          getUsers({ variables: { name: value }})
        }}/>
          <table>
            <tbody>
            { data?.users?.map(user =>
              <tr key={user.id}>
                <td><Link href={`/users/${user.id}`}>{user.accountId}</Link></td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            )}
            </tbody>
          </table>
        </div>
      }
    </div>
  )
}

export default users
