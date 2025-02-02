import { useContext } from 'react';
import { AuthContext } from '../context/context';

export default function useAuth() {
  const auth = useContext(AuthContext);
  return auth;
}
