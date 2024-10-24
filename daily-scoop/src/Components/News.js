import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {

 
  constructor(){
    super();
    // console.log("I am a constructor");
    this.state ={
         articles:[],
         loading: false,
         page:1
    }
  }
  async componentDidMount(){
    let url="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e9732a8e4d0f4f0ba3e6ee0011ea234f&page=1&pageSize=20";
    let data= await fetch(url);
    let parsedData= await data.json()
    console.log(parsedData);
    this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults})

  }
   handlePrevClick= async () =>
  {
      console.log("prev");
      let url=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e9732a8e4d0f4f0ba3e6ee0011ea234f&page=${this.state.page -1}&pageSize=20`;
      let data= await fetch(url);
      let parsedData= await data.json()
      console.log(parsedData);  //extra
      this.setState({
        page: this.state.page-1,
        articles: parsedData.articles
      })
                    
  }
   handleNextClick= async() =>
  {
      console.log("next");
      if(this.state.page +1 > Math.ceil(this.state.totalResults/20)){

      }
      else{
        let url=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e9732a8e4d0f4f0ba3e6ee0011ea234f&page=${this.state.page +1}&pageSize=20`;
        let data= await fetch(url);
        let parsedData= await data.json()
        console.log(parsedData);
        
    
        this.setState({
          page: this.state.page +1,
          articles: parsedData.articles 
    })
    
      }
      
  }

  render() {
    
    return (
      <div className='container my-3'>
        <h1>Daily Scoop - Top Headlines</h1>
        <div className="row">
          {Array.isArray(this.state.articles) && this.state.articles.map((element)=>{    

               return <div className="col-md-4" key={element.url}>
                <NewsItems title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url}/>
                      </div>
          })}
          
          
        </div>
       <div className="container d-flex justify-content-between">
        
       <button type="button" disabled={this.state.page<=1} className="btn btn-dark mx-1" onClick={this.handlePrevClick}>&larr; Previous</button>
       <button type="button" className="btn btn-dark mx-1" onClick={this.handleNextClick}>Next &rarr;</button>

        </div> 
       
        
        
      </div>
    )
  }
}

export default News
