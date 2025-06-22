import { Route, Routes } from "react-router-dom";
import { lazy, useEffect } from "react";
import { Suspense } from "react";
import Layout from "../Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "../../redux/auth/operations";
import { selectIsRefreshing } from "../../redux/auth/selectors";
import { RestrictedRoute } from "../RestrictedRoute";
import { PrivateRoute } from "../PrivateRoute";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("../../pages/ContactsPage/ContactsPage"));
const RegistrationPage = lazy(() => import("../../pages/RegistrationPage/RegistrationPage"));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  //JSX
  return (
    !isRefreshing && (
      <>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="index" element={<HomePage />} />
              <Route
                path="/register"
                element={<RestrictedRoute redirectTo="/" component={<RegistrationPage />} />}
              />
              <Route
                path="/login"
                element={<RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />}
              />

              <Route path="/contacts" element={<PrivateRoute component={<ContactsPage />} />} />
            </Route>
          </Routes>
        </Suspense>
      </>
    )
  );
}

export default App;
