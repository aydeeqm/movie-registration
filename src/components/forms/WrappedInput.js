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
  meta,
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
              className={
                meta.touched && meta.error
                  ? styles.inputError || `${styles.input ? styles.input : ''} inputError`
                  : styles.input || 'input'
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

WrappedInput.propTypes = {
  displayName: PropTypes.string,
};

export default WrappedInput;
