import React, { FC } from 'react';
import './Books.scss';

interface BooksProps {}

const Books: FC<BooksProps> = () => (
  <div className="Books" data-testid="Books">
    Books Component
  </div>
);

export default Books;
