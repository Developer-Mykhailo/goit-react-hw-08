import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { Suspense } from "react";
import Layout from "../Layout/Layout";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() =>
  import("../../pages/ContactsPage/ContactsPage")
);
const RegistrationPage = lazy(() =>
  import("../../pages/RegistrationPage/RegistrationPage")
);

function App() {
  return (
    <>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="index" element={<HomePage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
