import {createContext, useState} from 'react';
import {useAuthentication, useUser} from '../hooks/apihooks';
import {useNavigate} from 'react-router-dom';
import PropTypes from 'prop-types';
const UserContext = createContext(null);

const UserProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const {login} = useAuthentication();
  const {getUserByToken} = useUser();
  const navigate = useNavigate();

  const handleLogin = async (credentials) => {
    try {
      const data = await login(credentials);
      localStorage.setItem('token', data.token);
      setUser(data.user);
      console.log(data.user);
      navigate('/');
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleLogout = () => {
    try {
      localStorage.clear();
      setUser(null);
      navigate('/');
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleAutoLogin = async () => {
    try {
      const token = localStorage.getItem('token');

      if (token) {
        const data = await getUserByToken(token);
        setUser(data.user);
        navigate('/');
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <UserContext.Provider
      value={{user, handleLogin, handleLogout, handleAutoLogin}}
    >
      {children}
    </UserContext.Provider>
  );
};
UserProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
export {UserProvider, UserContext};
