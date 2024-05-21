import useForm from '../hooks/formHooks';
import {useNavigate} from 'react-router-dom';
import {useUserContext} from '../hooks/contextHooks';
import Button from './UI/Button';
const LoginForm = () => {
  const navigate = useNavigate();
  const {handleLogin} = useUserContext();
  const initValues = {
    username: '',
    password: '',
  };
  console.log(localStorage.token);
  const doLogin = async () => {
    console.log(inputs);

    try {
      handleLogin(inputs);
    } catch (e) {
      console.log(e.message);
    }
  };

  const {inputs, handleInputChange, handleSubmit} = useForm(
    doLogin,
    initValues,
  );

  console.log(inputs);
  return (
    <>
      <h1>Login</h1>
      <form
        onSubmit={handleSubmit}
        className="m-5 flex flex-col items-center gap-4 bg-slate-400"
      >
        <div>
          <label htmlFor="loginuser">Username</label>
          <input
            className="input-def"
            name="username"
            type="text"
            id="loginuser"
            onChange={handleInputChange}
            autoComplete="username"
          />
        </div>
        <div>
          <label htmlFor="loginpassword">Password</label>
          <input
            className="input-def"
            name="password"
            type="password"
            id="loginpassword"
            onChange={handleInputChange}
            autoComplete="current-password"
          />
        </div>
        <Button text="Login" />
      </form>
    </>
  );
};
export default LoginForm;
