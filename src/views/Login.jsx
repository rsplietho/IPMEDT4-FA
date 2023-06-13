import { Link } from 'react-router-dom';
import '../styles/ui/Auth/auth.css';
const Login = () => {
  const submitHandler = () => {};
  return (
    <section className='container wrapper'>
      <section className='auth-container'>
        <h4>Welcome back</h4>
        <div className='devider'>
          <span>Or</span>
        </div>
        <form onSubmit={submitHandler}>
          <fieldset>
            <input
              className='input'
              type='email'
              name='email'
              id='email'
              placeholder='Email Address'
            />
            <input
              className='input'
              type='password'
              name='password'
              id='password'
              placeholder='Password'
            />
            <button type='submit' className='submit'>
              Login
            </button>
          </fieldset>
        </form>
        <button className='fg-password'>Forgot password</button>
        <hr />

        <p className='small-copy'>Don't have a SnappCar account Yet?</p>

        <Link className='register' to='/register'>
          Register
        </Link>
      </section>
    </section>
  );
};

export default Login;
