import { Outlet } from "react-router-dom";
import { AppBar } from "../AppBar/AppBar";
import Container from "../Container/Container";

const Layout = () => {
  return (
    <Container>
      <AppBar />
      <main>
        <Outlet />
      </main>
    </Container>
  );
};

export default Layout;
