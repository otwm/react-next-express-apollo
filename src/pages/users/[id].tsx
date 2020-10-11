import { useGetUserQuery } from '../../generated/graphql'

const userDetail = () => {
  const { loading, error, data } = useGetUserQuery({ variables: { accountId: 'test1' }})
  return (
    <>
      { loading && <p>...loading</p> }
      { error && <p>{error}</p> }
      { Object.values(data?.user?? {}).join(', ') }
    </>
  )
}

export default userDetail
