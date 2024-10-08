'use client';
import { addAuthUser } from '@/store/actions/auth-action';
import { redirect } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { useEffect, useState } from 'react';
import { StateUsersAuth } from '@/store/reducers/reducer';

const Login: React.FC = () => {
  const [userId, setUserId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [userRegistered, setUserRegistered] = useState(true);

  const authState = useSelector((state: StateUsersAuth) => state.auth);

  const dispatch: Dispatch<AuthAction> = useDispatch();

  const login = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const action: IAuth = { isLoggedIn: true, currentUserId: +userId };
    dispatch(addAuthUser(action));
  };

  useEffect(() => {
    if (authState.isLoggedIn) {
      redirect('/profile');
    }
    if (authState.error) {
      setErrorMessage(authState.error);
    }
  }, [authState]);

  const handleRegisterRedirect = () => {
    setUserRegistered(false);
  };
  
  useEffect(() => {
    if (!userRegistered) {
      redirect('/register'); 
    }
  }, [userRegistered])

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
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default Login;
