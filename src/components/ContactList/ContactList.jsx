import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectLoading } from "../../redux/contacts/selectors";
import { selectFilteredContacts } from "../../redux/filters/selectors";
import s from "./ContactList.module.css";

const ContactList = () => {
  const loading = useSelector(selectLoading);
  const contacts = useSelector(selectFilteredContacts);

  return (
    <>
      {loading && <h2>Loading...</h2>}

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
