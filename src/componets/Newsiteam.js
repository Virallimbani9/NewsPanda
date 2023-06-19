import React, { Component } from 'react'

export class Newsiteam extends Component {

  render() {
    let {title,desription,imgurl,newsurl,author,date,source} = this.props;
    return (
      <div className='my-3'>
        <div className="card">
        <span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:"90%",zIndex:1}}>{source}</span>
            <img src={!imgurl?"https://cdn.pixabay.com/photo/2015/02/15/09/33/news-636978_1280.jpg":imgurl} className="card-img-top" alt="..."/>
             <div className="card-body">
                  <h5 className="card-title">{title}...</h5>
                  <p className="card-text">{desription}...</p>
                  <p className='card-text'><small className='text-muted'>By {author?"Unknow":author} On {new Date(date).toGMTString()}</small></p>
                  <a rel='noreferrer' href={newsurl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default Newsiteam