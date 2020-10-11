import React from 'react'
import { GetServerSideProps } from 'next'
import { GetUserDocument, User } from '../../generated/graphql'
import apolloClient from '../../utils/apolloClient'

interface UserDetailProps {
  user: User
}

const userDetail = ({ user }: UserDetailProps) => {
  return (
    <>
      { Object.values(user).join(', ') }
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params}) => {
  const { id } = params
  const { data } = await apolloClient.query({
    query: GetUserDocument,
    variables: id
  })
  return {
    props: {
      user: data?.user?? {},
    }
  }
}

export default userDetail
