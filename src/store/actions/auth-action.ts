export function addAuthUser(auth: IAuth) {
  const action: AuthAction = {
    type: 'LOGIN',
    auth
  }
  return action
}