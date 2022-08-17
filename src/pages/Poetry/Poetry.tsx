import React, { FC } from 'react';
import './Poetry.scss';

interface PoetryProps {}

const Poetry: FC<PoetryProps> = () => (
  <div className="Poetry" data-testid="Poetry">
    Poetry Component
  </div>
);

export default Poetry;
