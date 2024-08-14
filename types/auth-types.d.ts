interface IAuth {
  isLoggedIn: boolean
  currentUserId: number | null
  error?: string
}

interface AuthState {
  auth: IAuth
}

interface addAuthUserAction {
  type: 'LOGIN'
  auth: IAuth
}

type AuthAction = addAuthUserAction