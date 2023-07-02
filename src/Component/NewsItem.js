
import React from 'react'

const NewsItem =(props)=> {
 
    let {title,description,imageUrl,newsUrl,author,date}=props;
    
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
          <img src={!imageUrl ?'https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921':imageUrl} alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className='card-text'><small className='text-muted'>By {!author?'unknown':author} on {new Date (date).toGMTString()}</small> </p>
            <a href={newsUrl} className='btn btn-sm btn-primary'>Read more</a>
          </div>
        </div>
      </div>
    )
  
}

export default NewsItem