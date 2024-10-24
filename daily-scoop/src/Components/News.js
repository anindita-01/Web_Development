import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';

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
    let url=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e9732a8e4d0f4f0ba3e6ee0011ea234f&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data= await fetch(url);
    let parsedData= await data.json()
    // console.log(parsedData);
    this.setState({articles: parsedData.articles,
                  totalResults: parsedData.totalResults,
                  loading: false  })
     

  }
   handlePrevClick= async () =>
  {
      // console.log("prev");
      let url=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e9732a8e4d0f4f0ba3e6ee0011ea234f&page=${this.state.page -1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data= await fetch(url);
      let parsedData= await data.json()
      // console.log(parsedData);  
      this.setState({
        page: this.state.page-1,
        articles: parsedData.articles,
        loading: false
      })
                    
  }
   handleNextClick= async() =>
  {
      // console.log("next");
      if(!(this.state.page +1 > Math.ceil(this.state.totalResults/this.state.pageSize))){
        let url=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e9732a8e4d0f4f0ba3e6ee0011ea234f&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data= await fetch(url);
        let parsedData= await data.json()
        // console.log(parsedData);
        this.setState({
          page: this.state.page +1,
          articles: parsedData.articles,
          loading: false
    })
    
      }
      
  }

  render() {
    
    return (
      <div className='container my-3'>
        <h1 className="text-center">Daily-Scoop - Top Headlines</h1>


        {/* if loading is true spinner will show */}
        {this.state.loading && <Spinner/>}    


        <div className="row">
          {!this.state.loading && this.state.articles.map((element)=>{    

               return <div className="col-md-4" key={element.url}>
                <NewsItems title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url}/>
                      </div>
          })}
          
          
        </div>
       <div className="container d-flex justify-content-between">
        
       <button type="button" disabled={this.state.page<=1} className="btn btn-dark mx-1" onClick={this.handlePrevClick}>&larr; Previous</button>
       <button type="button" disabled={this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark mx-1" onClick={this.handleNextClick}>Next &rarr;</button>

        </div> 
       
        
        
      </div>
    )
  }
}

export default News
