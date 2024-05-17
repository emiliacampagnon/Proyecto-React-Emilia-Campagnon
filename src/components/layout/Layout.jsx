import { Footer } from "./footer/Footer";
import { Outlet } from "react-router-dom";
import BasicExample from "./navbar/Navbar";
import "./Layout.css";

export const Layout = () => {
  return (
    <div>
      <BasicExample />
      <div className="contentLayout">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
