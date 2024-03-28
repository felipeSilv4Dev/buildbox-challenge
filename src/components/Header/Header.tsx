import style from "./Header.module.css";
import logo from "../../../public/bx-logo.png";
import logo2x from "../../../public/bx-logo@2x.png";
import logo3x from "../../../public/bx-logo@3x.png";

const Header = () => {
  return (
    <header className={style.container}>
      <img src={logo} srcSet={`${logo2x} 1000w, ${logo3x} 2000w`} alt="Logo" />
    </header>
  );
};

export default Header;
