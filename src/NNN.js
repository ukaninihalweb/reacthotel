import logo from "./images/i-1.png";
import i2 from "./images/i-2.png";
import i1 from "./images/i-1.png";
import c1 from "./images/c-1.png";
import c2 from "./images/c-2.png";
import c3 from "./images/c-3.png";
import c4 from "./images/c-4.png";
import r1 from "./images/r-1.png";
import bed from "./images/bed.png";
import bath from "./images/bath.png";
import wifi from "./images/wifi.png";
import r2 from "./images/r-2.png";
import bed2 from "./images/bed.png";
import bath2 from "./images/bath.png";
import wifi2 from "./images/wifi.png";
import r3 from "./images/r-3.png";
import bed3 from "./images/bed.png";
import bath3 from "./images/bath.png";
import wifi3 from "./images/wifi.png";
import r4 from "./images/r-4.png";
import bed4 from "./images/bed.png";
import bath4 from "./images/bath.png";
import wifi4 from "./images/wifi.png";
import b2 from "./images/b2.jpg";
import rooms from "./images/rooms.png";
import food from "./images/food.png";
import spa from "./images/spa.png";
import sports from "./images/sports.png";
import event from "./images/event.png";
import gym from "./images/gym.png";
import i3 from "./images/i1.png";
import i4 from "./images/i1.png";
import i5 from "./images/i1.png";
import t1 from "./images/t-1.png";
import t2 from "./images/t-2.png";
import t3 from "./images/t-3.png";
import t4 from "./images/t-4.png";
import blog1 from "./images/blog-1.png";
import user from "./images/user.png";
import calender from "./images/calender.png";
import blog2 from "./images/blog-2.png";
import user2 from "./images/user.png";
import calender2 from "./images/calender.png";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

