import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';

import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

function renderField() {
  return formFields.map(field => (
    <Field {...field} type='text' component={SurveyField} />
  ));
}

const SurveyForm = ({ handleSubmit, onSurveySubmit }) => {
  return (
    <div>
      <form onSubmit={handleSubmit(onSurveySubmit)}>
        {renderField()}
        <Link to='/surveys' className='red btn-flat left white-text'>
          Kembali
        </Link>
        <button
          type='submit'
          className='light-blue darken-4 btn-flat right white-text'
        >
          Lanjut
          <i className='material-icons right'>done</i>
        </button>
      </form>
    </div>
  );
};

function validate(values) {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || '');

  formFields.forEach(({ name, validationMessage }) => {
    if (!values[name]) {
      errors[name] = validationMessage;
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false,
})(SurveyForm);
