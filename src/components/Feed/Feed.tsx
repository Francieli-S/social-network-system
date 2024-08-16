'use client';
import styles from './Feed.module.css';

interface FuncProps {
  addNewFriend(newFriend: IUser): void;
  loggedUser: IUser | undefined;
  users: readonly IUser[];
}

const Feed: React.FC<FuncProps> = ({ addNewFriend, loggedUser, users }) => {
  return (
    <>
      <div className={styles.feedHeading}>
        <h1>Feed</h1>
      </div>
      <div className={styles.feed}>
        {users
          // Filter out logged user
          .filter((user) => loggedUser && user.id !== loggedUser.id)
          .map((user) => (
            <div
              onClick={() => addNewFriend(user)}
              className={styles.userCard}
              key={user.id}
            >
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
