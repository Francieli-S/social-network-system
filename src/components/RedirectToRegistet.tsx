// this component was the way to make the redirection work after click button to register

'use client';
import { redirect } from 'next/navigation';
import { useEffect } from 'react';

const RedirectToRegister = () => {
  useEffect(() => {
    redirect('/register');
  }, []);
  return null;
};

export default RedirectToRegister;
