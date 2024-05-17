import { Field, Form, Formik } from "formik";
import { useId } from "react";
import css from "./RegistrationForm.module.css";
import { useDispatch } from "react-redux";
import { registr } from "../../redux/auth/operations";
import toast from "react-hot-toast";
export default function RegistrationForm() {
  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(registr(values))
      .unwrap()
      .then(() => {
        toast.success("Success");
        actions.resetForm();
      })
      .catch(() => {
        toast.error("Oops, something went wrong. Try again");
      });
  };

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  return (
    <div className={css.registrationContainer}>
      <h2 className={css.registrationTitle}>Registration Form</h2>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form>
          <div className={css.inputContainer}>
            <label htmlFor={nameId}>Name</label>
            <Field name="name" type="text" id={nameId} />
          </div>
          <div className={css.inputContainer}>
            <label htmlFor={emailId}>Email</label>
            <Field name="email" type="text" id={emailId} />
          </div>
          <div className={css.inputContainer}>
            <label htmlFor={passwordId}>Password</label>
            <Field name="password" type="password" id={passwordId} />
          </div>
          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
}
