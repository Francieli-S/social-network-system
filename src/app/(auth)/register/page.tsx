'use client'
import { RootState } from '@/store/store';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { addUser } from '@/store/actions/user-action';

const Register: React.FC = () => {
  // if we are using global state, why to save local? Is it because we have to save the inputs 
  // before call the dispatch?
  const [name, setName] = useState('')
  const [profilePicture, setProfilePicture] = useState('')

  // it selects one of the two reducer: reducerAuth or reducerUser from the store
  const userState = useSelector((state: RootState) => state.reducerUser.users)
  
  const dispatch: Dispatch<UserAction> = useDispatch()

  const register = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const action: IUser = {name, profilePicture}
    dispatch(addUser(action))
  }

  return (
    <>
    <h1>Register</h1>
      <form>
        <input
          type='text'
          id='name'
          placeholder='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
         <input
          type='text'
          id='profilePicture'
          placeholder='profile picture url'
          value={profilePicture}
          onChange={(e) => setProfilePicture(e.target.value)}
        />
        <button onClick={register}>Register</button>
      </form>
    </>
  );
};

export default Register;