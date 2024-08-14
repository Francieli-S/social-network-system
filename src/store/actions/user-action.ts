// add user
export function addUser(user: IUser) {
  const action: UserAction = {
    type: 'ADD_USER',
    user,
  };
  return action;
}

// set user status message
// update user status message
export function setStatusMessage(user: IUser) {
  const action: UserAction = {
    type: 'SET_STATUS_MESSAGE',
    user,
  };
  return action;
}

// add user's friends.id
export function addFriend(user: IUser) {
  const action: UserAction = {
    type: 'ADD_FRIEND',
    user,
  };
  return action;
}
