import React, { Component } from 'react'
import NewItem from './NewItem'
import Spin from './Spin';
import PropTypes from 'prop-types'


export class New extends Component {
    
   static defaultProps = {
      country: 'in',
      pageSize :8,
      category: 'general',
   }     
    
    static propTypes = {
      country: PropTypes.string,
    pageSize: PropTypes.number,
    category:PropTypes.string,
   }
  
    constructor(){
        super();
         this.state = {
   articles: [],
    loading:false,
     page:1,
     totalResults:0


  
    }
}
  async  componentDidMount(){
 let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=51b6f8aa728945729bb3d163fcf9bfb2&page=1&pageSize=${this.props.pageSize}`;
 this.setState({loading: true});
 let data = await fetch(url); 
  let parsedData = await data.json()
  console.log(parsedData);
      this.setState({articles: parsedData.articles, totalResults:parsedData.
        totalResults,loading:false
      })
}

 
   handepreviewthick=async()=>{
console.log("previous");
let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=51b6f8aa728945729bb3d163fcf9bfb2&page=${this.state.page -1}&pageSize=${this.props.pageSize}`;
this.setState({loading: true});
let data = await   fetch(url); 
let parsedData = await  data.json()
console.log(parsedData );
console.log(data);
this.setState({

    
 page: this.state.page -1,
      articles: parsedData.articles,
 loading: false
    })
}
   handeNexthick = async ()=>{
    console.log("next");
  if(!(this.state.page+ 1> Math.ceil(this.state.totalResults/this.props.pageSize))){
 let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=51b6f8aa728945729bb3d163fcf9bfb2&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;
 this.setState({loading: true});
 let data = await   fetch(url); 
    let parsedData = await  data.json()
   this.setState({
          page: this.state.page +1,
          articles: parsedData.articles,
     loading:false
    
        })

    }  
} 

render() {
       return (
          <div className="container my-3">
<h2>News -lion healiner</h2>
  {this.state.loading &&<Spin/>}
  
   <div className="row">
   {! this.state.loading && this.state.articles.map((elemnt)=>{

  return   <div className="col-md-4" key={elemnt.url}>
<NewItem  title ={ elemnt.title ?elemnt.title.slice(0,45):""} description={  elemnt.description?elemnt.description.slice(0,88):""} imageUrl={elemnt.urlToImage} newsUrl={elemnt.url}
 author ={elemnt.author} date={elemnt.publishedAt} source={elemnt.source.name} />   
    </div> 
   }
)}
      
</div>      
   <div className="contianer d-flex justify-content-between">
   <button disabled={this.state.page<=1} type="button" className="btn btn-primary"onClick={this.handepreviewthick}>Priview</button>
   <button disabled={ this.state.page +1 > Math.ceil( this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-primary"onClick={this.handeNexthick}>Next</button>
     
       </div>      
       
          </div> 
        )

    }
    
    }


export default New
