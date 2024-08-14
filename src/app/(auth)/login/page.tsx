'use client';
import { addAuthUser } from '@/store/actions/auth-action';
import { RootState } from '@/store/store';
import { redirect } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { useEffect, useState } from 'react';
import RedirectToRegister from '../../../components/RedirectToRegistet';

const Login: React.FC = () => {
  const [userId, setUserId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [userRegistered, setUserRegistered] = useState(true); // part the functionality to make redirection to /register

  // it selects one of the two reducer: reducerAuth or reducerUser from the store
  const authState = useSelector((state: RootState) => state.reducerAuth.auth);

  const dispatch: Dispatch<AuthAction> = useDispatch();

  const login = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const action: IAuth = { isLoggedIn: true, currentUserId: +userId };
    dispatch(addAuthUser(action));
  };

  useEffect(() => {
    if (authState.isLoggedIn) {
      redirect('/');
    }
    if (authState.error) {
      setErrorMessage(authState.error);
    }
  }, [authState]);

  const handleRegisterRedirect = () => {
    setUserRegistered(false);
    // redirect('/register'); DOES NOT WORK WITHOUT <RedirectToRegister /> component
  };

  return (
    <>
      <h1>Log in</h1>
      <form>
        <input
          type='text'
          id='userId'
          placeholder='enter your id'
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <button onClick={login}>Log in</button>
      </form>
      {errorMessage !== '' ? (
        <div>
          <p>{errorMessage}</p>
          <button onClick={handleRegisterRedirect}>Register</button>
          {!userRegistered && <RedirectToRegister />}
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default Login;
