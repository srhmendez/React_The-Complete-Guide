import './LoginCard.css';
import Button from './Button';
import Logo from '../../Components/Logo';

function LoginCard() {

    return (
      <div className='login-card'>
          <Logo></Logo>
          <h1 className="title">Welcome To Spotify</h1>
          <h2 className="slogan">Music For Everyone.</h2>
          <Button></Button>
      </div>
    );
  }
  
  export default LoginCard;