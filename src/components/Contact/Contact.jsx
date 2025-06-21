import { FaUserLarge } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import s from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();

  //JSX
  return (
    <div className={s.contact_wrap}>
      <div className={s.contact_data}>
        <div className={s.contact_info}>
          <FaUserLarge />
          <p>{name}</p>
        </div>

        <div className={s.contact_info}>
          <FaPhoneAlt />
          <p>{number}</p>
        </div>
      </div>

      <button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
