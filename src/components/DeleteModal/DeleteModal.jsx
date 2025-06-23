import s from "./DeleteModal.module.css";

import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import toast, { Toaster } from "react-hot-toast";

const DeleteModal = ({ id, onCancel, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id))
      .unwrap()
      .then(() => {
        toast(
          <div className={s.toast_wrap}>
            <span>Contact</span>
            <strong>
              {name} {number}
            </strong>
            <p>was successfully deleted</p>
          </div>,
          {
            duration: 5000,
          }
        );
        onCancel(false);
      });
  };

  //JSX
  return (
    <div className={s.overlay}>
      <div className={s.wrapper}>
        <p>The number will be deleted permanently!</p>
        <div className={s.button_wrap}>
          <button type="button" onClick={handleDelete}>
            Confirm
          </button>
          <button type="button" onClick={() => onCancel(false)}>
            Cancel
          </button>
        </div>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
    </div>
  );
};

export default DeleteModal;
