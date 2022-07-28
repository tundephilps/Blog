//import React from 'react'
import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import SanityClient from '../../client'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'
import "./Blogpage.css";



const builder = imageUrlBuilder(SanityClient)

const urlFor = (source) => {
   return builder.image(source)
}


const Blogpage = () => {

 const [postData, setPostData] = useState(null)
    const { slug } = useParams()

    useEffect(() => {
        SanityClient.fetch(
            `*[slug.current == $slug]{
              category,  
              title,
                slug,
                
                mainImage{
                    asset->{
                        _id,
                        url
                    }
                },
                body,
                "name": author->name,
                "authorImage": author->image,
                "categories": post->categories, 
            }`,
            { slug },

           
          
        )
        .then((data) => setPostData(data[0]))
        .catch(err => console.error(err))
    }, [slug])

    if (!postData) return <div>Loading...</div>



  return (
<>    
<section id="content">
					<div class="container">
						<div class="row">
							<div class="col-3 col-12-medium">

									<section>
										<header>
											<h2>Magna Phasellus</h2>
										</header>
										<ul class="link-list">
											<li><a href="#">Sed dolore viverra</a></li>
											<li><a href="#">Ligula non varius</a></li>
											<li><a href="#">Nec sociis natoque</a></li>
											<li><a href="#">Penatibus et magnis</a></li>
											<li><a href="#">Dis parturient montes</a></li>
											<li><a href="#">Nascetur ridiculus</a></li>
										</ul>
									</section>
									<section>
										<header>
											<h2>Ipsum Dolor</h2>
										</header>
										<p>
											Vehicula fermentum ligula at pretium. Suspendisse semper iaculis eros, eu aliquam
											iaculis. Phasellus ultrices diam sit amet orci lacinia sed consequat.
										</p>
										<ul class="link-list">
											<li><a href="#">Sed dolore viverra</a></li>
											<li><a href="#">Ligula non varius</a></li>
											<li><a href="#">Dis parturient montes</a></li>
											<li><a href="#">Nascetur ridiculus</a></li>
										</ul>
									</section>

							</div>
							<div class="col-9 col-12-medium imp-medium">

									<section>
										<header>
											<h2>{postData.title}</h2>
											<h3>By {postData.name}</h3>
                      <h4>{postData.category}</h4>
										</header>
                    <p>
                    <BlockContent
                        blocks={postData.body}
                        projectId={SanityClient.clientConfig.projectId}
                        dataset={SanityClient.clientConfig.dataset}
                    />
                    </p>
										
									</section>

							</div>
						</div>
					</div>
				</section>

			
   
</>

  )
}

export default Blogpage


/**
 * 
 * 
 * 
											Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam metus, congue
											vel suscipit ut, dignissim non risus. Vestibulum ante est, fringilla nec placerat
											eu, vestibulum vitae diam. Integer eget egestas eros. Duis enim erat, mollis quis
											lacinia eget, blandit nec ipsum. Donec vitae turpis ipsum. Aliquam mauris libero,
											sagittis in eleifend at, mattis imperdiet velit. Donec urna risus, rutrum molestie
											varius ac, lacinia sit amet augue. Nam ultrices elementum eros.
										</p>
										<p>
											Sed faucibus viverra ligula, non varius magna semper vitae. Donec eu justo ut ipsum
											hendrerit congue nec eu risus. Cum sociis natoque penatibus et magnis dis parturient
											montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing
											egestas tempus. Cras convallis odio sit amet risus convallis porttitor. Integer
											vehicula fermentum ligula at pretium. Suspendisse semper iaculis eros, eu aliquam
											justo imperdiet vel. Proin nec dictum mi. Duis commodo enim non tellus interdum
											elit. Suspendisse fermentum adipiscing nisi, a tempor libero malesuada at. Morbi
											lacinia dui adipiscing risus eleifend tincidunt. Proin eu mauris eu tellus eleifend
											hendrerit.
										</p>
										<p>
											Mauris sit amet tellus urna. In facilisis, tortor vitae ultricies egestas, odio
											mi rhoncus arcu, quis euismod felis felis et velit. Mauris varius consectetur erat
											egestas tempus. Cras convallis odio sit amet risus convallis porttitor. Integer
											vehicula fermentum ligula at pretium. Suspendisse semper iaculis eros, eu aliquam
											justo imperdiet vel. Proin nec dictum mi. Duis commodo enim non tellus interdum
											iaculis. Phasellus ultrices diam sit amet orci lacinia sed consequat dui auctor.
										</p>
										<p>
											Sed faucibus viverra ligula, non varius magna semper vitae. Donec eu justo ut ipsum
											hendrerit congue nec eu risus. Cum sociis natoque penatibus et magnis dis parturient
											montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing
											egestas tempus. Cras convallis odio sit amet risus convallis porttitor. Integer
											vehicula fermentum ligula at pretium. Suspendisse semper iaculis eros, eu aliquam
											justo imperdiet vel. Proin nec dictum mi. Duis commodo enim non tellus interdum
											elit. Suspendisse fermentum adipiscing nisi, a tempor libero malesuada at. Morbi
											lacinia dui adipiscing risus eleifend tincidunt. Proin eu mauris eu tellus eleifend
											hendrerit.
										</p>
										<p>
											Mauris sit amet tellus urna. In facilisis, tortor vitae ultricies egestas, odio
											mi rhoncus arcu, quis euismod felis felis et velit. Mauris varius consectetur erat
											egestas tempus. Cras convallis odio sit amet risus convallis porttitor. Integer
											vehicula fermentum ligula at pretium. Suspendisse semper iaculis eros, eu aliquam
											justo imperdiet vel. Proin nec dictum mi. Duis commodo enim non tellus interdum
											iaculis. Phasellus ultrices diam sit amet orci lacinia sed consequat dui auctor.
										</p>
 * 
 * 
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