import "./Footer.css";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export const Footer = () => {
  return (
    <div className="footerContainer">
      <Link to="/">
        <img
          className="logoFooter"
          src="https://res.cloudinary.com/dxzytrwpw/image/upload/v1711544966/vb_qtkbhz.png"
          width={150}
          alt="LogoViu"
        />
      </Link>
      <div className="iconosContainer">
        <div>
          <Link
            to="https://api.whatsapp.com/send?phone=3518688503&text=Hola!%20Necesito%20informaci%C3%B3n%20de..."
            target="_blank"
          >
            <WhatsAppIcon className="icono" />
          </Link>
        </div>
        <div>
          <Link to="https://www.instagram.com/viubikinis/" target="_blank">
            <InstagramIcon className="icono" />
          </Link>
        </div>
        <div>
          <Link to="https://www.facebook.com/viu.bikinis/" target="_blank">
            <FacebookIcon className="icono" />
          </Link>
        </div>
      </div>
    </div>
  );
};
