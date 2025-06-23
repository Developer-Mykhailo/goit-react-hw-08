import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";

const HomePage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  return (
    <>
      <title>Welcome</title>
      <div>
        <h1>
          {isLoggedIn ? `Welcome back ${user.name}` : "Welcome to Phonebook!"}
        </h1>
      </div>
    </>
  );
};

export default HomePage;
