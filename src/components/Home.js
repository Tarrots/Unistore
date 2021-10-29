function Home() {
  return (
    <div>
      <header>
        <div className="carousel" data-count={3} data-current={2}>
          {/* <button class="btn btn-control"></button> */}
          <div className="items">
            <div className="item" data-marker={1}>
              <img
                src="assets/img/carousel/bckg.jpg"
                alt="Background"
                className="background"
              />
              <div className="content">
                <div className="outside-content">
                  <div className="inside-content">
                    <div className="container">
                      <div className="row">
                        <div className="col-sm-12 align-center">
                          <h1>New amazing laptops</h1>
                          <p>Provide lightweight and powerull</p>
                          <a href={this}>More laptops &gt;</a>
                          <br />
                          <br />
                        </div>
                        <div className="col-sm-6 col-sm-offset-3 align-center">
                          <img
                            src="assets/img/carousel/newlaptops.jpg"
                            alt="Laptops"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item active" data-marker={2}>
              <img
                src="assets/img/carousel/bckg.jpg"
                alt="Background"
                className="background"
              />
              <div className="content">
                <div className="outside-content">
                  <div className="inside-content">
                    <div className="container">
                      <div className="row">
                        <div className="col-sm-8 col-sm-offset-2 align-center">
                          <img
                            src="assets/img/carousel/surfaces.jpg"
                            alt="Surface Pro"
                          />
                        </div>
                        <div className="col-sm-12 align-center">
                          <h1>8 Windows Hybrid Laptops</h1>
                          <p>
                            The laptop comes with an Intel i5 chip and 8GB of
                            RAM.
                          </p>
                          <a href={this}>View surfaces &gt;</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item" data-marker={3}>
              <img
                src="assets/img/carousel/bckg.jpg"
                alt="Background"
                className="background"
              />
              <div className="content">
                <div className="outside-content">
                  <div className="inside-content">
                    <div className="container">
                      <div className="row">
                        <div className="col-sm-5 col-sm-offset-1 align-center">
                          <img
                            src="assets/img/carousel/ipadair2.jpg"
                            alt="iPad Air 2"
                            className="hidden-xs hidden-sm"
                          />
                          <img
                            src="assets/img/carousel/ipadair2m.jpg"
                            alt="iPad Air 2"
                            className="hidden-md hidden-lg"
                          />
                        </div>
                        <div className="col-sm-4 align-left">
                          <br className="hidden-xs hidden-sm" />
                          <br className="hidden-xs hidden-sm" />
                          <br className="hidden-xs hidden-sm" />
                          <br className="hidden-xs hidden-sm" />
                          <br className="hidden-xs hidden-sm" />
                          <br className="hidden-xs hidden-sm" />
                          <h1>Luxury devices</h1>
                          <br />
                          <p>
                            Luxury watches, business tablets and 3D touch: How
                            Apple plans to stay ahead in mobile. When it comes
                            to the brand’s latest iPhones, the biggest
                            excitement isn’t focused on the addition of a rose
                            gold coloured device but the new 3D touch sensors.
                          </p>
                          <a href={this}>View article &gt;</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ul className="markers">
            <li data-marker={1}>
              <img src="assets/img/carousel/newlaptops.jpg" alt="Background" />
            </li>
            <li data-marker={2} className="active">
              <img src="assets/img/carousel/surfaces.jpg" alt="Background" />
            </li>
            <li data-marker={3}>
              <img src="assets/img/carousel/ipadair2.jpg" alt="Background" />
            </li>
          </ul>
        </div>
      </header>
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="col-sm-3 align-center">
            <a href={this}>
              <img
                src="assets/img/tiles/blog.jpg"
                alt="Blog"
                className="image"
              />
            </a>
            <br />
            <br />
            <a href={this}>Blog headlines</a>
          </div>
          <div className="col-sm-3 align-center">
            <a
              href={this}
              data-gallery="#video"
              data-source="vimeo"
              data-id={110691368}
              data-title="Apple iPad Air"
              data-description="So capable, you won’t want to put it down. So thin and light, you won’t have to."
            >
              <img
                src="assets/img/tiles/video-apple.jpg"
                alt="New devices"
                className="image"
              />
            </a>
            <br />
            <br />
            <a
              href={this}
              data-gallery="#video"
              data-source="vimeo"
              data-id={110691368}
              data-title="Apple iPad Air"
              data-description="So capable, you won’t want to put it down. So thin and light, you won’t have to."
            >
              New apple diveces
            </a>
          </div>
          <div className="col-sm-3 align-center">
            <a
              href={this}
              data-gallery="#video"
              data-source="youtube"
              data-id="6g-ZIm0wge4"
              data-title="Best New Dell Laptops"
              data-description="Best of dell's laptops that you can consider buying in 2016. 4 Laptops are featured in the video and all of them has equal importance and there is no order that #1 is better than #2"
            >
              <img
                src="assets/img/tiles/video-dell.jpg"
                alt="Del XPS"
                className="image"
              />
            </a>
            <br />
            <br />
            <a
              href={this}
              data-gallery="#video"
              data-source="youtube"
              data-id="6g-ZIm0wge4"
              data-title="Best New Dell Laptops"
              data-description="Best of dell's laptops that you can consider buying in 2016. 4 Laptops are featured in the video and all of them has equal importance and there is no order that #1 is better than #2"
            >
              Brend new DELL XPS
            </a>
          </div>
          <div className="col-sm-3 align-center">
            <a href={this}>
              <img
                src="assets/img/tiles/gallery.jpg"
                alt="Gallery"
                className="image"
              />
            </a>
            <br />
            <br />
            <a href={this}>Products gallery</a>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}

export default Home;
