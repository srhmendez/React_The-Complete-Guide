import '../UI/Logo.css';
import Spotify_Icon_RGB_Green from '../../Images/Spotify_Icon_RGB_Green.png';

function Logo() {

    return(
        <div>
            <img className="logo" alt='Spotify Logo' src={Spotify_Icon_RGB_Green}/>
        </div>
    );
}

export default Logo;