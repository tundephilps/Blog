import React from 'react';
import { useState, useEffect } from 'react'
import "./Blog.css";
import { Link } from "react-router-dom"
import sanityClient from "../../client"
//import Blogcard from './Blogcard';
import SanityClient from "../../client"
import imageUrlBuilder from '@sanity/image-url'
import { useParams } from "react-router-dom"
//import BlockContent from '@sanity/block-content-to-react'


const Blog = () => {

  const { slug } = useParams()
  const builder = imageUrlBuilder(SanityClient)

const urlFor = (source) => {
    return builder.image(source)
}
  
  const [allPostsData, setAllPostsData] = useState(null)


  useEffect(() => {
    sanityClient.fetch(
        `*[_type == 'post']{
          
          title,
          
            slug,
            Categories,
            category,
            mainImage{
                asset->{
                    _id,
                    url
                }
            },
            body,
            categories,
            category,
            "name": author->name,
            "authorImage": author->image,
            
            "category": post->Categories, 
        }`,
        
    )
    .then(data => setAllPostsData(data))
    .catch(err => console.error(err))
}, [])

  return (<>
  <section className='blogsection'>
    <div class="container">


    {allPostsData && allPostsData.map((post, index) => (

<Link to={'/' + post.slug.current} key={post.slug.current}>
<div class="card">
     <div class="card__header">
       <img src={post.mainImage.asset.url} alt="card__image" class="card__image" width="600" height="200" />
     </div>
     <div class="card__body">
       <span class="tag tag-blue">{post.category}</span>
       <h4>{post.title}</h4>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p>
    

     </div>
     <div class="card__footer">
       <div class="user">
         <img src={urlFor(post.authorImage).url()} alt="user__image" class="user__image" />
         <div class="user__info">
           <h5>{post.name}</h5>
           <small>2h ago</small>
         </div>
       </div>
     </div>
   </div>



    </Link>
))}



  </div>
  </section>
  </>
  )
}

export default Blog;


/*
<div class="card">
     <div class="card__header">
     <img src={post.mainImage.asset.url} alt="card__image" class="card__image" width="600" height="200" />
     </div>
     <div class="card__body">
     <span class="tag tag-blue">{post.category}</span>
     
     <h4>{post.title}</h4>
     <h5>{post.name}</h5> 
       
     <img src={urlFor(post.authorImage).url()} alt="user__image" class="user__image" />
     </div>
     </div>






    {allPostsData && allPostsData.map((post, index) => (

<Link to={'/' + post.slug.current} key={post.slug.current}>
<div class="card">
     <div class="card__header">
       <img src={post.mainImage.asset.url} alt="card__image" class="card__image" width="600" height="200" />
     </div>
     <div class="card__body">
       <span class="tag tag-blue">{post.categories}</span>
       <h4>{post.title}</h4>
       <p>{post.slug}</p>
     </div>
     <div class="card__footer">
       <div class="user">
         <img src={urlFor(post.authorImage).url()} alt="user__image" class="user__image" />
         <div class="user__info">
           <h5>{post.name}</h5>
           <small>2h ago</small>
         </div>
       </div>
     </div>
   </div>
</Link>
))}



 
    <div class="card">
      <div class="card__header">
        <img src={tech} alt="card__image" class="card__image" width="600" height="200" />
      </div>
      <div class="card__body">
        <span class="tag tag-blue">Technology</span>
        <h4>What's new in 2022 Tech</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p>
      </div>
      <div class="card__footer">
        <div class="user">
          <img src={lara} alt="user__image" class="user__image" />
          <div class="user__info">
            <h5>Lara Croft</h5>
            <small>2h ago</small>
          </div>
        </div>
      </div>
    </div>



    <div class="card">
      <div class="card__header">
        <img src={game} alt="card__image" class="card__image" width="600" height="200" />
      </div>
      <div class="card__body">
        <span class="tag tag-brown">Gaming</span>
        <h4>Will the coursor wars ever End?</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p>
      </div>
      <div class="card__footer">
        <div class="user">
          <img src={joe} alt="user__image" class="user__image" />
          <div class="user__info">
            <h5>Jony Doe</h5>
            <small>Yesterday</small>
          </div>
        </div>
      </div>
    </div>



    <div class="card">
      <div class="card__header">
        <img src={travels} alt="card__image" className="card__image" width="600" height="200" />
      </div>
      <div class="card__body">
        <span class="tag tag-red">Travels</span>
        <h4>Race to your heart content</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p>
      </div>
      <div class="card__footer">
        <div class="user">
          <img src={tie} alt="user__image" class="user__image" />
          <div class="user__info">
            <h5>Tunde Philps</h5>
            <small>2d ago</small>
          </div>
        </div>
      </div>
    </div>
*/