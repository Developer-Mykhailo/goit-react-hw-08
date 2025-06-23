import { FaUserLarge } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import s from "./Contact.module.css";
import DeleteModal from "../DeleteModal/DeleteModal";
import { useState } from "react";

const Contact = ({ contact: { name, number, id } }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  //JSX
  return (
    <>
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

        <button type="button" onClick={() => setIsModalOpen(true)}>
          Delete
        </button>
      </div>

      {isModalOpen && (
        <DeleteModal
          id={id}
          onCancel={setIsModalOpen}
          name={name}
          number={number}
        />
      )}
    </>
  );
};

export default Contact;
