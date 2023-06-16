import React, { Component } from 'react'

export class Newsiteam extends Component {

  render() {
    let {title,desription,imgurl,newsurl} = this.props;
    return (
      <div className='my-3'>
        <div className="card">
            <img src={!imgurl?"https://cdn.pixabay.com/photo/2015/02/15/09/33/news-636978_1280.jpg":imgurl} className="card-img-top" alt="..."/>
             <div className="card-body">
                  <h5 className="card-title">{title}...</h5>
                  <p className="card-text">{desription}...</p>
                  <a rel='noreferrer' href={newsurl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default Newsiteam