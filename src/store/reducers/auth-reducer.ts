const initialAuthState: AuthState = {
  auth: { isLoggedIn: false, currentUserId: null },
};

const reducerAuth = (
  state: AuthState = initialAuthState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case 'LOGIN':
      const currentAuthUser: IAuth = {
        isLoggedIn: true,
        currentUserId: action.auth.currentUserId,
      };
      return { ...state, auth: currentAuthUser };

    default:
      return state;
  }
};

export default reducerAuth
