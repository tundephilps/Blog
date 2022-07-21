import React from "react";
import FancyButton from "./Fancybutton";
import "./Main.scss";
import horizon from "../images/horizon.jpg.webp"
import astro from "../images/astro.webp"
import creed from "../images/creed.jpg.webp"
import marvel from "../images/marvel.jpg.webp"
import crank from "../images/crank.jpg.webp"
import "./Fancybutton.scss";
import Neon from "./Neon";
//import "./Neon.css"


function Home() {
  return (
    <body>


				<div id="banner-wrapper">
					<div class="container">

						<div id="banner">
                <Neon />
                
				<span><p class="t-6">Tech, Gaming, Travels and Adventures ...</p></span>
						</div>

					</div>
				</div>

				<div id="main">
					<div class="container">
						<div class="row main-row">
							<div class="col-4 col-12-medium">

								<section>
									<h2>Welcome to the Optimum Blog</h2>
									<p>This is <strong>Minimaxing</strong>, a fully responsive Blogging Website designed by <a href="http://facebook.com/tundephilps">Tunde Philps</a> and released for free. It features
									a simple, lightweight design, solid HTML5 and CSS3 code, and full responsive support for desktop, tablet, and small displays.</p>
									<footer class="controls">
                  <FancyButton />
									</footer>
								</section>

							</div>
							<div className="col-4 col-6-medium col-12-small">

								<section>
									<h2>Who are you guys?</h2>
									<ul class="small-image-list">
										<li>
											<a href="/##"><img src={horizon} alt="" class="left" /></a>
											<h4>Jane Anderson</h4>
											<p>Varius nibh. Suspendisse vitae magna eget et amet mollis justo facilisis amet quis.</p>
										</li>
										<li>
											<a href="/##"><img src={creed} alt="" class="left" /></a>
											<h4>James Doe</h4>
											<p>Vitae magna eget odio amet mollis justo facilisis amet quis. Sed sagittis consequat.</p>
										</li>
									</ul>
								</section>

							</div>
							<div class="col-4 col-6-medium col-12-small">

								<section>
									<h2>How about some links?</h2>
									<div>
										<div class="row">
											<div class="col-6 col-12-small">
												<ul class="link-list">
													<li><a href="/##">Sed neque nisi consequat</a></li>
													<li><a href="/##">Dapibus sed mattis blandit</a></li>
													<li><a href="/##">Quis accumsan lorem</a></li>
													<li><a href="/##">Suspendisse varius ipsum</a></li>
													<li><a href="/##">Eget et amet consequat</a></li>
												</ul>
											</div>
											<div class="col-6 col-12-small">
												<ul class="link-list">
													<li><a href="/##">Quis accumsan lorem</a></li>
													<li><a href="/##">Sed neque nisi consequat</a></li>
													<li><a href="/##">Eget et amet consequat</a></li>
													<li><a href="/##">Dapibus sed mattis blandit</a></li>
													<li><a href="/##">Vitae magna sed dolore</a></li>
												</ul>
											</div>
										</div>
									</div>
								</section>

							</div>
							<div class="col-6 col-12-medium">

								<section>
									<h2>An assortment of pictures and text</h2>
									<p>Duis neque nisi, dapibus sed mattis quis, rutrum et accumsan.
									Suspendisse nibh. Suspendisse vitae magna eget odio amet mollis
									justo facilisis quis. Sed sagittis mauris amet tellus gravida
									lorem ipsum dolor sit amet consequat blandit lorem ipsum dolor
									sit amet consequat sed dolore.</p>
									<ul class="big-image-list">
										<li>
											<a href="/##"><img src={marvel} alt="" class="left" /></a>
											<h3>Magna Gravida Dolore</h3>
											<p>Varius nibh. Suspendisse vitae magna eget et amet mollis justo
											facilisis amet quis consectetur in, sollicitudin vitae justo. Cras
											Maecenas eu arcu purus, phasellus fermentum elit.</p>
										</li>
										<li>
											<a href="/##"><img src={crank} alt="" class="left" /></a>
											<h3>Magna Gravida Dolore</h3>
											<p>Varius nibh. Suspendisse vitae magna eget et amet mollis justo
											facilisis amet quis consectetur in, sollicitudin vitae justo. Cras
											Maecenas eu arcu purus, phasellus fermentum elit.</p>
										</li>
										<li>
											<a href="/##"><img src={astro} alt="" class="left" /></a>
											<h3>Magna Gravida Dolore</h3>
											<p>Varius nibh. Suspendisse vitae magna eget et amet mollis justo
											facilisis amet quis consectetur in, sollicitudin vitae justo. Cras
											Maecenas eu arcu purus, phasellus fermentum elit.</p>
										</li>
									</ul>
								</section>

							</div>
							<div class="col-6 col-12-medium">

								<article class="blog-post">
									<h2>Just another blog post</h2>
									<a class="comments" href="/##">33 comments</a>
									<a href="/##"><img src={horizon} alt="" class="top blog-post-image" /></a>
									<h3>Magna Gravida Dolore</h3>
									<p>Aenean non massa sapien. In hac habitasse platea dictumst.
									Maecenas sodales purus et nulla sodales aliquam. Aenean ac
									porttitor metus. In hac habitasse platea dictumst. Phasellus
									blandit turpis in leo scelerisque mollis. Nulla venenatis
									ipsum nec est porta rhoncus. Mauris sodales sed pharetra
									nisi nec consectetur. Cras elit magna, hendrerit nec
									consectetur in, sollicitudin vitae justo. Cras amet aliquet
									Aliquam ligula turpis, feugiat id fermentum malesuada,
									rutrum eget turpis. Mauris sodales sed pharetra nisi nec
									consectetur. Cras elit magna, hendrerit nec consectetur
									in sollicitudin vitae.</p>
									<footer class="controls">
                  <FancyButton />
									</footer>
								</article>

							</div>
						</div>
					</div>
				</div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgb(5, 0, 34)" fill-opacity="1" d="M0,32L34.3,69.3C68.6,107,137,181,206,202.7C274.3,224,343,192,411,186.7C480,181,549,203,617,213.3C685.7,224,754,224,823,208C891.4,192,960,160,1029,165.3C1097.1,171,1166,213,1234,224C1302.9,235,1371,213,1406,202.7L1440,192L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
				<div id="footer-wrapper">
					<div class="container">
						<div class="row">
							<div class="col-8 col-12-medium">

								<section>
									<h2>How about a truckload of links?</h2>
									<div>
										<div class="row">
											<div class="col-3 col-6-medium col-12-small">
												<ul class="link-list">
													<li><a href="/##">Sed neque nisi consequat</a></li>
													<li><a href="/##">Dapibus sed mattis blandit</a></li>
													<li><a href="/##">Quis accumsan lorem</a></li>
													<li><a href="/##">Suspendisse varius ipsum</a></li>
													<li><a href="/##">Eget et amet consequat</a></li>
												</ul>
											</div>
											<div class="col-3 col-6-medium col-12-small">
												<ul class="link-list">
													<li><a href="/##">Quis accumsan lorem</a></li>
													<li><a href="/##">Sed neque nisi consequat</a></li>
													<li><a href="/##">Eget et amet consequat</a></li>
													<li><a href="/##">Dapibus sed mattis blandit</a></li>
													<li><a href="/##">Vitae magna sed dolore</a></li>
												</ul>
											</div>
											<div class="col-3 col-6-medium col-12-small">
												<ul class="link-list">
													<li><a href="/##">Sed neque nisi consequat</a></li>
													<li><a href="/##">Dapibus sed mattis blandit</a></li>
													<li><a href="/##">Quis accumsan lorem</a></li>
													<li><a href="/##">Suspendisse varius ipsum</a></li>
													<li><a href="/##">Eget et amet consequat</a></li>
												</ul>
											</div>
											<div class="col-3 col-6-medium col-12-small">
												<ul class="link-list">
													<li><a href="/##">Quis accumsan lorem</a></li>
													<li><a href="/##">Sed neque nisi consequat</a></li>
													<li><a href="/##">Eget et amet consequat</a></li>
													<li><a href="/##">Dapibus sed mattis blandit</a></li>
													<li><a href="/##">Vitae magna sed dolore</a></li>
												</ul>
											</div>
										</div>
									</div>
								</section>

							</div>
							<div class="col-4 col-12-medium">

								<section>
									<h2>Something of interest</h2>
									<p>Duis neque nisi, dapibus sed mattis quis, rutrum accumsan sed.
									Suspendisse eu varius nibh. Suspendisse vitae magna eget odio amet
									mollis justo facilisis quis. Sed sagittis mauris amet tellus gravida
									lorem ipsum dolor sit blandit.</p>
									<footer className="controls">
										<FancyButton />
									</footer>
								</section>

							</div>
						</div>
						<div class="row">
							<div class="col-12">

								<div id="copyright">
									&copy; Untitled. All rights reserved. | Design: By Tunde Philps
								</div>

							</div>
						</div>
					</div>
				</div>



	</body>

  );
}

export default Home;
