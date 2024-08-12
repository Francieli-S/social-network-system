interface IAuth {
  isLoggedIn: boolean
  currentUserId: number | null
}

interface AuthState {
  auth: IAuth
}

interface addAuthUserAction {
  type: 'ADD_AUTH_USER'
  auth: IAuth
}

type AuthAction = addAuthUserAction