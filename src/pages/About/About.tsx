import React, { FC } from 'react';
import './About.scss';

interface AboutProps {}

const About: FC<AboutProps> = () => (
  <div className="About" data-testid="About">
    <div className='section'>
      <div className='section-header'>
        <span>About Dee</span>
      </div>
    </div>
    <div className='section'>
      <div className='section-header'>
        <span>Professions</span>
      </div>
    </div>
    <div className='section'>
      <div className='section-header'>
        <span>Radio Co-Host</span>
      </div>
    </div>
    <div className='section'>
      <div className='section-header'>
        <span>Interviews</span>
      </div>
    </div>
    <div className='section'>
      <div className='section-header'>
        <span>Kiss 104.1 fm w/Mitch Faulkner</span>
      </div>
    </div>
  </div>
);

export default About;
