
import React, { useEffect,useState } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import InfiniteScroll from "react-infinite-scroll-component";

const News=(props)=> {
    const[articles,setArticles]=useState([]);
    const[totalResults,setTotalResults]=useState(0);
    News.defaultProps = {
        country: 'in',
        search: 'general',
    }
    News.propTypes = {
        search: PropTypes.string,
        country: PropTypes.string,
    }
   


    const updateNews=async() => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.apikey}&category=${props.search}`
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
    }
    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.apikey}&category=${props.search}`
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        console.log(props.find);
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);

        
    };
    useEffect(() => {
        updateNews();
    })

    


        return (
            <div className='container my-4'>
                <h3 style={{ marginLeft: '33vw',marginTop:'10vh' }}>Fresh News</h3>
                <div className="categories " style={{ display:'flex',justifyContent:'space-evenly',margin:'6vh 0' }}>

                    <button type="button" className="btn btn-outline-primary"><Link to="/">General</Link></button>
                    <button type="button" className="btn btn-outline-primary"><Link to="/sports">Sports</Link></button>
                    <button type="button" className="btn btn-outline-secondary"><Link to="/business">Business</Link></button>
                    <button type="button" className="btn btn-outline-success"><Link to="/entertainment">Entertainment</Link></button>
                    <button type="button" className="btn btn-outline-danger"><Link to="/health">Health</Link></button>
                    <button type="button" className="btn btn-outline-warning"><Link to="/science">Science</Link></button>
                    <button type="button" className="btn btn-outline-info"><Link to="/technology">Technology</Link></button>
                    
                </div>
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}>
                    <div className="container">
                        <div className="row">
                            {articles.map((element) => {
                                return <div className="col-md-4" key={element.url}>

                                    <NewsItem title={element.title.slice(0, 40)} description={element.description ? element.description.slice(0, 88) : 'Click Read more to know the full news'} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />
                                </div>
                            })}
                        </div>

                    </div>
                    
                </InfiniteScroll>
                

            </div>
        )
    
}

export default News