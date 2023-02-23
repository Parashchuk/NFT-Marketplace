import { Link } from 'react-router-dom';

import BurgetButton from '../../assets/img/svg/list.svg';
import LogoText from '../../assets/img/svg/logo.svg';
import LogoImage from '../../assets/img/svg/storefront.svg';
import User from '../../assets/img/svg/user.svg';

const LandingHeader = () => {
  return (
    <header>
      <div className='landingHeader'>
        <Link to='/' className='landingHeader__logo'>
          <img className='landingHeader__logo-image' src={LogoImage} alt='LogoImage' />
          <img className='landingHeader__logo-text' src={LogoText} alt='LogoText' />
        </Link>
        <nav>
          <img className='landingHeader__burger-menu' src={BurgetButton} alt='List' />
          <ul className='landingHeader__navigation'>
            <li>
              <Link className='navigation-item' to='#'>
                Marketplace
              </Link>
            </li>
            <li>
              <Link className='navigation-item' to='#'>
                Rankings
              </Link>
            </li>
            <li>
              <Link className='navigation-item' to='#'>
                Connect a wallet
              </Link>
            </li>

            <li>
              <Link
                className='navigation-item navagation-item--button button-template button-secondary'
                to='/register'>
                <img src={User} alt='user' />
                <span>Sign Up</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default LandingHeader;