function Home() {
  return (
    <div>
      <main>
        {/* banner */}

        <section className="banner">
          <div className="container-fluid">
            <div className="row">
              <div className="content">
                <h6 className="text-white">LUXURY LIVING</h6>
                <h1 className="text-white col-xxl-6">
                  Discover A Brand Luxurious Hotel
                </h1>
                <div className="mt-3">
                  <button type="submit" class="button text-white border-0">
                    OUR ROOMS
                  </button>
                  <button type="submit" class="border-0">
                    BOOK A ROOM
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* form */}

        {/* <section className="form">
          <div className="container-fluid">
            <div className="row">
              <form>
                <div className="form-content shadow d-flex justify-content-between">
                  <input type="text" placeholder="Check in"></input>
                  <input type="text" placeholder="Check out"></input>
                  <input type="text" placeholder="Adult"></input>
                  <input type="text" placeholder="Child"></input>
                  <div class="cta-btn text-center">
                    <a
                      href="javascript:;"
                      class="text-white justify-content-center text-uppercase"
                    >
                      Submit
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section> */}

        {/* branch */}

        {/* <section class="branch">
          <div class="container-fluid">
            <div class="row">
              <div class="text-center mt-3">
                <h6>ABOUT US</h6>
                <h2 class="fw-bold">Branch</h2>
              </div>
              <div class="content d-flex mt-5">
                <div class="col-4">
                  <div class="image">
                    <img src={logo} alt="logo" />
                  </div>
                  <div class="city-name">
                    <h1 class="text-center text-white fw-bold">Surat</h1>
                  </div>
                </div>
                <div class="col-4">
                  <div class="image">
                    <img src={i2} alt="logo" />
                  </div>
                  <div class="city-name">
                    <h1 class="text-center text-white fw-bold">Vadodara</h1>
                  </div>
                </div>
                <div class="col-4">
                  <div class="image">
                    <img src={i1} alt="logo" />
                  </div>
                  <div class="city-name">
                    <h1 class="text-center text-white fw-bold">Ahmedabad</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* counter */}

        {/* <section class="counter d-grid align-content-center">
          <div class="container-fluid">
            <div class="row">
              <div class="content d-flex">
                <div class="col-3 text-center">
                  <div class="c-content">
                    <div class="image">
                      <img src={c1} alt="logo" />
                    </div>
                    <div class="num">
                      <h2 class="text-white">1234</h2>
                    </div>
                    <div class="num2">
                      <h6 class="text-white">Appartments</h6>
                    </div>
                  </div>
                </div>
                <div class="col-3 text-center">
                  <div class="c-content">
                    <div class="image">
                      <img src={c2} alt="logo" />
                    </div>
                    <div class="num">
                      <h2 class="text-white">1234</h2>
                    </div>
                    <div class="num2">
                      <h6 class="text-white">Rooms</h6>
                    </div>
                  </div>
                </div>
                <div class="col-3 text-center">
                  <div class="c-content">
                    <div class="image">
                      <img src={c3} alt="logo" />
                    </div>
                    <div class="num">
                      <h2 class="text-white">1234</h2>
                    </div>
                    <div class="num2">
                      <h6 class="text-white">Staffs</h6>
                    </div>
                  </div>
                </div>
                <div class="col-3 text-center">
                  <div class="c-content">
                    <div class="image">
                      <img src={c4} alt="logo" />
                    </div>
                    <div class="num">
                      <h2 class="text-white">1234</h2>
                    </div>
                    <div class="num2">
                      <h6 class="text-white">Clients</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* rooms */}

        {/* <section class="rooms">
          <div class="container-fluid">
            <div class="row">
              <div class="content">
                <div class="text-center mb-4">
                  <h6 className="text-uppercase">our rooms</h6>
                  <h1 class="text-capitalize fw-bold">
                    explore our <span className="text-uppercase">rooms</span>
                  </h1>
                </div>
                <div class="d-flex flex-wrap">
                  <div class="col-6 d-grid">
                    <div class="d-flex bg-white shadow col-11">
                      <div class="image col-6">
                        <img src={r1} alt="logo" />
                      </div>
                      <div class="r-content col-6">
                        <div class="d-flex justify-content-between py-4">
                          <div>
                            <a
                              href="javascript:;"
                              class="text-white text-decoration-none"
                            >
                              $100/Night
                            </a>
                          </div>
                          <div>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                          </div>
                        </div>
                        <div>
                          <h5 class="fw-bold mb-3">Junior Suite</h5>
                        </div>
                        <div class="d-flex">
                          <div class="bed d-flex align-items-center me-3">
                            <div class="image me-2">
                              <img src={bed} alt="logo" />
                            </div>
                            <div class="title">
                              <h6 class="m-0 text-secondary me-3">3 Bed</h6>
                            </div>
                          </div>
                          <div class="bed d-flex align-items-center me-3">
                            <div class="image me-2">
                              <img src={bath} alt="logo" />
                            </div>
                            <div class="title">
                              <h6 class="m-0 text-secondary me-3">2 Bath</h6>
                            </div>
                          </div>
                          <div class="wifi d-flex align-items-center">
                            <div class="image me-2">
                              <img src={wifi} alt="logo" />
                            </div>
                            <div class="title">
                              <h6 class="m-0 text-secondary">wifi</h6>
                            </div>
                          </div>
                        </div>
                        <div class="mt-4">
                          <p class="text-secondary">
                            Erat ipsum justo amet duo et elitr dolor, est duo
                            duo eos lorem sed diam stet diam sed stet.
                          </p>
                        </div>
                        <div class="mt-3">
                          <a
                            href="javascript:;"
                            class="btn view me-5 text-white text-uppercase"
                          >
                            view detail
                          </a>
                          <a
                            href="javascript:;"
                            class="btn book ms-3 text-white text-uppercase"
                          >
                            book now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-6 d-grid">
                    <div class="d-flex bg-white shadow col-11">
                      <div class="image col-6">
                        <img src={r2} alt="logo" />
                      </div>
                      <div class="r-content col-6">
                        <div class="d-flex justify-content-between py-4">
                          <div>
                            <a
                              href="javascript:;"
                              class="text-white text-decoration-none"
                            >
                              $100/Night
                            </a>
                          </div>
                          <div>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                          </div>
                        </div>
                        <div>
                          <h5 class="fw-bold mb-3">Junior Suite</h5>
                        </div>
                        <div class="d-flex">
                          <div class="bed d-flex align-items-center me-3">
                            <div class="image me-2">
                              <img src={bed2} alt="logo" />
                            </div>
                            <div class="title">
                              <h6 class="m-0 text-secondary me-3">3 Bed</h6>
                            </div>
                          </div>
                          <div class="bed d-flex align-items-center me-3">
                            <div class="image me-2">
                              <img src={bath2} alt="logo" />
                            </div>
                            <div class="title">
                              <h6 class="m-0 text-secondary me-3">2 Bath</h6>
                            </div>
                          </div>
                          <div class="wifi d-flex align-items-center">
                            <div class="image me-2">
                              <img src={wifi2} alt="logo" />
                            </div>
                            <div class="title">
                              <h6 class="m-0 text-secondary">wifi</h6>
                            </div>
                          </div>
                        </div>
                        <div class="mt-4">
                          <p class="text-secondary">
                            Erat ipsum justo amet duo et elitr dolor, est duo
                            duo eos lorem sed diam stet diam sed stet.
                          </p>
                        </div>
                        <div class="mt-3">
                          <a
                            href="javascript:;"
                            class="btn view me-5 text-white text-uppercase"
                          >
                            view detail
                          </a>
                          <a
                            href="javascript:;"
                            class="btn book ms-3 text-white text-uppercase"
                          >
                            book now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-6 d-grid mt-4">
                    <div class="d-flex bg-white shadow col-11">
                      <div class="image col-6">
                        <img src={r3} alt="logo" />
                      </div>
                      <div class="r-content col-6">
                        <div class="d-flex justify-content-between py-4">
                          <div>
                            <a
                              href="javascript:;"
                              class="text-white text-decoration-none"
                            >
                              $100/Night
                            </a>
                          </div>
                          <div>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                          </div>
                        </div>
                        <div>
                          <h5 class="fw-bold mb-3">Junior Suite</h5>
                        </div>
                        <div class="d-flex">
                          <div class="bed d-flex align-items-center me-3">
                            <div class="image me-2">
                              <img src={bed3} alt="logo" />
                            </div>
                            <div class="title">
                              <h6 class="m-0 text-secondary me-3">3 Bed</h6>
                            </div>
                          </div>
                          <div class="bed d-flex align-items-center me-3">
                            <div class="image me-2">
                              <img src={bath3} alt="logo" />
                            </div>
                            <div class="title">
                              <h6 class="m-0 text-secondary me-3">2 Bath</h6>
                            </div>
                          </div>
                          <div class="wifi d-flex align-items-center">
                            <div class="image me-2">
                              <img src={wifi3} alt="logo" />
                            </div>
                            <div class="title">
                              <h6 class="m-0 text-secondary">wifi</h6>
                            </div>
                          </div>
                        </div>
                        <div class="mt-4">
                          <p class="text-secondary">
                            Erat ipsum justo amet duo et elitr dolor, est duo
                            duo eos lorem sed diam stet diam sed stet.
                          </p>
                        </div>
                        <div class="mt-3">
                          <a
                            href="javascript:;"
                            class="btn view me-5 text-white text-uppercase"
                          >
                            view detail
                          </a>
                          <a
                            href="javascript:;"
                            class="btn book ms-3 text-white text-uppercase"
                          >
                            book now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-6 d-grid mt-4">
                    <div class="d-flex bg-white shadow col-11">
                      <div class="image col-6">
                        <img src={r4} alt="logo" />
                      </div>
                      <div class="r-content col-6">
                        <div class="d-flex justify-content-between py-4">
                          <div>
                            <a
                              href="javascript:;"
                              class="text-white text-decoration-none"
                            >
                              $100/Night
                            </a>
                          </div>
                          <div>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                          </div>
                        </div>
                        <div>
                          <h5 class="fw-bold mb-3">Junior Suite</h5>
                        </div>
                        <div class="d-flex">
                          <div class="bed d-flex align-items-center me-3">
                            <div class="image me-2">
                              <img src={bed4} alt="logo" />
                            </div>
                            <div class="title">
                              <h6 class="m-0 text-secondary me-3">3 Bed</h6>
                            </div>
                          </div>
                          <div class="bed d-flex align-items-center me-3">
                            <div class="image me-2">
                              <img src={bath4} alt="logo" />
                            </div>
                            <div class="title">
                              <h6 class="m-0 text-secondary me-3">2 Bath</h6>
                            </div>
                          </div>
                          <div class="wifi d-flex align-items-center">
                            <div class="image me-2">
                              <img src={wifi4} alt="logo" />
                            </div>
                            <div class="title">
                              <h6 class="m-0 text-secondary">wifi</h6>
                            </div>
                          </div>
                        </div>
                        <div class="mt-4">
                          <p class="text-secondary">
                            Erat ipsum justo amet duo et elitr dolor, est duo
                            duo eos lorem sed diam stet diam sed stet.
                          </p>
                        </div>
                        <div class="mt-3">
                          <a
                            href="javascript:;"
                            class="btn view me-5 text-white text-uppercase"
                          >
                            view detail
                          </a>
                          <a
                            href="javascript:;"
                            class="btn book ms-3 text-white text-uppercase"
                          >
                            book now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* banner-two */}

        {/* <section class="banner-two">
          <div class="container-fluid">
            <div class="row">
              <div class="content d-flex mt-5">
                <div class="text-content col-6 text-white">
                  <h6>luxury living</h6>
                  <h1 class="col-8 text-capitalize">
                    discover a brand luxurious hotel
                  </h1>
                  <p class="mt-3">
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                    Aliqu diam amet diam et eos. Clita erat ipsum et lorem et
                    sit, sed stet lorem sit clita duo justo magna dolore erat
                    amet
                  </p>
                  <div>
                    <a
                      href="javascript:;"
                      class="btn view text-white text-uppercase rounded-0 border-0"
                    >
                      our rooms
                    </a>
                    <a
                      href="javascript:;"
                      class="btn book ms-3 text-black text-uppercase rounded-0 border-0"
                    >
                      book a room
                    </a>
                  </div>
                </div>
                <div class="image col-6">
                  <img src={b2} alt="logo" />
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* our-services */}

        {/* <section class="our-services mt-5">
          <div class="container">
            <div class="row">
              <div class="content">
                <div class="text-center">
                  <h6 class="text-uppercase">our services</h6>
                  <h2 class="text-capitalize fw-bold">
                    explore our <span class="text-uppercase">services</span>
                  </h2>
                </div>
                <div class="d-flex flex-wrap">
                  <div class="col-4 p-2">
                    <div class="service bg-white shadow p-4">
                      <div class="image border p-1">
                        <div class="border p-1">
                          <img src={rooms} alt="logo" />
                        </div>
                      </div>
                      <div class="title mt-3">
                        <h6 class="fw-bold">Rooms & Appartment</h6>
                      </div>
                      <div class="para">
                        <p>
                          Erat ipsum justo amet duo et elitr dolor, est duo duo
                          eos lorem sed diam stet diam sed stet lorem.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-4 p-2">
                    <div class="service bg-white shadow p-4">
                      <div class="image border p-1">
                        <div class="border p-1">
                          <img src={food} alt="logo" />
                        </div>
                      </div>
                      <div class="title mt-3">
                        <h6 class="fw-bold">Rooms & Appartment</h6>
                      </div>
                      <div class="para">
                        <p>
                          Erat ipsum justo amet duo et elitr dolor, est duo duo
                          eos lorem sed diam stet diam sed stet lorem.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-4 p-2">
                    <div class="service bg-white shadow p-4">
                      <div class="image border p-1">
                        <div class="border p-1">
                          <img src={spa} alt="logo" />
                        </div>
                      </div>
                      <div class="title mt-3">
                        <h6 class="fw-bold">Rooms & Appartment</h6>
                      </div>
                      <div class="para">
                        <p>
                          Erat ipsum justo amet duo et elitr dolor, est duo duo
                          eos lorem sed diam stet diam sed stet lorem.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-4 p-2">
                    <div class="service bg-white shadow p-4">
                      <div class="image border p-1">
                        <div class="border p-1">
                          <img src={sports} alt="logo" />
                        </div>
                      </div>
                      <div class="title mt-3">
                        <h6 class="fw-bold">Rooms & Appartment</h6>
                      </div>
                      <div class="para">
                        <p>
                          Erat ipsum justo amet duo et elitr dolor, est duo duo
                          eos lorem sed diam stet diam sed stet lorem.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-4 p-2">
                    <div class="service bg-white shadow p-4">
                      <div class="image border p-1">
                        <div class="border p-1">
                          <img src={event} alt="logo" />
                        </div>
                      </div>
                      <div class="title mt-3">
                        <h6 class="fw-bold">Rooms & Appartment</h6>
                      </div>
                      <div class="para">
                        <p>
                          Erat ipsum justo amet duo et elitr dolor, est duo duo
                          eos lorem sed diam stet diam sed stet lorem.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-4 p-2">
                    <div class="service bg-white shadow p-4">
                      <div class="image border p-1">
                        <div class="border p-1 text-center">
                          <img src={gym} alt="logo" />
                        </div>
                      </div>
                      <div class="title mt-3">
                        <h6 class="fw-bold">Rooms & Appartment</h6>
                      </div>
                      <div class="para">
                        <p>
                          Erat ipsum justo amet duo et elitr dolor, est duo duo
                          eos lorem sed diam stet diam sed stet lorem.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* testimonial */}

        {/* <section class="testimonial mt-5">
          <div class="container-fluid">
            <div class="row">
              <div id="carouselExample" class="carousel slide">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div class="content text-center">
                      <div class="title">
                        <h6 class="text-uppercase">testimonial</h6>
                        <h1 class="text-capitalize fw-bold">
                          our client{" "}
                          <span class="text-uppercase">feedback</span>
                        </h1>
                      </div>
                      <div class="icon mt-5">
                        <img src={i3} alt="logo" />

                        <h5 class="text-capitalize fw-bold mt-2">
                          client name
                        </h5>
                        <h6 class="text-capitalize text-secondary">
                          profession
                        </h6>
                        <div class="quote">
                          <i class="bi bi-quote text-warning"></i>
                        </div>
                      </div>
                      <div class="para col-10 col-xxl-7 m-auto mt-4 bg-white shadow pt-3 ps-3 pe-3 pb-3">
                        <div class="pb-3">
                          <i class="bi bi-star-fill me-2 text-warning"></i>
                          <i class="bi bi-star-fill me-2 text-warning"></i>
                          <i class="bi bi-star-fill me-2 text-warning"></i>
                          <i class="bi bi-star-fill me-2 text-warning"></i>
                          <i class="bi bi-star-fill me-2 text-warning"></i>
                        </div>
                        <p class="">
                          Clita clita tempor justo dolor ipsum amet kasd amet
                          duo justo duo duo labore sed sed. Magna ut diam sit et
                          amet stet eos sed clita erat magna elitr nonumy erat
                          sit sit erat at rebum justo sea clita, kasd stet sed
                          elitr. Elitr lorem diam justo ut clita et. Vero lorem
                          sit lorem lorem ipsum elitr diam, amet justo et rebum
                          amet at amet et.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="content text-center">
                      <div class="title">
                        <h6 class="text-uppercase">testimonial</h6>
                        <h1 class="text-capitalize fw-bold">
                          our client{" "}
                          <span class="text-uppercase">feedback</span>
                        </h1>
                      </div>
                      <div class="icon mt-5">
                        <img src={i5} alt="logo" />

                        <h5 class="text-capitalize fw-bold mt-2">
                          client name
                        </h5>
                        <h6 class="text-capitalize text-secondary">
                          profession
                        </h6>
                        <div class="quote">
                          <i class="bi bi-quote text-warning"></i>
                        </div>
                      </div>
                      <div class="para col-10 col-xxl-7 m-auto mt-4 bg-white shadow pt-3 ps-3 pe-3 pb-3">
                        <div class="pb-3">
                          <i class="bi bi-star-fill me-2 text-warning"></i>
                          <i class="bi bi-star-fill me-2 text-warning"></i>
                          <i class="bi bi-star-fill me-2 text-warning"></i>
                          <i class="bi bi-star-fill me-2 text-warning"></i>
                          <i class="bi bi-star-fill me-2 text-warning"></i>
                        </div>
                        <p class="">
                          Clita clita tempor justo dolor ipsum amet kasd amet
                          duo justo duo duo labore sed sed. Magna ut diam sit et
                          amet stet eos sed clita erat magna elitr nonumy erat
                          sit sit erat at rebum justo sea clita, kasd stet sed
                          elitr. Elitr lorem diam justo ut clita et. Vero lorem
                          sit lorem lorem ipsum elitr diam, amet justo et rebum
                          amet at amet et.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="content text-center">
                      <div class="title">
                        <h6 class="text-uppercase">testimonial</h6>
                        <h1 class="text-capitalize fw-bold">
                          our client{" "}
                          <span class="text-uppercase">feedback</span>
                        </h1>
                      </div>
                      <div class="icon mt-5">
                        <img src={i4} alt="logo" />

                        <h5 class="text-capitalize fw-bold mt-2">
                          client name
                        </h5>
                        <h6 class="text-capitalize text-secondary">
                          profession
                        </h6>
                        <div class="quote">
                          <i class="bi bi-quote text-warning"></i>
                        </div>
                      </div>
                      <div class="para col-10 col-xxl-7 m-auto mt-4 bg-white shadow pt-3 ps-3 pe-3 pb-3">
                        <div class="pb-3">
                          <i class="bi bi-star-fill me-2 text-warning"></i>
                          <i class="bi bi-star-fill me-2 text-warning"></i>
                          <i class="bi bi-star-fill me-2 text-warning"></i>
                          <i class="bi bi-star-fill me-2 text-warning"></i>
                          <i class="bi bi-star-fill me-2 text-warning"></i>
                        </div>
                        <p>
                          Clita clita tempor justo dolor ipsum amet kasd amet
                          duo justo duo duo labore sed sed. Magna ut diam sit et
                          amet stet eos sed clita erat magna elitr nonumy erat
                          sit sit erat at rebum justo sea clita, kasd stet sed
                          elitr. Elitr lorem diam justo ut clita et. Vero lorem
                          sit lorem lorem ipsum elitr diam, amet justo et rebum
                          amet at amet et.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden"></span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </section> */}

        {/* our team */}

        {/* <section class="our-team">
          <div class="container">
            <div class="row">
              <div class="content">
                <div class="text-center">
                  <h6 class="text-uppercase">our team</h6>
                  <h1 class="text-capitalize fw-bold">
                    explore our <span class="text-uppercase">staffs</span>
                  </h1>
                </div>
                <div class="d-flex mt-5">
                  <div class="col-3">
                    <img src={t1} alt="logo" />
                    <div class="bg-white shadow pb-1">
                      <div class="icon d-flex justify-content-center">
                        <div class="face text-center me-2 text-white">
                          <FaFacebookF />
                        </div>
                        <div class="twitter text-center me-2 text-white">
                          <FaTwitter />
                        </div>
                        <div class="insta text-center me-2 text-white">
                          <FaInstagram />
                        </div>
                      </div>
                      <div class="title text-center">
                        <h5 class="text-capitalize m-0 fw-bold">full name</h5>
                        <p class="text-capitalize">designation</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-3">
                    <img src={t2} alt="logo" />

                    <div class="bg-white shadow pb-1">
                      <div class="icon d-flex justify-content-center">
                        <div class="face text-center me-2 text-white">
                          {" "}
                          <FaFacebookF />
                        </div>
                        <div class="twitter text-center me-2 text-white">
                          <FaTwitter />
                        </div>
                        <div class="insta text-center me-2 text-white">
                          <FaInstagram />
                        </div>
                      </div>
                      <div class="title text-center">
                        <h5 class="text-capitalize m-0 fw-bold">full name</h5>
                        <p class="text-capitalize">designation</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-3">
                    <img src={t3} alt="logo" />

                    <div class="bg-white shadow pb-1">
                      <div class="icon d-flex justify-content-center">
                        <div class="face text-center me-2 text-white">
                          <FaFacebookF />
                        </div>
                        <div class="twitter text-center me-2 text-white">
                          <FaTwitter />
                        </div>
                        <div class="insta text-center me-2 text-white">
                          <FaInstagram />
                        </div>
                      </div>
                      <div class="title text-center">
                        <h5 class="text-capitalize m-0 fw-bold">full name</h5>
                        <p class="text-capitalize">designation</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-3">
                    <img src={t4} alt="logo" />
                    <div class="bg-white shadow pb-1">
                      <div class="icon d-flex justify-content-center">
                        <div class="face text-center me-2 text-white">
                          <FaFacebookF />
                        </div>
                        <div class="twitter text-center me-2 text-white">
                          <FaTwitter />
                        </div>
                        <div class="insta text-center me-2 text-white">
                          <FaInstagram />
                        </div>
                      </div>
                      <div class="title text-center">
                        <h5 class="text-capitalize m-0 fw-bold">full name</h5>
                        <p class="text-capitalize">designation</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* blog post  */}

        {/* <section class="blog-post mt-5">
          <div class="container-fluid">
            <div class="row">
              <div class="content">
                <div class="text-center">
                  <h6 class="text-uppercase">blog post</h6>
                  <h1 class="text-capitalize fw-bold">
                    latest from <span class="text-uppercase">blog</span>
                  </h1>
                </div>
                <div class="d-flex mt-5">
                  <div class="col-6 d-grid">
                    <div class="d-flex bg-white shadow col-11">
                      <div class="image col-6">
                        <img src={blog1} alt="logo" />
                      </div>
                      <div class="r-content col-6">
                        <div class="d-flex justify-content-between py-4">
                          <div>
                            <a
                              href="javascript:;"
                              class="text-white text-decoration-none text-capitalize"
                            >
                              web design
                            </a>
                          </div>
                        </div>
                        <div class="d-flex">
                          <div class="bed d-flex align-items-center me-3">
                            <div class="image me-2">
                              <img src={user} alt="logo" />
                            </div>
                            <div class="title">
                              <h6 class="m-0 text-secondary me-3 text-capitalize">
                                john doe
                              </h6>
                            </div>
                          </div>
                          <div class="bed d-flex align-items-center me-3">
                            <div class="image me-2">
                              <img src={calender} alt="logo" />
                            </div>
                            <div class="title">
                              <h6 class="m-0 text-secondary me-3">
                                01 Jan 2024
                              </h6>
                            </div>
                          </div>
                        </div>
                        <div class="para mt-4">
                          <p class="fw-bold mb-4">
                            Diam rebum diam clita rebum lorem ipsum sed elitr
                            diam sed clita
                          </p>
                        </div>
                        <div class="d-flex mt-4 justify-content-between">
                          <div class="read-btn">
                            <a
                              href="javascript:;"
                              class="btn view text-white text-uppercase"
                            >
                              read more
                            </a>
                          </div>
                          <div class="share d-flex align-items-center">
                            <h6 class="text-capitalize m-0 me-2 text-secondary">
                              share:
                            </h6>
                            <FaFacebookF className="me-2 face" />
                            <FaTwitter className="twitter" />
                            <i class="fa-brands fa-linkedin-in me-2"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-6 d-grid">
                    <div class="d-flex bg-white shadow col-11">
                      <div class="image col-6">
                        <img src={blog2} alt="logo" />
                      </div>
                      <div class="r-content col-6">
                        <div class="d-flex justify-content-between py-4">
                          <div>
                            <a
                              href="javascript:;"
                              class="text-white text-decoration-none text-capitalize"
                            >
                              web design
                            </a>
                          </div>
                        </div>
                        <div class="d-flex">
                          <div class="bed d-flex align-items-center me-3">
                            <div class="image me-2">
                              <img src={user2} alt="logo" />
                            </div>
                            <div class="title">
                              <h6 class="m-0 text-secondary me-3 text-capitalize">
                                john doe
                              </h6>
                            </div>
                          </div>
                          <div class="bed d-flex align-items-center me-3">
                            <div class="image me-2">
                              <img src={calender2} alt="logo" />
                            </div>
                            <div class="title">
                              <h6 class="m-0 text-secondary me-3">
                                01 Jan 2024
                              </h6>
                            </div>
                          </div>
                        </div>
                        <div class="para mt-4">
                          <p class="fw-bold mb-4">
                            Diam rebum diam clita rebum lorem ipsum sed elitr
                            diam sed clita
                          </p>
                        </div>
                        <div class="d-flex mt-4 justify-content-between">
                          <div class="read-btn">
                            <a
                              href="javascript:;"
                              class="btn view me-4 text-white text-uppercase"
                            >
                              read more
                            </a>
                          </div>
                          <div class="share d-flex align-items-center">
                            <h6 class="text-capitalize m-0 me-2 text-secondary">
                              share:
                            </h6>
                            <FaFacebookF className="me-2 face" />
                            <FaTwitter className="twitter" />
                            <i class="fa-brands fa-linkedin-in me-2"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* subscribe  */}

        {/* <section class="subscribe mt-5">
          <div class="container">
            <div class="row border p-1">
              <div class="content text-center d-grid border pt-5 pb-5">
                <h3 class="fw-bold">
                  subscribe our <span class="text-uppercase">newsletter</span>
                </h3>
                <div class="email d-flex justify-content-between border mt-3">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                  ></input>
                  <div class="submit">
                    <a
                      href="javascript:;"
                      class="text-uppercase submit2 text-white"
                    >
                      submit
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* footer  */}

        {/* <footer>
          <div class="container-fluid">
            <div class="row">
              <div class="content d-flex">
                <div class="my-hotels col-3 text-white">
                  <h1 class="text-uppercase fw-bold">my hotels</h1>
                  <p>
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                    Aliqu diam amet diam et eos. Clita erat ipsum
                  </p>
                </div>
                <div className="col-3 contact ps-5">
                  <h5 className="text-uppercase mb-4">contact</h5>
                  <div className="add d-flex align-items-center mb-2">
                    <FaMapMarkerAlt className="me-2 text-white" />
                    <p className="m-0 text-white">123 Street, New York, USA</p>
                  </div>
                  <div className="phone d-flex align-items-center mb-2">
                    <FaPhoneAlt className="me-2 text-white" />
                    <p className="m-0 text-white">+012 345 67890</p>
                  </div>
                  <div className="mail d-flex align-items-center mb-2">
                    <IoMail className="me-2 text-white" />
                    <p className="m-0 text-white">info@example.com</p>
                  </div>
                  <div className="icon">
                    <ul className="d-flex">
                      <li className="text-center me-1">
                        <a href="#">
                          <FaTwitter className="text-white" />
                        </a>
                      </li>
                      <li className="text-center me-1">
                        <a href="#">
                          <FaFacebookF className="text-white" />
                        </a>
                      </li>
                      <li className="text-center me-1">
                        <a href="#">
                          <FaYoutube className="text-white" />
                        </a>
                      </li>
                      <li className="text-center">
                        <a href="#">
                          <FaLinkedinIn className="text-white" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-3 company ps-5">
                  <h5 className="text-uppercase mb-4">company</h5>
                  <div className="d-flex">
                    <IoIosArrowForward className="text-white arrow" />
                    <h6 className="mb-3">
                      <a href="#">About Us</a>
                    </h6>
                  </div>
                  <div className="d-flex">
                    <IoIosArrowForward className="text-white arrow" />
                    <h6 className="mb-3">
                      <a href="#">Contact Us</a>
                    </h6>
                  </div>
                  <div className="d-flex">
                    <IoIosArrowForward className="text-white arrow" />
                    <h6 className="mb-3">
                      <a href="#">Privacy Policy</a>
                    </h6>
                  </div>
                  <div className="d-flex">
                    <IoIosArrowForward className="text-white arrow" />
                    <h6 className="mb-3">
                      <a href="#">Terms & Condition</a>
                    </h6>
                  </div>
                  <div className="d-flex">
                    <IoIosArrowForward className="text-white arrow" />
                    <h6 className="mb-3">
                      <a href="#">Support</a>
                    </h6>
                  </div>
                </div>
                <div className="col-3 services ps-5">
                  <h5 className="text-uppercase mb-4">services</h5>
                  <div className="d-flex">
                    <IoIosArrowForward className="text-white arrow" />
                    <h6 className="mb-3">
                      <a href="#">Food & Restaurant</a>
                    </h6>
                  </div>
                  <div className="d-flex">
                    <IoIosArrowForward className="text-white arrow" />
                    <h6 className="mb-3">
                      <a href="#">Spa & Fitness</a>
                    </h6>
                  </div>
                  <div className="d-flex">
                    <IoIosArrowForward className="text-white arrow" />
                    <h6 className="mb-3">
                      <a href="#">Sports & Gaming</a>
                    </h6>
                  </div>
                  <div className="d-flex">
                    <IoIosArrowForward className="text-white arrow" />
                    <h6 className="mb-3">
                      <a href="#">Event & Party</a>
                    </h6>
                  </div>
                  <div className="d-flex">
                    <IoIosArrowForward className="text-white arrow" />
                    <h6 className="mb-3">
                      <a href="#">GYM & Yoga</a>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer> */}

        {/* copyright */}

        {/* <section className="copyright pb-2 border-top pt-4">
          <div className="container-fluid">
            <div className="row">
              <div className="d-flex justify-content-between">
                <div className="text-white">
                  ©{" "}
                  <span className="text-decoration-underline">
                    Your Site Name,
                  </span>
                  <span> All Right Reserved. Designed By </span>
                  <span className="text-decoration-underline">
                    Vakratund Solutions
                  </span>
                </div>
                <div>
                  <ul className="d-flex">
                    <li>
                      <a href="#" className="text-white me-3 border-end pe-3">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-white me-3 border-end pe-3">
                        Cookies
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-white me-3 border-end pe-3">
                        Help
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-white me-2">
                        FAQs
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </main>
    </div>
  );
}

export default Home;