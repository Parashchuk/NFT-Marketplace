const TrendingSection = () => {
  return (
    <section>
      <div className='trending-section wrapper'>
        <div className='trending-section__container wrapper-container'>
          <div className='trending-section__title'>Trending Collection</div>
          <div className='trending-section__subtitle'>
            Checkout our weekly updated trending collection.
          </div>
          <div className='trending-section__images-container'>
            <div className='trending-section__images__column'>
              <div className='trending-section__images__column__preview'>
                <img src='./assets/img/trend/dog-trend.png' alt='dog' />
              </div>
              <div className='trending-section__images__column__minimize-images'>
                <div>
                  <img src='./assets/img/trend/cat-trend.png' alt='cat' />
                </div>
                <div>
                  <img src='./assets/img/trend/bear-trend.png' alt='bear' />
                </div>
                <div className='trending-section__images__column__minimize-images__more-button'>
                  1025+
                </div>
              </div>
              <div className='trending-section__images__column__name'>DSGN Animals</div>
              <div className='trending-section__images__column__author author-template'>
                <img src='./assets/img/avatars/Avatar6.png' alt='avatar' />
                MrFox
              </div>
            </div>
            <div className='trending-section__images__column'>
              <div className='trending-section__images__column__preview'>
                <img src='./assets/img/trend/mashroom1-trend.png' alt='mashroom' />
              </div>
              <div className='trending-section__images__column__minimize-images'>
                <div>
                  <img src='./assets/img/trend/mashroom2-trend.png' alt='mashroom' />
                </div>
                <div>
                  <img src='./assets/img/trend/mashroom3-trend.png' alt='mashroom' />
                </div>
                <div className='trending-section__images__column__minimize-images__more-button'>
                  1025+
                </div>
              </div>
              <div className='trending-section__images__column__name'>Magic Mushrooms</div>
              <div className='trending-section__images__column__author author-template'>
                <img src='./assets/img/avatars/Avatar7.png' alt='avatar' />
                Shroomie
              </div>
            </div>
            <div className='trending-section__images__column'>
              <div className='trending-section__images__column__preview'>
                <img src='./assets/img/trend/robot1-trend.png' alt='robot' />
              </div>
              <div className='trending-section__images__column__minimize-images'>
                <div>
                  <img src='./assets/img/trend/robot2-trend.png' alt='robot' />
                </div>
                <div>
                  <img src='./assets/img/trend/robot3-trend.png' alt='robot' />
                </div>
                <div className='trending-section__images__column__minimize-images__more-button'>
                  1025+
                </div>
              </div>
              <div className='trending-section__images__column__name'>Disco Machines</div>
              <div className='trending-section__images__column__author author-template'>
                <img src='./assets/img/avatars/avatar12.png' alt='avatar' />
                BeKind2Robots
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
