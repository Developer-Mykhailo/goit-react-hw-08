import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import s from "./LoginForm.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .min(4, "Too short")
    .required("required")
    .max(30, "Too long")
    .matches(
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      "Please enter a valid email address"
    ),
  password: Yup.string()
    .min(5, "Too short")
    .max(20, "Too long")
    .required("required"),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(
      logIn({
        email: values.email,
        password: values.password,
      })
    )
      .unwrap()
      .then(() => {
        console.log("login success");
      })
      .catch(() => {
        console.log("login error");
      });

    actions.resetForm();
  };

  return (
    <>
      <div>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <Form className={s.form}>
            <div className={s.field_wrap}>
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="span" />
            </div>

            <div className={s.field_wrap}>
              <label htmlFor="password">Password</label>
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="span" />
            </div>

            <button type="submit">Log In</button>
          </Form>
        </Formik>
      </div>
    </>
  );
};
