import React, { Component } from 'react'
import Newsiteam from './Newsiteam'

export class News extends Component { 
    constructor(){
        super();
        this.state={
            articles : [],
            loading : false,
            page:1
        }
      }

      async componentDidMount(){
        // console.log("cmf")
        let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=72db924db7f2420c8433c975adaa8297&page=1&pageSize=20`";
        let data = await fetch(url);
        let parsedData = await data.json();
    
        this.setState({articles : parsedData.articles ,totalResults:parsedData.totalResults })
      }

        handleNext = async ()=>{
            if(this.state.page + 1>Math.ceil(this.state.totalResults/20)){

            }else{
            let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=72db924db7f2420c8433c975adaa8297&page=${this.state.page + 1}&pageSize=20`;
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({
            page : this.state.page + 1,
            articles : parsedData.articles 
            })}
      }
      
       handlePrev = async()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=72db924db7f2420c8433c975adaa8297&page=${this.state.page - 1}&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
        page : this.state.page - 1,
        articles : parsedData.articles 
        })
      }

render() {
    // console.log("render")
    return (
    <div className='container my-3'>
        <h2>NewsPanda - Top Headlines</h2>
        
        <div className="row">
        {this.state.articles.map((element)=>{
         return <div className="col-md-4" key={element.url} >
            <Newsiteam title={element.title?element.title.slice(0,40):""}  desription={element.description?element.description.slice(0,88):""} imgurl={element.urlToImage} newsurl={element.url}/>
         </div>
        })}
        </div>
        <div className="container d-flex justify-content-between">
        <button type="button" disabled={this.state.page<=1} class="btn btn-dark" onClick={this.handlePrev}>&larr; Pervios</button>
        <button type="button" class="btn btn-dark" onClick={this.handleNext}>Next &rarr;</button>
        </div>
    </div>
    )
}
}

export default News