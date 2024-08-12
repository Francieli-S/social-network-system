interface IUser {
  id: number
  name: string
  profilePicture: string
  friends: number[]
  statusMessage: string
}

interface UserState {
  users: IUser[]
}

// ??
// interface RootState {
//   userState: UserState
//   userAuth: AuthState
// }

// User actions types:
interface AddUserAction {
  type: 'ADD_USER'
  user: IUser
}

interface SetStatusMessageAction {
  type: 'SET_STATUS_MESSAGE'
  user: IUser
}

interface addFriendAction {
  type: 'ADD_FRIEND'
  user: IUser
}

// later: update user status message

type UserAction = AddUserAction | SetStatusMessageAction | addFriendAction


