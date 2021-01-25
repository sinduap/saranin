import React from 'react';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ input, meta: { error, touched }, label }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} />
      <p className={touched ? 'red-text' : null}>{touched && error}</p>
    </div>
  );
};
