import React from 'react';
import "./Blog.css";
import tie from "../../images/tie.jpg"
import lara from "../../images/lara.jpg"
import joe from "../../images/joe.webp"
import tech from "../../images/tech.jpg"
import travels from "../../images/travels.jpg"
import game from "../../images/game.jpg"

const Blog = () => {
  return (<>
  <section className='blogsection'>
    <div class="container">



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




  </div>
  </section>
  </>
  )
}

export default Blog;