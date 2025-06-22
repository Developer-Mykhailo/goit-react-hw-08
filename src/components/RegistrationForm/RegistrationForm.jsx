import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import s from "./RegistrationForm.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short")
    .max(20, "Too long")
    .required("required"),
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

export const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(
      register({
        name: values.name,
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
    <div>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className={s.form}>
          <div className={s.field_wrap}>
            <label htmlFor="name">Name</label>
            <Field type="name" name="name" />
            <ErrorMessage name="name" component="span" />
          </div>

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

          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
};
