import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {

 
  constructor(){
    super();
    // console.log("I am a constructor");
    this.state ={
         articles: [],
         loading: false
    }
  }
  async componentDidMount(){
    let url="https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=e9732a8e4d0f4f0ba3e6ee0011ea234f";
    let data= await fetch(url);
    let parsedData= await data.json()
    console.log(parsedData);
    this.setState({articles: parsedData.articles})

  }

  render() {
    
    return (
      <div className='container my-3'>
        <h1>Daily Scoop - Top Headlines</h1>
        <div className="row">
          {this.state.articles.map((element)=>{

               return <div className="col-md-4" key={element.url}>
                <NewsItems title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url}/>
</div>
          })}
          
          
        </div>
        
       
        
        
      </div>
    )
  }
}

export default News
