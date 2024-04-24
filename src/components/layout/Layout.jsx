import { Footer } from "./footer/Footer";
import { Outlet } from "react-router-dom";
import BasicExample from "./navbar/Navbar";

export const Layout = () => {
  return (
    <div>
      <BasicExample />

      <Outlet />

      <Footer />
    </div>
  );
};
