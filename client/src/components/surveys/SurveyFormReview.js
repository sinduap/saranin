import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as actions from '../../actions';
import formFields from './formFields';

const reviewForm = formValues => {
  return formFields.map(({ label, name, key }) => (
    <div key={key}>
      <label>{label}</label>
      <div>{formValues[name]}</div>
    </div>
  ));
};

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  return (
    <div>
      <h5>Periksa kembali form anda</h5>
      {reviewForm(formValues)}
      <button
        className='yellow darken-3 btn-flat left white-text'
        onClick={onCancel}
      >
        Batal
      </button>
      <button
        onClick={() => submitSurvey(formValues, history)}
        type='submit'
        className='light-blue darken-4 btn-flat right white-text'
      >
        Kirim
        <i className='material-icons right'>email</i>
      </button>
    </div>
  );
};

const mapStateToProps = ({ form: { surveyForm } }) => {
  return {
    formValues: surveyForm.values,
  };
};

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
