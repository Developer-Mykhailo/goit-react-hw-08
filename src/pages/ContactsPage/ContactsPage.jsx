import { useEffect } from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import { useDispatch } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import s from "./ContactsPage.module.css";

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  //JSX
  return (
    <>
      <h2 style={{ marginBottom: "20px" }}>Contacts</h2>
      <div className={s.wrap}>
        <ContactForm />
        <SearchBox />
      </div>
      <ContactList />
    </>
  );
};

export default ContactsPage;
