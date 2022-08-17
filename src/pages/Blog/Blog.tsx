import React, { FC } from 'react';
import './Blog.scss';

interface BlogProps {}

const Blog: FC<BlogProps> = () => (
  <div className="Blog" data-testid="Blog">
    Blog Component
  </div>
);

export default Blog;
