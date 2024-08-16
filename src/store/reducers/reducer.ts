import users from '../../../data/users_seed';

export type StateUsersAuth = {
  users: IUser[];
  auth: IAuth;
};

const initialState: StateUsersAuth = {
  users: [...users],
  auth: { isLoggedIn: false, currentUserId: null, error: '' },
};

const reducer = (
  state: StateUsersAuth = initialState,
  action: AuthAction | UserAction
): StateUsersAuth => {
  switch (action.type) {
    case 'LOGIN':
      const registeredUser = state.users?.find(
        (user) => user.id == action.auth.currentUserId
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

    case 'ADD_USER':
      return {
        ...state,
        users: [
          ...state.users,
          {
            ...action.user,
            id: Math.floor(Math.random() * (100 - 16)) + 16,
            friends: [],
            statusMessage: 'No status message.',
          },
        ],
      };

    case 'UPDATE_STATUS_MESSAGE':
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.user.id) {
            // Spread the existing user properties first, then update statusMessage
            return { ...user, statusMessage: action.newStatusMessage };
          }
          return user;
        }),
      };

    case 'ADD_FRIEND':
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.user.id) {
            return {
              ...user,
              friends: [...user.friends].concat(action.newFriend),
            };
          }
          return user;
        }),
      };

    default:
      return state;
  }
};

export default reducer;
