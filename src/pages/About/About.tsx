import React, { FC } from 'react';
import { ABOUT_SECTION_LABELS } from '../../constants/labels';
import './About.scss';
import vocalStylistImg from '../../assets/images/about/vocalStylist_lowRes.jpg';
import authorImg from '../../assets/images/about/author.jpg';
import filmMakerImg from '../../assets/images/about/filmMaker.jpg';

interface AboutProps {}

const About: FC<AboutProps> = () => (
  <div className="About" data-testid="About">
    <div className='section'>
      <div className='section-content'>
        <div className='summary'>
          <span className='summary-content'>
              <img className='roundedImg' src={vocalStylistImg} alt="vocalStylist" />
              <div className='details'>
                <div className='detail-header'>{ABOUT_SECTION_LABELS.SUMMARY_VOCALIST_HEADER}</div>
                <p className='detail-text'>{ABOUT_SECTION_LABELS.SUMMARY_VOCALIST_HEADER}</p>
              </div>
          </span>
          <span className='summary-content'>
            <img className='roundedImg' src={authorImg} alt="vocalStylist" />
            <div className='details'>
                <div className='detail-header'>{ABOUT_SECTION_LABELS.SUMMARY_AUTHOR_HEADER}</div>
                <p className='detail-text'>{ABOUT_SECTION_LABELS.SUMMARY_AUTHOR_TEXT}</p>
              </div>
          </span>
          <span className='summary-content'>
            <img className='roundedImg' src={filmMakerImg} alt="vocalStylist" />
            <div className='details'>
                <div className='detail-header'>{ABOUT_SECTION_LABELS.SUMMARY_FILMMAKER_HEADER}</div>
                <p className='detail-text'>{ABOUT_SECTION_LABELS.SUMMARY_FILMMAKER_TEXT}</p>
              </div>
          </span>
        </div>
      </div>
    </div>
    <div className='section offColor'>
      <div className='section-header'>
        <span>{ABOUT_SECTION_LABELS.ABOUT}</span>
      </div>
      <div className='summary-content'>
        <div className='picSide'>
          <img className='boxedImg' src={authorImg} alt="vocalStylist" />
        </div>
        <div className='textSide'>
          <h4>{ABOUT_SECTION_LABELS.ABOUT_POET_ET_ALL_HEADER}</h4>
          <p>
            {ABOUT_SECTION_LABELS.ABOUT_POET_ET_ALL_TEXT1}
            <span className='i'>{ABOUT_SECTION_LABELS.ABOUT_POET_ET_ALL_TEXT2}</span>
            {ABOUT_SECTION_LABELS.ABOUT_POET_ET_ALL_TEXT3}
          </p>
        </div>
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
