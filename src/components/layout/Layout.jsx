import { Footer } from "./footer/Footer";
import { Outlet } from "react-router-dom";
import BasicExample from "./navbar/Navbar";

export const Layout = () => {
  return (
    <div>
      <BasicExample />
      <div style={{ minHeight: "calc(100vh - 250px)" }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
