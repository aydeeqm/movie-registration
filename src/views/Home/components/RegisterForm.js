import React from 'react';
import { Field, reduxForm } from 'redux-form';
import WrappedInput from '~components/forms/WrappedInput';
import WrappedSelect from '~components/forms/WrappedSelect';
import WrappedDatePicker from '~components/forms/WrappedDatePicker';
import { statusLabels } from '~utils/constants';


const nameProps = {
  component: WrappedInput,
  displayName: 'Nombre de Película',
  type: 'text',
  id: 'user_name',
  name: 'user_name',
  placeholder: 'usuario',
};

const dateProps = {
  component: WrappedDatePicker,
  displayName: 'Fecha de Publicación',
  type: 'date',
  id: 'date',
  name: 'date',
};

const statusProps = {
  component: WrappedSelect,
  displayName: 'Estado',
  type: 'select',
  id: 'status',
  name: 'status',
  options: statusLabels
}

const RegisterForm = props => {
  return (
    <form>
      <fieldset className='register-fieldset'>
        <Field {...nameProps} />
        <Field {...dateProps} />
        <Field {...statusProps} />
      </fieldset>
      <button className='button' type='submit'>
        Guardar
      </button>
    </form>
  );
};

export default reduxForm({ form: 'Register' })(RegisterForm);
