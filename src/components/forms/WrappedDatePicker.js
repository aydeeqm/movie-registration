import React from 'react';
import moment from 'moment';
import DatePicker from "react-datepicker";
import PropTypes from 'prop-types';

export const formatDate = value => (value ? moment(value) : null);

export const normalizeDate = value => (value.value ? value.value.format() : null);

const WrappedDatePicker = ({ displayName, id, required, input, meta: { touched, error, warning } }) => {
  return (
    <div>
    {displayName && displayName !== '' && (
      <div className='labelWrapper'>
        <label htmlFor={id} className='label'>
          {displayName}
        </label>
        {required ? (
          <div className='required-sign'>
            <span>*</span>
          </div>
        ) : null}
      </div>
    )}
    <div className='field-body'>
      <div className='field'>
        <div className='control'>
          <DatePicker
            id={input.name}
            name={input.name}
            showPopperArrow={false}
            selected={input.value}
            onChange={value => input.onChange(value)}
            placeholderText='dd/mm/yyyy'
            calendarClassName="custom-date-picker"
          />
        </div>
      </div>
    </div>
    {touched &&
        ((error && <span className="error">{error}</span>) ||
          (warning && <span>{warning}</span>))}
  </div>
  )
}

WrappedDatePicker.propTypes = {
  /** Data for the input */
  input: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.instanceOf(moment),
    onChange: PropTypes.func,
  }).isRequired,
  /** Label to be shown in the select */
  displayName: PropTypes.string.isRequired,
  /** Add a mark if it's required */
  required: PropTypes.bool,
  
};


export default WrappedDatePicker;
