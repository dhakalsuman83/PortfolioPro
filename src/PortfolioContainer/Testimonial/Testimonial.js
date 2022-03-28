import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";

import "./Testimonial.css";

export default function Testimonial(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen != props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutright",
    dots: true,
    autoplay: true,
    smartSpeed: 500,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <div>
      <ScreenHeading
        title={"Testimonial"}
        subHeading={"What my Clients say about me"}
      />
      <div className="testimonial-background">
        <section className="testimonial-section" id={props.id}>
          <div className="container">
            <div className="row">
              <OwlCarousel
                className="owl-carousel"
                id="testimonial-carousel"
                {...options}
              >
                <div className="col-lg-12">
                  <div className="testi-item">
                    <div className="testi-comment">
                      <p>
                        <i className="fa fa-quote-left" />I patronized Suman and
                        when He delivered, I honestly fell in love with the
                        project He is a very honest guy and he delivers ontime.
                        <i className="fa fa-quote-right" />
                      </p>
                      <ul className="stars list-unstyled">
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star-half-alt" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                      </ul>
                    </div>
                    <div className="client-info">
                      <img
                        src="img/Testimonial/lady.png"
                        alt="no internet commection"
                      />
                      <h5>AAAA</h5>
                      <p>CEO xyz</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="testi-item">
                    <div className="testi-comment">
                      <p>
                        <i className="fa fa-quote-left" />I patronized Suman and
                        when He delivered, I honestly fell in love with the
                        project He is a very honest guy and he delivers ontime.
                        <i className="fa fa-quote-right" />
                      </p>
                      <ul className="stars list-unstyled">
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star-half-alt" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                      </ul>
                    </div>
                    <div className="client-info">
                      <img
                        src="img/Testimonial/lady.png"
                        alt="no internet commection"
                      />
                      <h5>AAAA</h5>
                      <p>CEO xyz</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="testi-item">
                    <div className="testi-comment">
                      <p>
                        <i className="fa fa-quote-left" />I patronized Suman and
                        when He delivered, I honestly fell in love with the
                        project He is a very honest guy and he delivers ontime.
                        <i className="fa fa-quote-right" />
                      </p>
                      <ul className="stars list-unstyled">
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star-half-alt" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                      </ul>
                    </div>
                    <div className="client-info">
                      <img
                        src="img/Testimonial/mike.png"
                        alt="no internet commection"
                      />
                      <h5>AAAA</h5>
                      <p>CEO xyz</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="testi-item">
                    <div className="testi-comment">
                      <p>
                        <i className="fa fa-quote-left" />I patronized Suman and
                        when He delivered, I honestly fell in love with the
                        project He is a very honest guy and he delivers ontime.
                        <i className="fa fa-quote-right" />
                      </p>
                      <ul className="stars list-unstyled">
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star-half-alt" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                      </ul>
                    </div>
                    <div className="client-info">
                      <img
                        src="img/Testimonial/man.png"
                        alt="no internet commection"
                      />
                      <h5>AAAA</h5>
                      <p>CEO xyz</p>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </section>
        <div class="custom-shape-divider-bottom-1647572968">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
