import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import {
  selectError,
  selectFilteredContacts,
  selectLoading,
} from "../../redux/contactsSlice";

const ContactList = () => {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const contacts = useSelector(selectFilteredContacts);

  return (
    <>
      {loading && <h2>Loading...</h2>}
      {error && { error }}
      <ul className={s.list}>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
