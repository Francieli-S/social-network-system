const initialUserState: UserState = {
  users: [
    {
      id: 1,
      name: 'Foxy',
      profilePicture: 'url',
      friends: [1],
      statusMessage: 'Online',
    },
  ],
};

const reducerUser = (
  state: UserState = initialUserState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case 'ADD_USER':
      const newUser: IUser = {
        id: Math.random(),
        name: action.user.name,
        profilePicture: action.user.profilePicture,
        friends: action.user.friends,
        statusMessage: action.user.statusMessage
      };
      return {
        ...state, users: state.users.concat(newUser)
      }
    case 'SET_STATUS_MESSAGE':    
    
    default:
    return state;
  }

};
