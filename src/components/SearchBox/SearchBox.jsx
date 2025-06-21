import { useDispatch } from "react-redux";
import s from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  return (
    <div className={s.search_wrap}>
      <p>Find contacts by name</p>
      <input
        type="text"
        id="search"
        name="search"
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
};

export default SearchBox;
