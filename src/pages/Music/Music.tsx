import React, { FC } from 'react';
import './Music.scss';

interface MusicProps {}

const Music: FC<MusicProps> = () => (
  <div className="Music" data-testid="Music">
    Music Component
  </div>
);

export default Music;
