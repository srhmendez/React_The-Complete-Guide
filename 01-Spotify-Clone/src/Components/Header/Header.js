import NavLogo from "../Header/NavLogo";
import NavBar from "./NavBar";
import './Header.css';


const Header = () => {

    return(
        <div>
            <NavLogo></NavLogo>
            <NavBar></NavBar>
        </div>
    );
}

export default Header;