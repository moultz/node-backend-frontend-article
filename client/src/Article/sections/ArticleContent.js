import React, { PropTypes } from 'react';


// Presentation Component that holds the:
// • Sell
// • Widget content (main body of content broken down in to components or “widgets”)
export default function ArticleContent({sell}) {
  return (
      <div>
        {sell}
      </div>
  )
};


ArticleContent.propTypes = {

};

ArticleContent.defaultProps = {

};