import React from "react";
import "./Form.css";

const Form = (props) => {
  const { updateInput, submitForm, isDisabled, formErrors, formValues } = props;

  const onSubmit = (event) => {
    event.preventDefault();
    submitForm();
  };

  const onChange = (event) => {
    const { name, value, checked, type } = event.target;
    const valueToUse = type === "checkbox" ? checked : value;
    updateInput(name, valueToUse);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-errors">
        <p>{formErrors.firstName}</p>
        <p>{formErrors.lastName}</p>
        <p>{formErrors.email}</p>
        <p>{formErrors.password}</p>
        <p>{formErrors.acceptTOS}</p>
      </div>
      <div className="form-inputs">
        <label>
          First Name:
          <input
            name="firstName"
            value={formValues.firstName}
            type="text"
            onChange={onChange}
          />
        </label>
        <label>
          Last Name:
          <input
            name="lastName"
            value={formValues.lastName}
            type="text"
            onChange={onChange}
          />
        </label>
        <label>
          Email:
          <input
            name="email"
            value={formValues.email}
            type="text"
            onChange={onChange}
          />
        </label>
        <label>
          Password:
          <input
            name="password"
            value={formValues.password}
            type="text"
            onChange={onChange}
          />
        </label>
        <label>
          I accept terms of service:
          <input
            name="acceptTOS"
            checked={formValues.acceptTOS}
            type="checkbox"
            onChange={onChange}
          />
        </label>
        <button disabled={isDisabled}>Submit</button>
      </div>
    </form>
  );
};

export default Form;