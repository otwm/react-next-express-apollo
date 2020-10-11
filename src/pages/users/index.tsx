import { useGetUsersQuery } from '../../generated/graphql'
import { useState } from 'react'

const users = () => {
  const [ text, setText ]= useState('')
  const { loading, error, data } = useGetUsersQuery({ variables: { name: text } })

  if (loading) return (<div>...loading</div>)
  if (error) return (<div>Error </div>)

  return (
    <div>
      users : <input type="text" value={text} onChange={({ target: { value }}) => setText(value)}/>
      <table>
        <tbody>
        { data.users.map(user =>
          <tr key={user.id}>
            <td>{user.accountId}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        )}
        </tbody>
      </table>
    </div>
  )
}

export default users
