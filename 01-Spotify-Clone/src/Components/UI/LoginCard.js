import './LoginCard.css';
import Button from './Button';
import Logo from '../../Components/Logo';

function LoginCard() {

  const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=88e0416914c0497c96ae73628896734b&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";


    return (
      <div className='login-card'>
          <Logo></Logo>
          <h1 className="title">Welcome To Spotify</h1>
          <h2 className="slogan">Music For Everyone.</h2>
          <a href={AUTH_URL}><Button></Button></a>
          
      </div>
    );
  }
  
  export default LoginCard;