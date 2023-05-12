import { useEffect,useState } from 'react';

import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News=(props)=> {
    const [articles, setArticles] = useState([]);
    const [loading, setloading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults,settotalResults] = useState(0);
    
    

   
    /*constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults:0
        }
       
    }*/
   const updateNews = async()=> {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`
       setloading(true)
        let response = await fetch(url);
        props.setProgress(30);  // wait for the fetch promise to resolve
        let data = await response.json(); // wait for the json promise to resolve
       props.setProgress(50);
       setArticles(data.articles)
       settotalResults(data.totalResults)
       setloading(false)
        console.log(data);
       /* this.setState({
            articles: data.articles,
            totalResults: data.totalResults,
            loading: false,
           
        })*/
        props.setProgress(100);
    }

    useEffect(() => {
        updateNews();
        //eslint-disable next-line
        document.title = `${props.category}-Newz`;
    },[])

    
    
    const handlePreviousClick = async () => {
        
        console.log("previous");
        //onsole.log("next");
        //et url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=a961b50457ef4a1698271edc23bb19e6&page=${this.state.page - 1}&pageSize=${props.pageSize}`;
        //his.setState({ loading: true });  
        //et response = await fetch(url);  // wait for the fetch promise to resolve
        //et data = await response.json(); // wait for the json promise to resolve
        //onsole.log(data);
       
        //his.setState(
        //   {
        //       page: this.state.page - 1,
        //       articles: data.articles,
        //       loading:false
        //       
        //   }
        //
       setPage(page-1)
        updateNews();
    }

    const handleNextClick = async () => {
        console.log("next");
      /* if (!(this.state.page + 1 > Math.ceil(this.state.totalResults /props.pageSize))) {
            this.setState({ loading: true });    
      
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=a961b50457ef4a1698271edc23bb19e6&page=${this.state.page + 1}&pageSize=${props.pageSize}`;
        let response = await fetch(url);  // wait for the fetch promise to resolve
        let data = await response.json(); // wait for the json promise to resolve
        console.log(data);
       
        this.setState(
            {
                page: this.state.page + 1,
                articles: data.articles,
                loading:false
                
            }
        )
    }*/
       
        setPage(page+1)
       updateNews();
    }

    const fetchMoreData =async () => {
        
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.pageSize}`
        setPage(page + 1);
        setloading(true);
        let response = await fetch(url);  // wait for the fetch promise to resolve
        let data = await response.json(); // wait for the json promise to resolve
        console.log(data);
        setArticles(articles.concat(data.articles))
        settotalResults(data.totalResults);
        
      };
      

 
      return (
        <>
        <div className='container my-3'>
            <h1 className='text-center my-5'>Top Headlines on {props.category}</h1>
            {/* {this.state.loading&&<Spinner />}*/}
            <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
                <div className="container">
                    
         
       
            <div className="row">
                {articles.map((element) => {
                   return  <div className="col-md-4" key={element.url}>
                       <Newsitem title={element.title?element.title.slice(0,95):""} description={element.description?element.description.slice(0,88):"know more"} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />
                </div>
             })}
               
                </div>
                </div>
                </InfiniteScroll>
           {/* <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1} type="button" className="btn btn-secondary" onClick={this.handlePreviousClick}>&larr; Previous</button>
                <button disabled={(this.state.page + 1 > Math.ceil(this.state.totalResults /props.pageSize))} type="button" className="btn btn-primary" onClick={this.handleNextClick} >next &rarr;</button>
                
           </div>*/}
        </div>
        </>
    )
   
    News.defaultProps = {
        country: 'in',
        pageSize: 8,
        category:'general'
    }
    
    News.propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category:PropTypes.string
    }
}

export default News


//api key a961b50457ef4a1698271edc23bb19e6