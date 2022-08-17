import React, { FC } from 'react';
import { ABOUT_SECTION_LABELS } from '../../constants/labels';
import './About.scss';

interface AboutProps {}

const About: FC<AboutProps> = () => (
  <div className="About" data-testid="About">
    <div className='section'>
      <div className='section-header'>
        <span>{ABOUT_SECTION_LABELS.ABOUT}</span>
      </div>
    </div>
    <div className='section'>
      <div className='section-header'>
        <span>{ABOUT_SECTION_LABELS.PROFESSIONS}</span>
      </div>
    </div>
    <div className='section'>
      <div className='section-header'>
        <span>{ABOUT_SECTION_LABELS.RADIO}</span>
      </div>
    </div>
    <div className='section'>
      <div className='section-header'>
        <span>{ABOUT_SECTION_LABELS.INTERVIEWS}</span>
      </div>
    </div>
    <div className='section'>
      <div className='section-header'>
        <span>{ABOUT_SECTION_LABELS.STREAMING}</span>
      </div>
    </div>
  </div>
);

export default About;
