// add user
export function addUser(user: UserWithOptionalId) {
  const action: UserAction = {
    type: 'ADD_USER',
    user,
  };
  return action;
}

// set user status message
// update user status message
export function updateStatusMessage(user: IUser, newStatusMessage: string) {
  const action: UserAction = {
    type: 'UPDATE_STATUS_MESSAGE',
    user,
    newStatusMessage,
  };
  return action;
}

// add user's friends.id
export function addFriend(user: IUser, newFriend: number) {
  const action: UserAction = {
    type: 'ADD_FRIEND',
    user,
    newFriend,
  };
  return action;
}
