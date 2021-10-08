import "../Header/NavLogo.css";
import Spotify_Icon_RGB_Green from '../../Images/Spotify_Icon_RGB_Green.png';


const NavLogo = () => {

    return(
        <header>
            <img className="logo" alt="logo" src={Spotify_Icon_RGB_Green}/> 
            <h1 className="logoTitle">Spotify</h1>
        </header>
    );
}

export default NavLogo;