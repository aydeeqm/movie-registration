import React from 'react';
import PropTypes from 'prop-types';

const WrappedInput = ({
  autocompleteValue,
  type,
  widget,
  input,
  placeholder,
  displayName,
  name,
  styles = {},
  meta: { touched, error, warning },
  required,
}) => {
  return (
    <div>
      {displayName && displayName !== '' && (
        <div className={styles.labelWrapper || 'labelWrapper'}>
          <label htmlFor={input.name} className={styles.label || 'label'}>
            {displayName}
          </label>
          {required ? (
            <div className='required-sign'>
              <span>*</span>
            </div>
          ) : null}
        </div>
      )}
      <div className={styles.inputWrapper || 'field-body'}>
        <div className={styles.field || 'field'}>
          <div className={styles.control || 'control'}>
            <input
              autoComplete={autocompleteValue}
              type={type || widget.type}
              id={input.name.replace('[', '_').replace(']', '')}
              placeholder={placeholder || displayName}
              name={name}
              {...input}
              {...widget}
              className={'input'}
            />
          </div>
        </div>
      </div>
      {touched &&
        ((error && <span className="error">{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  );
};

WrappedInput.propTypes = {
  displayName: PropTypes.string,
};

export default WrappedInput;
