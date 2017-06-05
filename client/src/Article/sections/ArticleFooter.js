import React, { PropTypes } from 'react';

// Presentation Component that holds the:
// • Github, Twitter, Shortlist, Stylist, Mr Hyde and Emerald Street logos
export default function ArticleFooter(props) {
  return (
      <div>
        {props.text}
      </div>
  )
};


ArticleFooter.propTypes = {

};

ArticleFooter.defaultProps = {

};