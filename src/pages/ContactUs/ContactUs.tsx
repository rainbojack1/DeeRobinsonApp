import React, { FC } from 'react';
import './ContactUs.scss';

interface ContactUsProps {}

const ContactUs: FC<ContactUsProps> = () => (
  <div className="ContactUs" data-testid="ContactUs">
    ContactUs Component
  </div>
);

export default ContactUs;
