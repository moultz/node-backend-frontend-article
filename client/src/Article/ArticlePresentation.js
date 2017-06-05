import React, { PropTypes } from 'react';
import ArticleHeader from './sections/ArticleHeader';
import ArticleContent from './sections/ArticleContent';
import ArticleFooter from './sections/ArticleFooter'


//Presentation Component that holds the:
//• Hero image
// • Title
// • Sell
// • Category
// • Author
// • Date
// • Widget content (main body of content broken down in to components or “widgets”)
// Divided into Header, Content and Footer (Footer just holds logos, but could hold social media sharing links)
export default function ArticlePresentation(props) {


  return (
      <div>
        <ArticleHeader
            category={props.article.acf.category.name}
            authorName={props.authorName}
            title={props.article.title.rendered}
            date={props.article.date}
        />
        <ArticleContent
            sell={props.article.acf.sell}
        />
        <ArticleFooter/>
      </div>
  )
};


ArticlePresentation.propTypes = {

};

ArticlePresentation.defaultProps = {

};