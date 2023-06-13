import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../styles/ui/Auth/auth.css';

const Login = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    // Perform login logic
    console.log(values);
    setSubmitting(false);
  };

  return (
    <section className='container wrapper'>
      <section className='auth-container'>
        <h4>Welcome back</h4>
        <div className='devider'>
          <span>Or</span>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form>
              <fieldset>
                <Field
                  className={`input ${
                    errors.email && touched.email ? 'error' : ''
                  }`}
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Email Address'
                />
                <ErrorMessage
                  name='email'
                  component='div'
                  className='error'
                  style={{ color: 'red' }}
                />
                <Field
                  className={`input ${
                    errors.password && touched.password ? 'error' : ''
                  }`}
                  type='password'
                  name='password'
                  id='password'
                  placeholder='Password'
                />
                <ErrorMessage
                  name='password'
                  component='div'
                  className='error'
                  style={{ color: 'red' }}
                />
                <button
                  type='submit'
                  className='submit'
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Logging in...' : 'Login'}
                </button>
              </fieldset>
            </Form>
          )}
        </Formik>
        <button className='fg-password'>Forgot password</button>
        <hr />

        <p className='small-copy'>Don't have a SnappCar account yet?</p>

        <Link className='register' to='/register'>
          Register
        </Link>
      </section>
    </section>
  );
};

export default Login;
