import { Link, useLocation } from 'react-router-dom';

import LogoText from '../../assets/img/svg/logo.svg';
import LogoImage from '../../assets/img/svg/storefront.svg';

const AuthHeader = () => {
  let location = useLocation();

  return (
    <header>
      <div className='auth-header'>
        <Link to='/' className='auth-header__logo'>
          <img className='auth-header__logo-image' src={LogoImage} alt='LogoImage' />
          <img className='auth-header__logo-text' src={LogoText} alt='LogoText' />
        </Link>
        <div className='auth-header__suggest'>
          {location.pathname === '/register' ? (
            <>
              <Link to='/login'>
                <div>Already have an account?</div>
                <span> Sign in →</span>
              </Link>
            </>
          ) : (
            <>
              <Link to='/register'>
                <div>Don't have an account?</div>
                <span>Sign up →</span>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default AuthHeader;
