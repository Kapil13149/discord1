import React from "react";
import "./banner.css";
import Section1 from "../section_1/section_1"

const Banner = () => {
	return (
		<div className="pb-5">
		<section className="banner position-relative">
			<div className="container">
				<div className="row">
					<header>
						<div className="logo col-2">
							<img src="images/favicon.ico" />
							<h2>Discord</h2>
						</div>
						<nav className="col-8">
							<ul>
								<li>
									<a href="#">Download </a>
								</li>
								<li>
									<a href="#">Nitro</a>
								</li>
								<li>
									<a href="#">Discover</a>
								</li>
								<li>
									<a href="#">Safety </a>
								</li>
								<li>
									<a href="#">Support</a>
								</li>
								<li>
									<a href="#">Blog</a>
								</li>
								<li>
									<a href="#">Career</a>
								</li>
							</ul>
						</nav>
						<div className="col-2">
							<button className="btn1 btn btn-light">Login</button>
						</div>
					</header>
				</div>
				<div className="row">
					<div className="col-12">
						<div className="banner-content">
							<h1 className="title">Imagine a place...</h1>
							<p>
								...where you can belong to a school club, a gaming group, or a
								worldwide art community. Where just you and a handful of friends
								can spend time together. A place that makes it easy to talk every
								day and hang out more often.
							</p>
							<div className="buttons">
								<button className="btn btn-light"><i className="fa fa-download"></i> Download for Windows</button>
								<button className="btn text-light btndark">Open Discord in your browser</button>
							</div>
						</div>
						<img className="img1" src="images/Image1.svg" alt="banner" />
						<img className="img2" src="images/Image2.svg" alt="banner" />
					</div>
				</div>
			</div>
		</section>
		<Section1 />
		</div>
		
	);
};

export default Banner;
