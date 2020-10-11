import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { gql } from '@apollo/client';
import * as React from 'react';
import * as Apollo from '@apollo/client';
import * as ApolloReactComponents from '@apollo/client/react/components';
export type Maybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  JSON: any;
  Date: any;
  DateTime: any;
};

export type Launch = {
  __typename?: 'Launch';
  id: Scalars['ID'];
  site: Maybe<Scalars['String']>;
  mission: Maybe<Mission>;
  rocket: Maybe<Rocket>;
  isBooked: Scalars['Boolean'];
};

export type Rocket = {
  __typename?: 'Rocket';
  id: Scalars['ID'];
  name: Maybe<Scalars['String']>;
  type: Maybe<Scalars['String']>;
};

export type Mission = {
  __typename?: 'Mission';
  name: Maybe<Scalars['String']>;
  missionPatch: Maybe<Scalars['String']>;
};


export type MissionMissionPatchArgs = {
  size: Maybe<PatchSize>;
};

export enum PatchSize {
  Small = 'SMALL',
  Large = 'LARGE'
}

export type LaunchConnection = {
  __typename?: 'LaunchConnection';
  cursor: Scalars['String'];
  hasMore: Scalars['Boolean'];
  launches: Array<Maybe<Launch>>;
};

export type Query = {
  __typename?: 'Query';
  launches: LaunchConnection;
  launch: Maybe<Launch>;
  root: Maybe<Scalars['String']>;
  user: Maybe<User>;
  users: Maybe<Array<Maybe<User>>>;
};


export type QueryLaunchesArgs = {
  pageSize: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
};


export type QueryLaunchArgs = {
  id: Scalars['ID'];
};


export type QueryUserArgs = {
  accountId: Scalars['String'];
};


export type QueryUsersArgs = {
  name: Scalars['String'];
};




export type Mutation = {
  __typename?: 'Mutation';
  root: Maybe<Scalars['String']>;
  login: Maybe<Scalars['String']>;
  addUser: Maybe<AddUserResponse>;
};


export type MutationLoginArgs = {
  accountId: Scalars['String'];
  pass: Scalars['String'];
};


export type MutationAddUserArgs = {
  user: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  accountId: Scalars['String'];
  name: Scalars['String'];
  pass: Scalars['String'];
  email: Scalars['String'];
  bio: Maybe<Scalars['String']>;
  createAt: Scalars['DateTime'];
  updateAt: Maybe<Scalars['DateTime']>;
};

export type AddUserResponse = {
  __typename?: 'addUserResponse';
  success: Scalars['Boolean'];
  message: Maybe<Scalars['String']>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Launch: ResolverTypeWrapper<Launch>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Rocket: ResolverTypeWrapper<Rocket>;
  Mission: ResolverTypeWrapper<Mission>;
  PatchSize: PatchSize;
  LaunchConnection: ResolverTypeWrapper<LaunchConnection>;
  Query: ResolverTypeWrapper<{}>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  Mutation: ResolverTypeWrapper<{}>;
  User: ResolverTypeWrapper<User>;
  addUserResponse: ResolverTypeWrapper<AddUserResponse>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Launch: Launch;
  ID: Scalars['ID'];
  String: Scalars['String'];
  Boolean: Scalars['Boolean'];
  Rocket: Rocket;
  Mission: Mission;
  LaunchConnection: LaunchConnection;
  Query: {};
  Int: Scalars['Int'];
  JSON: Scalars['JSON'];
  Date: Scalars['Date'];
  DateTime: Scalars['DateTime'];
  Mutation: {};
  User: User;
  addUserResponse: AddUserResponse;
}>;

