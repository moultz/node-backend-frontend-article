import React, { PropTypes } from 'react';
import moment from 'moment'

// Presentation Component that holds the:
// • Hero image
// • Title
// • Category
// • Author
// • Date
export default function ArticleHeader({title, category, authorName, date}) {

  return (
      <div>

        <h1>
          Node Test
          {/*{title}*/}
        </h1>
        <h2>
          Henry Moulton
          {/*{authorName}*/}
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