const initialAuthState: AuthState = {
  auth: { isLoggedIn: false, currentUserId: null },
};

const reducerAuth = (
  state: AuthState = initialAuthState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case 'ADD_AUTH_USER':
      const currentAuthUser: IAuth = {
        isLoggedIn: true,
        currentUserId: action.auth.currentUserId,
      };
      return { auth: currentAuthUser };

    default:
      return state;
  }
};
