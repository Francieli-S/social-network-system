'use client'
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { addUser } from '@/store/actions/user-action';
import { redirect } from 'next/navigation';
import { StateUsersAuth } from '@/store/reducers/reducer';

const Register: React.FC = () => {
  const [name, setName] = useState('')
  const [profilePicture, setProfilePicture] = useState('')
  const [userRegistered, setUserRegistered] = useState(false);

  const userState = useSelector((state: StateUsersAuth) => state.users)
  
  const dispatch: Dispatch<UserAction> = useDispatch()

  const register = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const action: UserWithOptionalId = {name, profilePicture }
    dispatch(addUser(action))
    setUserRegistered(true)
  }
  console.log(userState); // I had to keep it to see the registered user id then I can log in.

  useEffect(() => {
    if (userRegistered) {
      redirect('/login'); 
    }
  }, [userRegistered])

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