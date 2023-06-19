import React, { Component } from 'react';
import Newsiteam from './Newsiteam';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

export class News extends Component {
  static defaultProps = {
    country: '',
    pageSize: 8,
    category: '',
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0, // Add totalResults to the state
    };
  }

  async updateNews(){
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f6ff782fd3674be6bc8a50e0c6255a85&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }
  

  async componentDidMount(){
   this.updateNews();
  }

  handleNext = async () => {
    this.setState({page:this.state.page + 1});
    this.updateNews();
  };

  handlePrev = async () => {
    this.setState({page:this.state.page - 1});
    this.updateNews();

  };

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{ margin: '40px 0px' }}>
          NewsPanda - Top Headlines
        </h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {this.state?.articles?.map((element) => (
            <div className="col-md-4" key={element.url}>
              <Newsiteam
                title={element.title ? element.title.slice(0, 40) : ''}
                desription={element.description ? element.description.slice(0, 88) : ''}
                imgurl={element.urlToImage}
                newsurl={element.url}
                author={element.author}
                date={element.publishedAt}
                source={element.source.name}
              />
            </div>
          ))}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            type="button"
            disabled={this.state.page <= 1}
            className="btn btn-dark"
            onClick={this.handlePrev}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)}
            className="btn btn-dark"
            onClick={this.handleNext}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;