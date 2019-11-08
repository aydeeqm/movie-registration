import React from 'react';
import DatePicker from "react-datepicker";

const WrappedDatePicker = ({ startDate, onChange, displayName, id, required }) => (
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
          showPopperArrow={false}
          selected={startDate}
          onChange={onChange}
          placeholderText='dd/mm/yyyy'
          calendarClassName="custom-date-picker"
        />
      </div>
    </div>
  </div>
</div>
)

export default WrappedDatePicker;
