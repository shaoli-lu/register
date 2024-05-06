import React from 'react';
import { Form, Field, FormSpy } from 'react-final-form';

const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'First Name is required';
  }
  if (!values.lastName) {
    errors.lastName = 'Last Name is required';
  }
  if (!values.zipCode) {
    errors.zipCode = 'Zip Code is required';
  }
  if (!values.ssn) {
    errors.ssn = 'Social Security Number is required';
  }
  if (!values.dob) {
    errors.dob = 'Date of Birth is required';
  }
  if (!values.email) {
    errors.email = 'Email Address is required';
  }
  if (!values.phone) {
    errors.phone = 'Phone Number is required';
  }
  return errors;
};

const RegistrationForm = () => {
  const onSubmit = (values) => {
    // Handle form submission here
    console.log(values);
  };

  return (
    <Form
      onSubmit={onSubmit}
      validate={validate}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          {/* Rest of the form fields */}
          <button type="submit">Submit</button>
        </form>
      )}
    />
  );
};

export default RegistrationForm;