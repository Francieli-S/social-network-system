interface IUser {
  id: number 
  name: string
  profilePicture?: string
  friends?: number[]
  statusMessage?: string
}

type UserWithOptionalId = Partial<Pick<IUser, 'id'>> & Omit<IUser, 'id'>;

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
  newStatusMessage: string
}

interface AddFriendAction {
  type: 'ADD_FRIEND'
  user: IUser
  newFriend: number
}

type UserAction = AddUserAction | UpdateStatusMessageAction | AddFriendAction


