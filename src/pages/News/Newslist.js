import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Newscard from './Newscard'
import "./Newscard.scss";


const Newslist = () => {
    
    const [ currentPage, setCurrentPage ] = useState(0);
    const [articles, setArticles] = useState([])
    const [ query, setQuery ] = useState("");
    const [ searchInput, setSearchInput ] = useState("");
    const [ totalPages, setTotalPages ] = useState(0)


    const handlePageChange = (event) => {
        //console.log(event);
        setCurrentPage(event.selected);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
         setCurrentPage(1);
         setQuery(searchInput);
     }

     
    useEffect(() => {
        const getArticles = async () => {
            const response = await axios.get
            ("https://newsapi.org/v2/everything?q=Apple&from=2022-08-03&sortBy=popularity&apiKey=df8748021fa744db86eaa3e659f732a3");
            setArticles(response.data.articles);
           // console.log(response);
         //  ,{ params: {page: currentPage + 1, query},}

              //setTotalPages(totalResults);
           
            //const { articles, totalResults } = response;
        };

        getArticles();
    }, [currentPage, query]);
    return (

        <section id='newssection'>
            <div id="searchinput">
<form id="searchthis" 
 onSubmit={handleSubmit}
>
<input id="namanyay-search-box"
        placeholder="Search the News"
        value={searchInput}
        onChange={(event) => setSearchInput(event.target.value)} 
        size="40" type="text"
         />
<input id="namanyay-search-btn" value="Go" type="submit"/>
</form>
</div>
        <div class="content-wrapper">
            {articles.map((article) => {
                return(
                    <Newscard
            title={article.title}
            description={article.description}
            url={article.url}
            date={article.date}
            urlToImage={article.urlToImage}
        />
                )
            })}
        </div>
        </section>
    )
}

export default Newslist;