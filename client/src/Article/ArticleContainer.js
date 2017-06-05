import React, { Component } from 'react';
import ArticlePresentation from "./ArticlePresentation";

class ArticleContainer extends Component {

  //Initialise State to be empty
  state = {};

  componentDidMount() {
    fetch('/article', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then(res => res.json()).then(article => {
        this.setState({
          article: article
        });
        //Use WordPress API URL to get name of author
        fetch(article._links.author["0"].href)
            .then(res=>res.json()).then(data => {
              this.setState({
                authorName: data.name
              });
              console.log(this.state)
        })
      }
    )
  }

  render() {
    return (
        <div>
          {/* Because it's an async request we need to handle the case where the data is loading */}
          {this.state.article ? <ArticlePresentation article={this.state.article} authorName={this.state.authorName} /> : <div>Loading...</div> }
        </div>

    );
  }
}

export default ArticleContainer;
