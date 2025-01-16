import React from 'react';
import { AuthContext } from '../context/context';

export default function AuthProvider({ children }) {
  return <AuthContext />;
}
