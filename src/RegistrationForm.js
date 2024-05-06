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
  return (
    <Form
      onSubmit={onSubmit}
      validate={validate}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <label>First Name</label>
            <Field name="firstName" component="input" type="text" />
            <div>
              <Field name="firstName">
                {({ meta }) =>
                  meta.error && meta.touched && <span>{meta.error}</span>
                }
              </Field>
            </div>
          </div>
          <div>
            <label>Last Name</label>
            <Field name="lastName" component="input" type="text" />
            <div>
              <Field name="lastName">
                {({ meta }) =>
                  meta.error && meta.touched && <span>{meta.error}</span>
                }
              </Field>
            </div>
          </div>
          <div>
            <label>Legal Zip Code</label>
            <Field name="zipCode" component="input" type="text" />
            <div>
              <Field name="zipCode">
                {({ meta }) =>
                  meta.error && meta.touched && <span>{meta.error}</span>
                }
              </Field>
            </div>
          </div>
          <div>
            <label>Social Security Number</label>
            <Field name="ssn" component="input" type="text" />
            <div>
              <Field name="ssn">
                {({ meta }) =>
                  meta.error && meta.touched && <span>{meta.error}</span>
                }
              </Field>
            </div>
          </div>
          <div>
            <label>Date of Birth</label>
            <Field name="dob" component="input" type="text" />
            <div>
              <Field name="dob">
                {({ meta }) =>
                  meta.error && meta.touched && <span>{meta.error}</span>
                }
              </Field>
            </div>
          </div>
          <div>
            <label>Email Address on File</label>
            <Field name="email" component="input" type="text" />
            <div>
              <Field name="email">
                {({ meta }) =>
                  meta.error && meta.touched && <span>{meta.error}</span>
                }
              </Field>
            </div>
          </div>
          <div>
            <label>Phone Number on File</label>
            <Field name="phone" component="input" type="text" />
            <div>
              <Field name="phone">
                {({ meta }) =>
                  meta.error && meta.touched && <span>{meta.error}</span>
                }
              </Field>
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    />
  );
};

const onSubmit = (values) => {
  // Handle form submission here
  console.log(values);
};

export default RegistrationForm;