import React from 'react';
import cx from 'classnames';


export const firstNameTextField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => {
  return (
    <div className={cx('form-group', {'has-error': touched && error})}>
      <label className="control-label">{label}</label>
      <div>
        <input {...input} placeholder={label} type={type} className="form-control" />
        {touched &&
          ((error && <span className="text-danger">{error}</span>) ||
            (warning && <span>{warning}</span>))}
      </div>
    </div>
  )
};