export type LaunchResolvers<ContextType = any, ParentType extends ResolversParentTypes['Launch'] = ResolversParentTypes['Launch']> = ResolversObject<{
  id: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  site: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mission: Resolver<Maybe<ResolversTypes['Mission']>, ParentType, ContextType>;
  rocket: Resolver<Maybe<ResolversTypes['Rocket']>, ParentType, ContextType>;
  isBooked: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RocketResolvers<ContextType = any, ParentType extends ResolversParentTypes['Rocket'] = ResolversParentTypes['Rocket']> = ResolversObject<{
  id: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MissionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mission'] = ResolversParentTypes['Mission']> = ResolversObject<{
  name: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  missionPatch: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MissionMissionPatchArgs, never>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LaunchConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['LaunchConnection'] = ResolversParentTypes['LaunchConnection']> = ResolversObject<{
  cursor: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasMore: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  launches: Resolver<Array<Maybe<ResolversTypes['Launch']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  launches: Resolver<ResolversTypes['LaunchConnection'], ParentType, ContextType, RequireFields<QueryLaunchesArgs, never>>;
  launch: Resolver<Maybe<ResolversTypes['Launch']>, ParentType, ContextType, RequireFields<QueryLaunchArgs, 'id'>>;
  root: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'accountId'>>;
  users: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, RequireFields<QueryUsersArgs, 'name'>>;
}>;

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  root: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  login: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationLoginArgs, 'accountId' | 'pass'>>;
  addUser: Resolver<Maybe<ResolversTypes['addUserResponse']>, ParentType, ContextType, RequireFields<MutationAddUserArgs, 'user'>>;
}>;

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  id: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  accountId: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pass: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  bio: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createAt: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updateAt: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AddUserResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['addUserResponse'] = ResolversParentTypes['addUserResponse']> = ResolversObject<{
  success: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  message: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  Launch: LaunchResolvers<ContextType>;
  Rocket: RocketResolvers<ContextType>;
  Mission: MissionResolvers<ContextType>;
  LaunchConnection: LaunchConnectionResolvers<ContextType>;
  Query: QueryResolvers<ContextType>;
  JSON: GraphQLScalarType;
  Date: GraphQLScalarType;
  DateTime: GraphQLScalarType;
  Mutation: MutationResolvers<ContextType>;
  User: UserResolvers<ContextType>;
  addUserResponse: AddUserResponseResolvers<ContextType>;
}>;


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;

export type GetUserQueryVariables = Exact<{
  accountId: Scalars['String'];
}>;


export type GetUserQuery = (
  { __typename?: 'Query' }
  & { user: Maybe<(
    { __typename?: 'User' }
    & UserDataFragment
  )> }
);

export type GetUsersQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type GetUsersQuery = (
  { __typename?: 'Query' }
  & { users: Maybe<Array<Maybe<(
    { __typename?: 'User' }
    & UserDataFragment
  )>>> }
);

export type LoginMutationVariables = Exact<{
  accountId: Scalars['String'];
  pass: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'login'>
);

export type AddUserMutationVariables = Exact<{
  user: Scalars['String'];
}>;


export type AddUserMutation = (
  { __typename?: 'Mutation' }
  & { addUser: Maybe<(
    { __typename?: 'addUserResponse' }
    & Pick<AddUserResponse, 'success' | 'message'>
  )> }
);

export type UserDataFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'accountId' | 'name' | 'email'>
);

export const UserDataFragmentDoc = gql`
    fragment UserData on User {
  id
  accountId
  name
  email
}
    `;
export const GetUserDocument = gql`
    query getUser($accountId: String!) {
  user(accountId: $accountId) {
    ...UserData
  }
}
    ${UserDataFragmentDoc}`;
export type GetUserComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetUserQuery, GetUserQueryVariables>, 'query'> & ({ variables: GetUserQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetUserComponent = (props: GetUserComponentProps) => (
      <ApolloReactComponents.Query<GetUserQuery, GetUserQueryVariables> query={GetUserDocument} {...props} />
    );
    

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      accountId: // value for 'accountId'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions?: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, baseOptions);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, baseOptions);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;
export const GetUsersDocument = gql`
    query getUsers($name: String!) {
  users(name: $name) {
    ...UserData
  }
}
    ${UserDataFragmentDoc}`;
export type GetUsersComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetUsersQuery, GetUsersQueryVariables>, 'query'> & ({ variables: GetUsersQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetUsersComponent = (props: GetUsersComponentProps) => (
      <ApolloReactComponents.Query<GetUsersQuery, GetUsersQueryVariables> query={GetUsersDocument} {...props} />
    );
    

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, baseOptions);
      }
export function useGetUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, baseOptions);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersQueryResult = Apollo.QueryResult<GetUsersQuery, GetUsersQueryVariables>;
export const LoginDocument = gql`
    mutation login($accountId: String!, $pass: String!) {
  login(accountId: $accountId, pass: $pass)
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;
export type LoginComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<LoginMutation, LoginMutationVariables>, 'mutation'>;

    export const LoginComponent = (props: LoginComponentProps) => (
      <ApolloReactComponents.Mutation<LoginMutation, LoginMutationVariables> mutation={LoginDocument} {...props} />
    );
    

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      accountId: // value for 'accountId'
 *      pass: // value for 'pass'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const AddUserDocument = gql`
    mutation addUser($user: String!) {
  addUser(user: $user) {
    success
    message
  }
}
    `;
export type AddUserMutationFn = Apollo.MutationFunction<AddUserMutation, AddUserMutationVariables>;
export type AddUserComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<AddUserMutation, AddUserMutationVariables>, 'mutation'>;

    export const AddUserComponent = (props: AddUserComponentProps) => (
      <ApolloReactComponents.Mutation<AddUserMutation, AddUserMutationVariables> mutation={AddUserDocument} {...props} />
    );
    

/**
 * __useAddUserMutation__
 *
 * To run a mutation, you first call `useAddUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addUserMutation, { data, loading, error }] = useAddUserMutation({
 *   variables: {
 *      user: // value for 'user'
 *   },
 * });
 */
export function useAddUserMutation(baseOptions?: Apollo.MutationHookOptions<AddUserMutation, AddUserMutationVariables>) {
        return Apollo.useMutation<AddUserMutation, AddUserMutationVariables>(AddUserDocument, baseOptions);
      }
export type AddUserMutationHookResult = ReturnType<typeof useAddUserMutation>;
export type AddUserMutationResult = Apollo.MutationResult<AddUserMutation>;
export type AddUserMutationOptions = Apollo.BaseMutationOptions<AddUserMutation, AddUserMutationVariables>;