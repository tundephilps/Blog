import React from 'react'
import "./Newscard.scss";

//7458ced62a5549ae901131a48be751a5
//https://newsapi.org/v2/everything?q=Apple&from=2022-08-03&sortBy=popularity&apiKey=7458ced62a5549ae901131a48be751a5

const Newscard = ({ title, description, url, urlToImage, date }) => {
  
  
  return (

    <div class="news-card">
    <a href="/##" class="news-card__card-link">h</a>
    <img src={urlToImage} alt="" class="news-card__image" />
    <div class="news-card__text-wrapper">
      <h2 class="news-card__title">{title}</h2>
      <div class="news-card__post-date">{date}</div>
      <div class="news-card__details-wrapper">
        <p class="news-card__excerpt">{description}</p>
        <a href={url} class="news-card__read-more">Read more <i class="fas fa-long-arrow-alt-right"></i></a>
      </div>
    </div>
  </div>



  

  )
}

export default Newscard


/*


  <div class="news-card">
    <a href="#" class="news-card__card-link"></a>
    <img src={urlToImage} alt="" class="news-card__image" />
    <div class="news-card__text-wrapper">
      <h2 class="news-card__title">{title}</h2>
      <div class="news-card__post-date">{date}</div>
      <div class="news-card__details-wrapper">
        <p class="news-card__excerpt">{description}</p>
        <a href="" class="news-card__read-more">Read more <i class="fas fa-long-arrow-alt-right"></i></a>
      </div>
    </div>
  </div>





  <div class="news-card">
    <a href="#" class="news-card__card-link"></a>
    <img src="https://images.pexels.com/photos/631954/pexels-photo-631954.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" class="news-card__image" />
    <div class="news-card__text-wrapper">
      <h2 class="news-card__title">Amazing Second Title that is Quite Long</h2>
      <div class="news-card__post-date">Jan 29, 2018</div>
      <div class="news-card__details-wrapper">
        <p class="news-card__excerpt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam obcaecati ex natus nulla rem sequi laborum quod fugit&hellip;</p>
        <a href="#" class="news-card__read-more">Read more <i class="fas fa-long-arrow-alt-right"></i></a>
      </div>
    </div>
  </div>

  <div class="news-card">
    <a href="#" class="news-card__card-link"></a>
    <img src="https://images.pexels.com/photos/206660/pexels-photo-206660.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" class="news-card__image" />
    <div class="news-card__text-wrapper">
      <h2 class="news-card__title">Amazing Fifth Title</h2>
      <div class="news-card__post-date">Jan 29, 2018</div>
      <div class="news-card__details-wrapper">
        <p class="news-card__excerpt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est pariatur nemo tempore repellat? Ullam sed officia iure architecto deserunt distinctio&hellip;</p>
        <a href="#" class="news-card__read-more">Read more <i class="fas fa-long-arrow-alt-right"></i></a>
      </div>
    </div>
  </div>

  <div class="news-card">
    <a href="#" class="news-card__card-link"></a>
    <img src="https://images.pexels.com/photos/210243/pexels-photo-210243.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" class="news-card__image" />
    <div class="news-card__text-wrapper">
      <h2 class="news-card__title">Amazing 6<sup>th</sup> Title</h2>
      <div class="news-card__post-date">Jan 29, 2018</div>
      <div class="news-card__details-wrapper">
        <p class="news-card__excerpt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est pariatur nemo tempore repellat? Ullam sed officia.</p>
        <a href="#" class="news-card__read-more">Read more <i class="fas fa-long-arrow-alt-right"></i></a>
      </div>
    </div>
  </div>

*/