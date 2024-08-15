'use client';
import styles from './Feed.module.css';
import { StateUsersAuth } from '@/store/reducers/reducer';
import { useSelector } from 'react-redux';

const Feed = () => {
  const users: readonly IUser[] = useSelector(
    (state: StateUsersAuth) => state.users
  );
  return (
    <>
    <div className={styles.feedHeading}>
      <h1>Feed</h1>

    </div>
      <div className={styles.feed}>
        {users.map((user) => (
          <div className={styles.userCard} key={user.id}>
            <img
              className={styles.userPicture}
              src={user.profilePicture}
              alt='Friend picture'
            />
            <div>
              <h4>{user.name}</h4>
              <p>{user.statusMessage}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Feed;
