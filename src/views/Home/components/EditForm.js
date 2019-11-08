import React from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form';
import { nameProps, dateProps, statusProps } from '~utils/wrappedLabels';

let EditForm = props => {
  return (
    <form 
      autoComplete="off"
      onSubmit={props.handleSubmit(data => props.onSubmit(data))}
    >
      <fieldset className='register-fieldset'>
        <Field {...nameProps} />
        <Field {...dateProps} />
        <Field {...statusProps} />
      </fieldset>
      <button className='button is-info' type='submit'>
        Guardar
      </button>
    </form>
  );
};

EditForm = reduxForm({
  form: 'Edit-form',
})(EditForm);

EditForm = connect(
  (state, ownProps) => {
    const data = state.movies.info.length > 0 && state.movies.info.map(item => ({
      ...item,
      date: new Date(item.date),
      status: item.status ? 1 : 0,
    }))
    return ({ initialValues:  data[ownProps.id]})
  },
)(EditForm)

export default EditForm;
