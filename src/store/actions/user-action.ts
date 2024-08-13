// add user
export function addUser(user: IUser) {
  const action: UserAction = {
    type: 'ADD_USER',
    user,
  };
}

// set user status message
// update user status message
export function setStatusMessage(user: IUser) {
  const action: UserAction = {
    type: 'SET_STATUS_MESSAGE',
    user,
  };
}

// add user's friends.id
export function addFriend(user: IUser) {
  const action: UserAction = {
    type: 'ADD_FRIEND',
    user,
  };
}
