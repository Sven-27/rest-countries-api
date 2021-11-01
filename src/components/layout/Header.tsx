import "styles/layout/Header.scss";
import { FaRegMoon } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header">
      <h1>Where in the world?</h1>
      <div className="header__theme">
        <FaRegMoon />
        <p>Dark Mode</p>
      </div>
    </header>
  )
}

export default Header
