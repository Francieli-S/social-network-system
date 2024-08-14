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
      return {
        ...state, users: [...state.users, {id: Math.floor(Math.random() * 100), ...action.user } ]
      }
    // case 'SET_STATUS_MESSAGE': 
    // case 'ADD_FRIEND':

    default:
    return state;
  }

};

export default reducerUser
