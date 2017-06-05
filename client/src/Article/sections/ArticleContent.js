import React, { PropTypes } from 'react';
import Paragraph from '../components/Paragraph'

// Presentation Component that holds the:
// • Sell
// • Widget content (main body of content broken down in to components or “widgets”)
export default function ArticleContent({sell, widgets}) {
  console.log(widgets)

  let createWidgets = widgets.map(widget => {
    if (widget.hide_widget_from_page === false) {
      if (widget.acf_fc_layout === 'paragraph') {
        return <Paragraph paragraph={widget.paragraph} />
      } else if (widget.acf_fc_layout === 'image'){
        //return image component
      } else if (widget.acf_fc_layout === 'heading') {
        //return heading
      }
    } else {
      return null
    }
  });

  console.log(createWidgets);
  return (
      <div>
        <h5>{sell}</h5>
        {createWidgets}
      </div>
  )
};


ArticleContent.propTypes = {

};

ArticleContent.defaultProps = {

};