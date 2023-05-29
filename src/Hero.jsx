import React from 'react';
import heroImg from './assets/hero.svg';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-center'>
        <div className='hero-title'>
          <h1>Contentful CMS</h1>
          <p>
            I'm baby air plant stumptown wayfarers listicle. Tacos live-edge mixtape williamsburg
            tofu poutine slow-carb mumblecore. Kinfolk PBR&B man braid, taxidermy photo booth
            helvetica woke hell of chillwave. Synth mukbang cred, lo-fi fashion axe meggings raw
            denim hexagon intelligentsia chambray food truck knausgaard.
          </p>
        </div>
        <div className='img-container'>
          <img src={heroImg} className='img' alt='' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
