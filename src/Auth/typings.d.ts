interface AuthState {
  isFetching: boolean;
  error: boolean;
  isAuthenticated: boolean;
}

type AuthActionData = {
  token: string; 
}

interface AuthAction {
  type: string;
  data?: AuthActionData
}

type ActionGetter = () => AuthAction;
