import React, { PropTypes } from 'react';
import moment from 'moment'
import { ResponsiveImage, ResponsiveImageSize } from 'react-responsive-image';


// Presentation Component that holds the:
// • Hero image
// • Title
// • Category
// • Author
// • Date
export default function ArticleHeader({ hero_images, title, category, authorName, date}) {

  return (
      <div>
        <ResponsiveImage>
          <ResponsiveImageSize
              default
              minWidth={0}
              path={hero_images.medium}
          />
          <ResponsiveImageSize
              minWidth={1100}
              path={hero_images.large}
          />
        </ResponsiveImage>
        <h1>
          {title}
        </h1>
        <h2>
          {authorName}
        </h2>
        <h2>
          {moment(date).format('ddd MMM D YYYY')}
        </h2>
        <h3>
          {category}
        </h3>

      </div>
  )
};


ArticleHeader.propTypes = {

};

ArticleHeader.defaultProps = {

};