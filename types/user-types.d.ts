interface IUser {
  id?: number // make it optional here is not the best idea, but...
  name: string
  profilePicture?: string
  friends?: number[]
  statusMessage?: string
}

interface UserState {
  users: IUser[]
}

// User actions types:
interface AddUserAction {
  type: 'ADD_USER'
  user: IUser
}

interface UpdateStatusMessageAction {
  type: 'UPDATE_STATUS_MESSAGE'
  user: IUser
}

interface AddFriendAction {
  type: 'ADD_FRIEND'
  user: IUser
}

type UserAction = AddUserAction | UpdateStatusMessageAction | AddFriendAction


