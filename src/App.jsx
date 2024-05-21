import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './views/Home';
import './App.css';
import Profile from './views/Profile';
import Upload from './views/Upload';
import Single from './views/Single';
import Login from './views/Login';
import ProtectedRoute from './components/ProtectedRoute';
import Logout from './views/Logout';
import {UserProvider} from './contexts/UserContext';

const App = () => {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/single/:id" element={<Single />} />
            <Route path="/logout" element={<Logout />} />
          </Route>
        </Routes>
      </UserProvider>
    </Router>
  );
};
export default App;
