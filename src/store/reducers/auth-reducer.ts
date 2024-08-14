type StateUsersAuth = {
  users: IUser[];
  auth: IAuth;
};

const initialState: StateUsersAuth = {
  users: [
    {
      id: 1,
      name: 'Foxy',
      profilePicture: 'url',
      friends: [2],
      statusMessage: 'Online',
    },
    {
      id: 2,
      name: 'Gato',
      profilePicture: 'url',
      friends: [1],
      statusMessage: 'Online',
    },
  ],
  auth: { isLoggedIn: false, currentUserId: null, error: '' },
};

const reducerAuth = (
  state: StateUsersAuth = initialState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case 'LOGIN':
      const registeredUser = state.users.some(
        (user) => user.id === action.auth.currentUserId
      );
      if (registeredUser) {
        return { ...state, auth: action.auth };
      } else {
        return {
          ...state,
          auth: { ...state.auth, error: 'User not registered' },
        };
      }
    
    // case: 'LOGOUT'
    default:
      return state;
  }
};

export default reducerAuth;
