import React, { Component } from 'react'

export class NewItem extends Component {
  
   
    render() {
    let  {title, description,imageUrl,newsUrl,author,date,source} = this.props;
    
      return(
      <div class="my-4" style={{width:"18rem"}}>
          <span class="badge rounded-pill bg-info text-dark">{source}</span>
         
             <div class="card" > <img src={imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body ">   
   <h5>  {title}...   </h5> 
  <p class="card-text">{description}...</p>
    <p classe="card-text"><small classname="text-muted">By { !author?"Unknown" : author} on { new Date(date).toGMTString()} </small></p>
    {/* <a  href={newsUrl} target="_blank" classname="btn btn-primary" >More about me</a> */}
    <a  rel="noreferrer" href={newsUrl} target="_blank"  class="btn btn-danger btn-sm">More about me</a> 
  </div>
</div> 
            </div>
      )  
    }
}

export default NewItem
