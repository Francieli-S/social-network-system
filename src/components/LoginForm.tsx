'use client'
import * as React from 'react'

const LoginForm: React.FC = () => {
  const [user, setUser] = React.useState<number | null>()

  const handleUserData = (e: React.FormEvent<HTMLInputElement>) => {
    setUser(e.currentTarget.value)
  }

  const authUser = (e: React.FormEvent) => {
    e.preventDefault()

  }

  return (
    <>
      <h1>Log in</h1>
      <form onSubmit={authUser}>
        <input type='text' id='id' placeholder='enter your id' value={user?.id} onChange={handleUserData} />
        <button>Log in</button>
      </form>
    </>
  );
};

export default LoginForm
