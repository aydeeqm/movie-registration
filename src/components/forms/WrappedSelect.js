import React from 'react';

const renderSelectOption = (option =>
  <option 
    key={option.value}
    value={option.value}
  >
    {option.label}
  </option>)

const WrappedSelect = ({input, displayName, id, required, options, meta: { touched, error, warning } }) => {
  return (
    <div>
      {displayName && displayName !== '' && (
        <div className='labelWrapper'>
          <label htmlFor={id} className='label'>
            {displayName}
          </label>
          {required && (
            <div className='required-sign'>
              <span>*</span>
            </div>
          )}
        </div>
      )}
      <div className='field-body'>
        <div className='field'>
          <div className='control'>
          <div className="select">
            <select {...input} onChange={value => input.onChange(value)}>
              <option>Select</option>
              {options.map(renderSelectOption)}
            </select>
          </div>
          </div>
        </div>
      </div>
      {touched &&
        ((error && <span className="error">{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  )
}

export default WrappedSelect;
