'use client'
import { addAuthUser } from '@/store/actions/auth-action';
import { RootState } from '@/store/store';
import * as React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';

const LoginForm: React.FC = () => {
  const [userId, setUserId] = React.useState('')
  
  const authState = useSelector((state: RootState) => state.reducerAuth.auth)

  const dispatch: Dispatch<any> = useDispatch()

  const login = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    console.log('data before login', authState);
    const action: AuthAction = {type: 'LOGIN', auth: { isLoggedIn: true, currentUserId: +userId} }
    dispatch(addAuthUser(action.auth))
    console.log('data after login', authState);
  }

  // redirect

  return (
    <>
      <h1>Log in</h1>
      <form>
        <input type='text' id='userId' placeholder='enter your id' value={userId} onChange={e => setUserId(e.target.value)} />
        <button onClick={login}>Log in</button>
      </form>
    </>
  );
};

export default LoginForm
