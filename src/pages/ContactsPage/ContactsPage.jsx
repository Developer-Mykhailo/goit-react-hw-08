import { useEffect } from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import { useDispatch } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <h2 style={{ marginBottom: "20px" }}>Contacts</h2>
      <ContactForm />
      <ContactList />
    </>
  );
};

export default ContactsPage;
