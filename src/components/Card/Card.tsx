import React, { FC } from 'react';
import './Card.scss';

interface CardProps {}

const Card: FC<CardProps> = () => (
  <div className="Card">
    Card Component
  </div>
);

export default Card;
