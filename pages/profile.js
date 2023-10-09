/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useAuth } from '../utils/context/authContext';
import Signout from '../components/Signout';

export default function Profile() {
  const { user } = useAuth();
  console.warn(user);

  return (
    <>
      <h1>{user.displayName}</h1>
      <h2>{user.email}</h2>
      <img src={user.photoURL} alt="profile name here" />
      <p>{user.metadata.lastSignInTime}</p>
      <Signout />
    </>
  );
}
