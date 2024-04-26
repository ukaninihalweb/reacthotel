import './Nav.css'
import C2 from './carousel-2.jpg.png'
import R1 from './Rectangle1.1.png';
import R2 from './Rectangle1.2.png';
import i1 from './I1.png';
import i2 from './I2.png';
import i3 from './I3.png';
import i4 from './I4.png';
import r1 from './room1.jpg.png';
import bed from './bed.png';
import bath from './shower.png';
import wifi from './wifi.png';
import r2 from './room2.jpg.png';
import r3 from './room3.jpg.png';
import divvid from './div.video.png';
import S2 from './S2.png';
import S3 from './S3.png'; 
import S4 from './S4.png';
import S5 from './S5.png';
import S6 from './S6.png';
function Nav() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary p-0">
        <div class="container-fluid fw-bold px-0">
          <a style={{ backgroundColor: '#FEA116', color: '#fff', height: '70px' }} class="navbar-brand px-5 text-uppercase d-grid align-items-center" href="#"><h5 className='my-0 '><b>my hotel</b></h5 ></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav gap-1 mb-2 mb-lg-0 ">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="/MemoDemo">ABOUT</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-disabled="true">ROOMS</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  PAGES
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-disabled="true">SERVICE</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Hoame page Section */}
      <div className='home-page'>
        <div className='container-fluid d-grid align-items-center' id='hero'>
          <div class="row ">
            <div className='d-flex'>
              <h4 className='text-light'>LUXURY LIVING</h4>
              <hr style={{ width: '60px', border: '0.5px solid #FEA116', backgroundColor: '#FEA116', opacity: '10' }} />

            </div>
            <h1 class='head1'>Discover A Brand Luxurious <br />Hotel</h1>
            <button class='text-uppercase text-light fw-bolder' style={{ height: '48px', width: '170px', backgroundColor: '#FEA116' }}>our rooms</button>
            <button class='text-uppercase text-black fw-bolder ms-3' style={{ height: '48px', width: '170px', backgroundColor: '#fff' }}>book a room</button>
          </div>
          {/* <div>
            <button className="border border-light" style={{ width: "45px", height: "41px", backgroundColor: "transparent", color: "#fff" }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
            </svg></button><br></br>
            <button className="border border-light mt-3" style={{ width: "45px", height: "41px", backgroundColor: "transparent", color: "#fff" }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
            </svg></button>
          </div> */}
        </div>
      </div>
      <section className="form">
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
      </section>
      <div class="row ms-5">
        <div class="col ms-2">
          <div class="card h-70" style={{ width: "394px", backgroundColor: "#FEA116" }}>
            <img src={R2} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title text-center" style={{ fontSize: "40px", color: "#fff", fontWeight: "700" }}>Surat</h5>
            </div>
          </div>
        </div>
        <div class="col ms-2">
          <div class="card h-70" style={{ width: "394px", backgroundColor: "#FEA116" }}>
            <img src={R2} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title text-center" style={{ fontSize: "40px", color: "#fff", fontWeight: "700" }}>vadodara</h5>
            </div>
          </div>
        </div>
        <div class="col ms-2">
          <div class="card h-70" style={{ width: "394px", backgroundColor: "#FEA116" }}>
            <img src={R1} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title text-center" style={{ fontSize: "40px", color: "#fff", fontWeight: "700" }}>Ahmedabad</h5>
            </div>
          </div>
        </div>
      </div>
      <section className='counter'>
        <div className='container-fluid mt-5' style={{ height: "300px" }}>
          <div className='row justify-content-center align-items-center ms-3'>
            <div class="col-12 col-md-3 text-center">
              <div class="c-content d-flex align-items-center">
                <div className='image ms-5'>
                  <img class='ms-5' src={i1} alt='' />
                  <div class="num ms-5">
                    <h2 class="text-white ">1234</h2>
                  </div>
                  <div class="num2">
                    <h6 class="text-white ms-5">Appartments</h6>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-3 text-center">
              <div class="c-content d-flex align-items-center">
                <div className='image ms-5'>
                  <img class='ms-5' src={i2} alt='' />
                  <div class="num ms-5">
                    <h2 class="text-white ">1234</h2>
                  </div>
                  <div class="num2">
                    <h6 class="text-white ms-5">Rooms</h6>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-3 text-center">
              <div class="c-content d-flex align-items-center">
                <div className='image ms-5'>
                  <img class='ms-5' src={i3} alt='' />
                  <div class="num ms-5">
                    <h2 class="text-white ">1234</h2>
                  </div>
                  <div class="num2">
                    <h6 class="text-white ms-5">Staffs</h6>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-3 text-center">
              <div class="c-content d-flex align-items-center">
                <div className='image ms-5'>
                  <img class='ms-5' src={i4} alt='' />
                  <div class="num ms-5">
                    <h2 class="text-white ">1234</h2>
                  </div>
                  <div class="num2">
                    <h6 class="text-white ms-5">Clients</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="container-fluid mt-5">
        <div class="row">

          <div class="col-md-6">
            <div class="card" id="room2">
              <div class="row no-gutters">

                <div class="col-md-6">
                  <img src={r1} class="card-img rounded-0" alt="Sample Image" />
                </div>

                <div class="col-md-6">
                  <div class="card-body">
                    <div className="first">
                      <button id="btn-book">$100/Night</button>
                      <div className="fafa-star">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                      </div>
                    </div>
                    <div className="second mt-3">
                      <h4 className="junior mt-3">Junior Suite</h4>
                    </div>
                    <div className="third mt-4">
                      <img src={bed} style={{ height: '19px', width: '19px' }} class="" /><p className="r-text">3 Bed</p>
                      <img src={bath} style={{ height: '19px', width: '19px' }} class="" /><p className="r-text">3Bath</p>
                      <img src={wifi} style={{ height: '19px', width: '19px' }} class="" /><p className="r-text">Wifi</p>
                    </div>
                    <div className="fourth mt-4">
                      <p style={{ fontSize: '20px' }}>Erat ipsum justo amet duo et elitr dolor, est
                        duo duo eos lorem sed diam stet diam sed
                        stet.</p>
                    </div>
                    <div className="fifth mt-5">
                      <button id="view">VIEW DETAIL</button>
                      <button id="book">BOOK NOW</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div class="col-md-6">
            <div class="card" id="room2">
              <div class="row no-gutters">

                <div class="col-md-6">
                  <img src={r2} class="card-img rounded-0" alt="Sample Image" />
                </div>

                <div class="col-md-6">
                  <div class="card-body">
                    <div className="first">
                      <button id="btn-book">$100/Night</button>
                      <div className="fafa-star">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span></div>
                    </div>
                    <div className="second mt-3">
                      <h4 className="junior mt-3">Junior Suite</h4>
                    </div>
                    <div className="third mt-4">
                      <img src={bed} style={{ height: '19px', width: '19px' }} class="" /><p className="r-text">3 Bed</p>
                      <img src={bath} style={{ height: '19px', width: '19px' }} class="" /><p className="r-text">3Bath</p>
                      <img src={wifi} style={{ height: '19px', width: '19px' }} class="" /><p className="r-text">Wifi</p>
                    </div>
                    <div className="fourth mt-4">
                      <p style={{ fontSize: '20px' }}>Erat ipsum justo amet duo et elitr dolor, est
                        duo duo eos lorem sed diam stet diam sed
                        stet.</p>
                    </div>
                    <div className="fifth mt-5">
                      <button id="view">VIEW DETAIL</button>
                      <button id="book">BOOK NOW</button>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid mt-5">
        <div class="row">

          <div class="col-md-6">
            <div class="card" id="room2">
              <div class="row no-gutters">

                <div class="col-md-6">
                  <img src={r3} class="card-img rounded-0" alt="Sample Image" />
                </div>

                <div class="col-md-6">
                  <div class="card-body">
                    <div className="first">
                      <button id="btn-book">$100/Night</button>
                      <div className="fafa-star">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                      </div>
                    </div>
                    <div className="second mt-3">
                      <h4 className="junior mt-3">Junior Suite</h4>
                    </div>
                    <div className="third mt-4">
                      <img src={bed} style={{ height: '19px', width: '19px' }} class="" /><p className="r-text">3 Bed</p>
                      <img src={bath} style={{ height: '19px', width: '19px' }} class="" /><p className="r-text">3Bath</p>
                      <img src={wifi} style={{ height: '19px', width: '19px' }} class="" /><p className="r-text">Wifi</p>
                    </div>
                    <div className="fourth mt-4">
                      <p style={{ fontSize: '20px' }}>Erat ipsum justo amet duo et elitr dolor, est
                        duo duo eos lorem sed diam stet diam sed
                        stet.</p>
                    </div>
                    <div className="fifth mt-5">
                      <button id="view">VIEW DETAIL</button>
                      <button id="book">BOOK NOW</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div class="col-md-6">
            <div class="card" id="room2">
              <div class="row no-gutters">

                <div class="col-md-6">
                  <img src={r1} class="card-img rounded-0" alt="Sample Image" />
                </div>

                <div class="col-md-6">
                  <div class="card-body">
                    <div className="first">
                      <button id="btn-book">$100/Night</button>
                      <div className="fafa-star">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span></div>
                    </div>
                    <div className="second mt-3">
                      <h4 className="junior mt-3">Junior Suite</h4>
                    </div>
                    <div className="third mt-4">
                      <img src={bed} style={{ height: '19px', width: '19px' }} class="" /><p className="r-text">3 Bed</p>
                      <img src={bath} style={{ height: '19px', width: '19px' }} class="" /><p className="r-text">3Bath</p>
                      <img src={wifi} style={{ height: '19px', width: '19px' }} class="" /><p className="r-text">Wifi</p>
                    </div>
                    <div className="fourth mt-4">
                      <p style={{ fontSize: '20px' }}>Erat ipsum justo amet duo et elitr dolor, est
                        duo duo eos lorem sed diam stet diam sed
                        stet.</p>
                    </div>
                    <div className="fifth mt-5">
                      <button id="view">VIEW DETAIL</button>
                      <button id="book">BOOK NOW</button>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='container-fluid d-grid align-items-center' style={{ backgroundColor: "#0F172B" }}>
          <div class="row ">
            <div className='col-lg-6'>
              <h4 className='text-light'>LUXURY LIVING</h4>
              <hr style={{ width: '60px', border: '0.5px solid #FEA116', backgroundColor: '#FEA116', opacity: '10' }} />
              <h1 class='head1'>Discover A Brand Luxurious <br />Hotel</h1>
              <button class='text-uppercase text-light fw-bolder' style={{ height: '48px', width: '170px', backgroundColor: '#FEA116' }}>our rooms</button>
              <button class='text-uppercase text-black fw-bolder ms-3' style={{ height: '48px', width: '170px', backgroundColor: '#fff' }}>book a room</button>
            </div>
            <div className='col-lg-6'>
              <img className='ms-5' src={divvid} />
            </div>
          </div>
        </div>

        <section className='services'>
          <div className='container-fluid mt-5 ms-5'>
            <div className='row'>
              <div className='col d-flex'>
                <div class="card" style={{ width: "432px", height: "auto" }}>
                  <div class="card-body mt-5">
                    <img src={{ i1 }} alt='' />
                    <h5 class="card-title fw-bold mt-5">Rooms & Appartment</h5>
                    <p class="card-text">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet<br />
                      lorem.</p>
                  </div>
                </div>
                <div class="card ms-4" style={{ width: "432px", height: "auto" }}>
                  <div class="card-body mt-5">
                    <img src={{S2}} alt='' />
                    <h5 class="card-title fw-bold mt-5">Food & Restaurant</h5>
                    <p class="card-text">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet<br />
                      lorem.</p>
                  </div>
                </div>
                <div class="card ms-4" style={{ width: "432px", height: "auto" }}>
                  <div class="card-body mt-5">
                    <img src={{S3}} alt='' />
                    <h5 class="card-title fw-bold mt-5">Spa & Fitness</h5>
                    <p class="card-text">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet<br />
                      lorem.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='row mt-3'>
              <div className='col d-flex'>
                <div class="card" style={{ width: "432px", height: "auto" }}>
                  <div class="card-body mt-5">
                    <img src={{S4}} alt='' />
                    <h5 class="card-title fw-bold mt-5">Sports & Gaming</h5>
                    <p class="card-text">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet<br />
                      lorem.</p>
                  </div>
                </div>
                <div class="card ms-4" style={{ width: "432px", height: "auto" }}>
                  <div class="card-body mt-5">
                    <img src={{S5}} alt='' />
                    <h5 class="card-title fw-bold mt-5">Event & Party</h5>
                    <p class="card-text">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet<br />
                      lorem.</p>
                  </div>
                </div>
                <div class="card ms-4" style={{ width: "432px", height: "auto" }}>
                  <div class="card-body mt-5">
                    <img src={{S6}} alt='' />
                    <h5 class="card-title fw-bold mt-5">GYM & Yoga</h5>
                    <p class="card-text">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet<br />
                      lorem.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
export default Nav
