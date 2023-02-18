import wallet from '../../assets/img/placeholders/wallet.svg';
import collections from '../../assets/img/placeholders/collections.svg';
import earning from '../../assets/img/placeholders/earning.svg';

const Instructions = () => {
  return (
    <section className='instructions wrapper'>
      <div className='instructions__container wrapper-container'>
        <div className='instructions__container__title'>How it works</div>
        <div className='instructions__container__subtitle'>Find out how to get started</div>
        <div className='instructions__container__columns'>
          <div className='instructions__container__columns__column'>
            <img src={wallet} alt='wallet' />
            <div className='instructions__container__columns__column__description'>
              <div className='instructions__container__columns__column__description__title'>
                Setup Your wallet
              </div>
              <div className='instructions__container__columns__column__description__subtitle'>
                Set up your wallet of choice. Connect it to the Animarket by clicking the wallet
                icon in the top right corner.
              </div>
            </div>
          </div>
          <div className='instructions__container__columns__column'>
            <img src={collections} alt='collections' />
            <div className='instructions__container__columns__column__description'>
              <div className='instructions__container__columns__column__description__title'>
                Create Collection
              </div>
              <div className='instructions__container__columns__column__description__subtitle'>
                Upload your work and setup your collection. Add a description, social links and
                floor price.
              </div>
            </div>
          </div>
          <div className='instructions__container__columns__column'>
            <img src={earning} alt='earning' />
            <div className='instructions__container__columns__column__description'>
              <div className='instructions__container__columns__column__description__title'>
                Start Earning
              </div>
              <div className='instructions__container__columns__column__description__subtitle'>
                Choose between auctions and fixed-price listings. Start earning by selling your NFTs
                or trading others.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instructions;
