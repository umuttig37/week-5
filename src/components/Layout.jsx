import {Outlet, Link} from 'react-router-dom';
import {useUserContext} from '../hooks/contextHooks';
import {useEffect} from 'react';
const Layout = () => {
  const {handleAutoLogin} = useUserContext();
  useEffect(() => {
    handleAutoLogin();
  }, []);
  const {user} = useUserContext();
  console.log('user: ', user);
  return (
    <>
      <nav className="absolute left-0 top-0  m-auto w-screen border-b font-bold">
        <ul className="flex flex-row justify-evenly pb-2 pt-2">
          <li>
            <Link to="/">Home</Link>
          </li>
          {user && (
            <>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/upload">Upload</Link>
              </li>
            </>
          )}
          <li>
            {user ? (
              <Link to="/logout">Logout</Link>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li>
        </ul>
      </nav>
      <main className="mt-5">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
