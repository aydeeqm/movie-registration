import React from 'react';
import { Field, reduxForm } from 'redux-form';
import WrappedInput from '~components/forms/WrappedInput';

const nameProps = {
  component: WrappedInput,
  type: 'text',
  id: 'user_name',
  name: 'user_name',
  placeholder: 'usuario',
};

const passwordProps = {
  component: WrappedInput,
  type: 'password',
  id: 'password',
  name: 'password',
  placeholder: '***********',
};

const LoginForm = props => {
  return (
    <form>
      <fieldset className='login-fieldset'>
        <legend>Welcome</legend>
        <Field {...nameProps} />
        <Field {...passwordProps} />
      </fieldset>
      <button className='button' type='submit'>
        Ingresar
      </button>
    </form>
  );
};

export default reduxForm({ form: 'login' })(LoginForm);
