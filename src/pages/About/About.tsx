import React, { FC } from 'react';
import './About.scss';

interface AboutProps {}

const About: FC<AboutProps> = () => (
  <div className="About" data-testid="About">
    About Component
  </div>
);

export default About;
