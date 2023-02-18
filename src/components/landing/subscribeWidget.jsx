import astronaut from '../../assets/img/placeholders/astronaut.jpg';
import email from '../../assets/img/svg/email.svg';

const SubscribeWidget = () => {
  return (
    <section className='subscribe-widget wrapper'>
      <div className='subscribe-widget__container wrapper-container'>
        <div className='subscribe-widget__container__column'>
          <img src={astronaut} alt='astronaut' />
        </div>
        <div className='subscribe-widget__container__column'>
          <div className='subscribe-widget__container__column__title'>Join our weekly digest</div>
          <div className='subscribe-widget__container__column__subtitle'>
            Get exclusive promotions & updates straight to your inbox.
          </div>
          <form>
            <div className='subscribe-widget__container__column__input'>
              <input type='text' placeholder='Enter your email here' />
              <button className='button-template button-secondary' type='submit'>
                <img src={email} alt='email' />
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SubscribeWidget;
