import {useNavigate} from 'react-router-dom';
import Button from '../components/UI/Button';
import {useUserContext} from '../hooks/contextHooks';
const Logout = () => {
  const {handleLogout} = useUserContext();

  return (
    <>
      <Button text="Logout" handleClick={handleLogout}></Button>
    </>
  );
};

export default Logout;
