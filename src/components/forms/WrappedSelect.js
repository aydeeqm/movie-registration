import React from 'react';

const renderItemOption = (option => <option key={option.value}>{option.label}</option>)

const Select = ({ options }) => (
  <div class="select">
    <select>
      <option>Select dropdown</option>
      {options.map(renderItemOption)}
    </select>
  </div>
)

const WrappedSelect = ({ displayName, id, required, options, hasError }) => {
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
            <Select
              options={options}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default WrappedSelect;
