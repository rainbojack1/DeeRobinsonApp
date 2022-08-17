import { Menubar } from 'primereact/menubar';
import React, { FC } from 'react';
import './Footer.scss';

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  const copyright =[ {label: "Copyright © 2018 Dee Robinson - All Rights Reserved."}];
  
  return (
  <div className="Footer">
    <Menubar model={copyright} />
  </div>
)
};

export default Footer;
