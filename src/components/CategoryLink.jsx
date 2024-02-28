import React from 'react';
import { Link } from 'react-router-dom';

const CategoryLink = ({ categoryName }) => {
  const urlFriendlyName = categoryName.replace(/ y /g, '-').replace(/ /g, '-').toLowerCase();

  return (
    <li>
      <Link to={`/category/${urlFriendlyName}`}>{categoryName}</Link>
    </li>
  );
};

export default CategoryLink;
