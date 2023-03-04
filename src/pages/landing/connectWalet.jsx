import blob from '../../assets/img/svg/blob.svg';
import metaMask from '../../assets/img/svg/metamask.svg';
import walletConnect from '../../assets/img/svg/walletConnect.svg';
import coinbase from '../../assets/img/svg/coinbase.svg';
import LandingHeader from '../../components/landing/header';
import { Link } from 'react-router-dom';

const ConnectWallet = () => {
  return (
    <section>
      <LandingHeader />
      <div style={{ backgroundImage: `url(${blob})` }} className='connect-wallet'>
        <div className='connect-wallet__container'>
          <div className='connect-wallet__container__title'>Connect wallet</div>
          <div className='connect-wallet__container__subtitle'>
            Choose a wallet you want to connect. There are several wallet providers.
          </div>
          <div className='connect-wallet__container__list'>
            <Link className='connect-wallet__container__list__element'>
              <img
                src={metaMask}
                alt='metamask'
                className='connect-wallet__container__list__element__img'
              />
              <div className='connect-wallet__container__list__element__title'>Metamask</div>
            </Link>
            <Link className='connect-wallet__container__list__element'>
              <img
                src={walletConnect}
                alt='walletConnect'
                className='connect-wallet__container__list__element__img'
              />
              <div className='connect-wallet__container__list__element__title'>Wallet Connect</div>
            </Link>
            <Link className='connect-wallet__container__list__element'>
              <img
                src={coinbase}
                alt='coinbase'
                className='connect-wallet__container__list__element__img'
              />
              <div className='connect-wallet__container__list__element__title'>Coinbase</div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectWallet;
