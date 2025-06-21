import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { addContact } from "../../redux/contactsOps";
import s from "./ContactForm.module.css";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short")
    .max(50, "Too long")
    .required("Required"),
  number: Yup.string()
    .matches(/^\d{7,}$/, "Number must be at least 7 digits")
    .required("Required"),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  // hendler
  const handleSubmit = (values, actions) => {
    dispatch(
      addContact({
        name: values.name,
        number: values.number,
      })
    );
    actions.resetForm();
  };

  // JSX
  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={s.form}>
        <div className={s.field_wrap}>
          <label htmlFor="name">Name</label>
          <Field className={s.input} type="text" name="name" />
          <ErrorMessage name="name" component="span" />
        </div>

        <div className={s.field_wrap}>
          <label htmlFor="number">Number</label>
          <Field className={s.input} type="text" name="number" />
          <ErrorMessage name="number" component="span" />
        </div>

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
