'use client';
import styles from './page.module.css';
import { StateUsersAuth } from '@/store/reducers/reducer';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { addFriend, updateStatusMessage } from '@/store/actions/user-action';
import Feed from '@/components/Feed/Feed';

const Profile: React.FC = () => {
  const [isUpdatingStatusMessage, setIsUpdatingStatusMessage] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const userID = useSelector(
    (state: StateUsersAuth) => state.auth?.currentUserId
  );
  const users: readonly IUser[] = useSelector(
    (state: StateUsersAuth) => state.users
  );
  const loggedUser: IUser | undefined = users?.find(
    (user) => user.id == userID
  );

  const friends = users.filter((user) =>
    loggedUser?.friends?.includes(user.id)
  );

  const dispatch: Dispatch<UserAction> = useDispatch();

  const showUpdateInput = () => {
    setIsUpdatingStatusMessage(!isUpdatingStatusMessage);
  };

  const saveStatusMessage = () => {
    loggedUser && dispatch(updateStatusMessage(loggedUser, statusMessage));
  };

  const addNewFriend = (newFriend: IUser): void => {
    const friendID = newFriend.id;
    loggedUser && dispatch(addFriend(loggedUser, friendID));
  };

  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <h1>Profile</h1>
        <h3>Hi, {loggedUser && loggedUser.name}</h3>
        <div>
          <h4>Status: {loggedUser?.statusMessage}</h4>
          <button onClick={showUpdateInput}>Update status</button>
          {isUpdatingStatusMessage && (
            <div>
              <input
                type='text'
                id='statusMessage'
                placeholder='enter new status'
                value={statusMessage}
                onChange={(e) => setStatusMessage(e.target.value)}
              />
              <button onClick={saveStatusMessage}>Save</button>
            </div>
          )}
        </div>
        <img
          className={styles.profilePicture}
          src={loggedUser?.profilePicture}
          alt='Profile picture'
        />
        <h4>My friends:</h4>
        <div className={styles.friendsContainer}>
          {friends.map((friend) => (
            <div key={friend.id}>
              <h4>{friend.name}</h4>
              <img
                className={styles.friendPicture}
                src={friend.profilePicture}
                alt='Friend picture'
              />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.feed}>
        <Feed
          addNewFriend={addNewFriend}
          loggedUser={loggedUser}
          users={users}
        />
      </div>
    </div>
  );
};
export default Profile;
