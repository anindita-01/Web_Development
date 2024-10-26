import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {
  static defaultProps ={

    country: "us",
    pageSize: 6,
    category: 'General'


  }
  static propTypes={
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }
 capitalize=(word)=>{
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
}
 
  constructor(props){
    super(props);
    // console.log("I am a constructor");
    this.state ={
         articles:[],
         loading: false,
         page:1
    }
    document.title=`${this.capitalize(this.props.category)} - Daily-Scoop`;
  }

async updateNews(){
  const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e9732a8e4d0f4f0ba3e6ee0011ea234f&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data= await fetch(url);
    let parsedData= await data.json()
    // console.log(parsedData);
    this.setState({articles: parsedData.articles,
                  totalResults: parsedData.totalResults,
                  loading: false  })
}

  async componentDidMount(){
    this.updateNews();
     

  }
   handlePrevClick= async () =>
  {
      this.setState({page: this.state.page-1});
      this.updateNews();

                    
  }
   handleNextClick= async() =>
  {
      this.setState({page: this.state.page+1});
      this.updateNews();

      
  }

  render() {
    
    return (
      <div className='container my-3'>
        <h1 className="text-center" style={{margin: '35px 0px'}}>Daily-Scoop - Top {this.capitalize(this.props.category)} Headlines </h1>


        {/* if loading is true spinner will show */}
        {this.state.loading && <Spinner/>}    


        <div className="row">
          {!this.state.loading && this.state.articles.map((element)=>{    

               return <div className="col-md-4" key={element.url}>
                <NewsItems title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author?element.author:"Unkonwn"} date={element.publishedAt} source={element.source.name}/>
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
