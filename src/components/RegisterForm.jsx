import {useUser} from '../hooks/apihooks';
import useForm from '../hooks/formHooks';
import Button from '../components/UI/Button';
import {useNavigate} from 'react-router-dom';
const RegisterForm = () => {
  const {register} = useUser();
  const navigate = useNavigate();
  const initValues = {
    username: '',
    password: '',
    email: '',
  };

  const doRegister = async () => {
    console.log('doRegister', inputs);

    try {
      const userData = await register(inputs);
      console.log('doRegister', userData);
      navigate('/login');
    } catch (error) {
      alert(error.message);
    }
  };

  const {handleSubmit, handleInputChange, inputs} = useForm(
    doRegister,
    initValues,
  );

  return (
    <>
      <h1 className="m-20">Register</h1>
      <form
        onSubmit={handleSubmit}
        className="m-5 flex flex-col items-center gap-4 bg-slate-400"
      >
        <div>
          <label htmlFor="registeruser">Username</label>
          <input
            className="input-def"
            name="username"
            type="text"
            id="registeruser"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="registeremail">Email</label>
          <input
            className="input-def"
            name="email"
            type="email"
            id="registeremail"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="registerpassword">Password</label>
          <input
            className="input-def"
            name="password"
            type="password"
            id="registerpassword"
            onChange={handleInputChange}
          />
        </div>
        <Button text="Register" />
      </form>
    </>
  );
};

export default RegisterForm;
