import React, { FC } from 'react';
import './Home.scss';
import letThereBeLove from '../../assets/images/home/lettherebelove.png'

interface HomeProps {}

const Home: FC<HomeProps> = () => (
  <div className="Home" data-testid="Home">
    <div className='backgroundImg'>
      <img src={letThereBeLove} alt="Let There Be Love albumn cover" />
    </div>
  </div>
);

export default Home;
