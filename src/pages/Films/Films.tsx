import React, { FC } from 'react';
import './Films.scss';

interface FilmsProps {}

const Films: FC<FilmsProps> = () => (
  <div className="Films" data-testid="Films">
    Films Component
  </div>
);

export default Films;
