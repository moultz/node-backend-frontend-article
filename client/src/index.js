import React from 'react';
import ReactDOM from 'react-dom';
import ArticleContainer from './Article/ArticleContainer';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<ArticleContainer />, document.getElementById('root'));
registerServiceWorker();
