import css from "./LogInForm.module.css";
import { Field, Form, Formik } from "formik";
import { useId } from "react";
import { logIn } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";

export default function LogInForm() {
  const emailId = useId();
  const passwordId = useId();

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm();
  };

  const initialValues = {
    email: "",
    password: "",
  };

  return (
    <div className={css.registrationContainer}>
      <h2 className={css.registrationTitle}>Please log in</h2>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form>
          <div className={css.inputContainer}>
            <label htmlFor={emailId}>Login</label>
            <Field name="email" type="text" id={emailId} />
          </div>
          <div className={css.inputContainer}>
            <label htmlFor={passwordId}>Password</label>
            <Field name="password" type="password" id={passwordId} />
          </div>
          <button type="submit">Log In</button>
        </Form>
      </Formik>
    </div>
  );
}
