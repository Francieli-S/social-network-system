interface IUser {
  id: number
  name: string
  profilePicture: string
  friends: number[]
  statusMessage: string
}

interface IAuth {
  isLoggedIn: boolean
  currentUserId: number
}

interface UserState {
  users: IUser[]
}

interface AuthState {
  auth: IAuth
}

interface RootState {
  userState: UserState
  userAuth: AuthState
}