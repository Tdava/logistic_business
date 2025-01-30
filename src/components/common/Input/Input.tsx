import React from 'react';
import { useField } from 'formik';
import './Input.scss';

interface InputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="input-wrapper">
      <label htmlFor={props.name}>{label}</label>
      <input {...field} {...props} id={props.name} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default Input; 