import React from 'react'

const Product = () => {
    return (
        <div>
        <div className="cart" data-toggle="inactive">
          <div className="label">
            <i className="ion-bag" /> 7
          </div>
          <div className="overlay" />
          <div className="window">
            <div className="title">
              <button type="button" className="close"><i className="ion-android-close" /></button>
              <h1 className="h3 info">Shopping cart</h1>
            </div>
            <div className="content">
              <div className="media">
                <div className="media-left">
                  <a href={this}>
                    <img className="media-object" src="../assets/img/products/chrome-book-11.jpg" alt="HP Chromebook 11" />
                  </a>
                </div>
                <div className="media-body">
                  <h2 className="h4 media-heading">HP Chromebook 11</h2>
                  <label>Laptops</label>
                  <p className="price">$199.99</p>
                </div>
                <div className="controls">
                  <div className="input-group">
                    <span className="input-group-btn">
                      <button className="btn btn-default btn-sm" type="button" data-action="minus"><i className="ion-minus-round" /></button>
                    </span>
                    <input type="text" className="form-control input-sm" placeholder="Qty" defaultValue={1} readOnly />
                    <span className="input-group-btn">
                      <button className="btn btn-default btn-sm" type="button" data-action="plus"><i className="ion-plus-round" /></button>
                    </span>
                  </div>{/* /input-group */}
                  <a href={this}> <i className="ion-trash-b" /> Remove </a>
                </div>
              </div>
              <div className="media">
                <div className="media-left">
                  <a href={this}>
                    <img className="media-object" src="../assets/img/products/chrome-book-14.jpg" alt="HP Chromebook 11" />
                  </a>
                </div>
                <div className="media-body">
                  <h2 className="h4 media-heading">HP Chromebook 14</h2>
                  <label>Laptops</label>
                  <p className="price">$209.99</p>
                </div>
                <div className="controls">
                  <div className="input-group">
                    <span className="input-group-btn">
                      <button className="btn btn-default btn-sm" type="button" data-action="minus"><i className="ion-minus-round" /></button>
                    </span>
                    <input type="text" className="form-control input-sm" placeholder="Qty" defaultValue={1} readOnly />
                    <span className="input-group-btn">
                      <button className="btn btn-default btn-sm" type="button" data-action="plus"><i className="ion-plus-round" /></button>
                    </span>
                  </div>{/* /input-group */}
                  <a href={this}> <i className="ion-trash-b" /> Remove </a>
                </div>
              </div>
              <div className="media">
                <div className="media-left">
                  <a href={this}>
                    <img className="media-object" src="../assets/img/products/ipad-air.jpg" alt="iPad Air" />
                  </a>
                </div>
                <div className="media-body">
                  <h2 className="h4 media-heading">iPad Air</h2>
                  <label>Tablets</label>
                  <p className="price">$449.99</p>
                </div>
                <div className="controls">
                  <div className="input-group">
                    <span className="input-group-btn">
                      <button className="btn btn-default btn-sm" type="button" data-action="minus"><i className="ion-minus-round" /></button>
                    </span>
                    <input type="text" className="form-control input-sm" placeholder="Qty" defaultValue={1} readOnly />
                    <span className="input-group-btn">
                      <button className="btn btn-default btn-sm" type="button" data-action="plus"><i className="ion-plus-round" /></button>
                    </span>
                  </div>{/* /input-group */}
                  <a href={this}> <i className="ion-trash-b" /> Remove </a>
                </div>
              </div>
              <div className="media">
                <div className="media-left">
                  <a href={this}>
                    <img className="media-object" src="../assets/img/products/mi-pad-2.jpg" alt="HP Chromebook 11" />
                  </a>
                </div>
                <div className="media-body">
                  <h2 className="h4 media-heading">Mi Pad 2</h2>
                  <label>Tablets</label>
                  <p className="price">$199.99</p>
                </div>
                <div className="controls">
                  <div className="input-group">
                    <span className="input-group-btn">
                      <button className="btn btn-default btn-sm" type="button" data-action="minus"><i className="ion-minus-round" /></button>
                    </span>
                    <input type="text" className="form-control input-sm" placeholder="Qty" defaultValue={1} readOnly />
                    <span className="input-group-btn">
                      <button className="btn btn-default btn-sm" type="button" data-action="plus"><i className="ion-plus-round" /></button>
                    </span>
                  </div>{/* /input-group */}
                  <a href={this}> <i className="ion-trash-b" /> Remove </a>
                </div>
              </div>
              <div className="media">
                <div className="media-left">
                  <a href={this}>
                    <img className="media-object" src="../assets/img/products/lenovo-yoga.jpg" alt="Lenovo Yoga" />
                  </a>
                </div>
                <div className="media-body">
                  <h2 className="h4 media-heading">Lenovo Yoga</h2>
                  <label>Hybrid</label>
                  <p className="price">$199.99</p>
                </div>
                <div className="controls">
                  <div className="input-group">
                    <span className="input-group-btn">
                      <button className="btn btn-default btn-sm" type="button" data-action="minus"><i className="ion-minus-round" /></button>
                    </span>
                    <input type="text" className="form-control input-sm" placeholder="Qty" defaultValue={1} readOnly />
                    <span className="input-group-btn">
                      <button className="btn btn-default btn-sm" type="button" data-action="plus"><i className="ion-plus-round" /></button>
                    </span>
                  </div>{/* /input-group */}
                  <a href={this}> <i className="ion-trash-b" /> Remove </a>
                </div>
              </div>
              <div className="media">
                <div className="media-left">
                  <a href={this}>
                    <img className="media-object" src="../assets/img/products/surface-pro.jpg" alt="HP Chromebook 11" />
                  </a>
                </div>
                <div className="media-body">
                  <h2 className="h4 media-heading">Surface Pro</h2>
                  <label>Hybrid</label>
                  <p className="price">$199.99</p>
                </div>
                <div className="controls">
                  <div className="input-group">
                    <span className="input-group-btn">
                      <button className="btn btn-default btn-sm" type="button" data-action="minus"><i className="ion-minus-round" /></button>
                    </span>
                    <input type="text" className="form-control input-sm" placeholder="Qty" defaultValue={1} readOnly />
                    <span className="input-group-btn">
                      <button className="btn btn-default btn-sm" type="button" data-action="plus"><i className="ion-plus-round" /></button>
                    </span>
                  </div>{/* /input-group */}
                  <a href={this}> <i className="ion-trash-b" /> Remove </a>
                </div>
              </div>
              <div className="media">
                <div className="media-left">
                  <a href={this}>
                    <img className="media-object" src="../assets/img/products/asus-transformer.jpg" alt="HP Chromebook 11" />
                  </a>
                </div>
                <div className="media-body">
                  <h2 className="h4 media-heading">ASUS Transformer</h2>
                  <label>Hybrid</label>
                  <p className="price">$199.99</p>
                </div>
                <div className="controls">
                  <div className="input-group">
                    <span className="input-group-btn">
                      <button className="btn btn-default btn-sm" type="button" data-action="minus"><i className="ion-minus-round" /></button>
                    </span>
                    <input type="text" className="form-control input-sm" placeholder="Qty" defaultValue={1} readOnly />
                    <span className="input-group-btn">
                      <button className="btn btn-default btn-sm" type="button" data-action="plus"><i className="ion-plus-round" /></button>
                    </span>
                  </div>{/* /input-group */}
                  <a href={this}> <i className="ion-trash-b" /> Remove </a>
                </div>
              </div>
            </div>
            <div className="checkout container-fluid">
              <div className="row">
                <div className="col-xs-3 col-sm-2">
                  <div>
                    <p>Subtotal:</p>
                    <h3 className="h4">Total:</h3>
                  </div>
                </div>
                <div className="col-xs-3 col-sm-4">
                  <div className="total">
                    <p>$1 200</p>
                    <h3 className="h4">$1 200</h3>
                  </div>
                </div>
                <div className="col-xs-6 col-sm-6">
                  <a className="btn btn-primary" href={this}> Checkout order </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="offset-lg" />
        <div className="product">
          <div className="container">
            <div className="row">
              <div className="col-sm-7 col-md-7">
                <div className="carousel product" data-count={5} data-current={1}>
                  {/* <button class="btn btn-control"></button> */}
                  <div className="items">
                    <div className="item active" data-marker={1}>
                      <img src="../assets/img/product/1.jpg" alt="ChromeBook 11" />
                    </div>
                    <div className="item" data-marker={2}>
                      <img src="../assets/img/product/2.jpg" alt="ChromeBook 11" />
                    </div>
                    <div className="item" data-marker={3}>
                      <img src="../assets/img/product/3.jpg" alt="ChromeBook 11" />
                    </div>
                    <div className="item" data-marker={4}>
                      <img src="../assets/img/product/4.jpg" alt="ChromeBook 11" />
                    </div>
                    <div className="item" data-marker={5}>
                      <img src="../assets/img/product/5.jpg" alt="ChromeBook 11" />
                    </div>
                    <div className="item" data-marker={6}>
                      <div className="tiles">
                        <a href={this} data-gallery="#video" data-source="youtube" data-id="hED0N4CFoqs" data-title="An upscale new Chromebook from HP" data-description="The new HP Chromebook 13 runs a Core M CPU inside a slim aluminum body.">
                          <img src="../assets/img/product/video.jpg" alt="ChromeBook 11" />
                          <div className="overlay" />
                          <div className="content">
                            <div className="content-outside">
                              <div className="content-inside">
                                <i className="ion-ios-play" />
                                <h1>Watch video review</h1>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <ul className="markers">
                    <li data-marker={1} className="active"><img src="../assets/img/product/1.jpg" alt="Background" /></li>
                    <li data-marker={2}><img src="../assets/img/product/2.jpg" alt="Background" /></li>
                    <li data-marker={3}><img src="../assets/img/product/3.jpg" alt="Background" /></li>
                    <li data-marker={4}><img src="../assets/img/product/4.jpg" alt="Background" /></li>
                    <li data-marker={5}><img src="../assets/img/product/5.jpg" alt="Background" /></li>
                    <li data-marker={6}><img src="../assets/img/product/video.jpg" alt="Background" /></li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-5 col-md-5">
                <img src="../assets/img/brands/hp.png" alt="HP" className="brand hidden-xs" />
                <h1>HP Chromebook 11</h1>
                <p> · Chrome OS™</p>
                <p> · Intel® Celeron® processor</p>
                <p> · Intel HD Graphics</p>
                <p className="price">$209.99</p>
                <p className="price through">$249.99</p>
                <br /><br />
                <button className="btn btn-primary btn-rounded"> <i className="ion-bag" /> Add to cart</button>
              </div>
            </div>
            <br /><br /><br />
            <div className="row">
              <div className="col-sm-7">
                <h1>HP Chromebook 11</h1>
                <br />
                <p>
                  The stylish HP Chromebook provides a speedy connection to your protected online content and automatically updated apps, all within an ultra-thin full-sized notebook, providing a comfortable gateway to surf, socialize and play.
                </p>
                <br />
                <h2>Product specifications</h2>
                <br />
                <div className="row specification">
                  <div className="col-sm-6"> <label>Operating system</label> </div>
                  <div className="col-sm-6"> <p>Chrome OS™</p> </div>
                </div>
                <div className="row specification">
                  <div className="col-sm-6"> <label>Processor</label> </div>
                  <div className="col-sm-6"> <p>Intel® Celeron® N2840 with Intel® HD Graphics (2.16 GHz, up to 2.58 GHz, 1 MB cache, 2 cores)</p> </div>
                </div>
                <div className="row specification">
                  <div className="col-sm-6"> <label>Processor technology</label> </div>
                  <div className="col-sm-6"> <p>Intel Turbo Boost Technology</p> </div>
                </div>
                <div className="row specification">
                  <div className="col-sm-6"> <label>Graphics</label> </div>
                  <div className="col-sm-6"> <p>Intel HD Graphics</p> </div>
                </div>
                <div className="row specification">
                  <div className="col-sm-6"> <label>Memory</label> </div>
                  <div className="col-sm-6"> <p>2 GB DDR3L SDRAM (onboard)</p> </div>
                </div>
                <div className="row specification">
                  <div className="col-sm-6"> <label>Hard drive</label> </div>
                  <div className="col-sm-6"> <p>16 GB eMMC</p> </div>
                </div>
                <div className="row specification">
                  <div className="col-sm-6"> <label>Wireless</label> </div>
                  <div className="col-sm-6"> <p>802.11ac (2x2) and Bluetooth® 4.0 combo</p> </div>
                </div>
                <div className="row specification">
                  <div className="col-sm-6"> <label>Power supply</label> </div>
                  <div className="col-sm-6"> <p>45 W AC power adapter</p> </div>
                </div>
                <div className="row specification">
                  <div className="col-sm-6"> <label>Battery</label> </div>
                  <div className="col-sm-6"> <p>3-cell, 36 Wh Li-ion</p> </div>
                </div>
              </div>
              <div className="col-sm-5">
                <div className="comments">
                  <h2 className="h3">What do you think? (#3)</h2>
                  <br />
                  <div className="wrapper">
                    <div className="content">
                      <h3>Anne Hathaway</h3>
                      <label>2 years ago</label>
                      <p>
                        Apple Music brings iTunes music streaming to the UK. But is it worth paying for? In our Apple Music review, we examine the service's features, UK pricing, audio quality and music library
                      </p>
                      <h3>Chris Hemsworth</h3>
                      <label>Today</label>
                      <p>
                        Samsung's Galaxy S7 smartphone is getting serious hype. Here's what it does better than Apple's iPhone 6s.
                      </p>
                      <h3>Anne Hathaway</h3>
                      <label>2 years ago</label>
                      <p>
                        Apple Music brings iTunes music streaming to the UK. But is it worth paying for? In our Apple Music review, we examine the service's features, UK pricing, audio quality and music library
                      </p>
                    </div>
                  </div>
                  <br />
                  <button className="btn btn-default btn-sm" data-toggle="modal" data-target="#Modal-Comment"> <i className="ion-chatbox-working" /> Add comment </button>
                </div>
                <br /><br />
                <div className="talk">
                  <h2 className="h3">Do you have any questions?</h2>
                  <p>Online chat with our manager</p>
                  <button className="btn btn-default btn-sm"> <i className="ion-android-contact" /> Lat's talk </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br /><br />
        <section className="products">
          <div className="container">
            <h1 className="h3">Recommendation for you</h1>
            <div className="row">
              <div className="col-sm-6 col-md-3 product">
                <a href={this} className="favorites" data-favorite="inactive"><i className="ion-ios-heart-outline" /></a>
                <a href={this}><img src="../assets/img/products/chrome-book-11.jpg" alt="HP Chromebook 11" /></a>
                <div className="content">
                  <h1 className="h4">HP Chromebook 11</h1>
                  <p className="price">$199.99</p>
                  <label>Laptops</label>
                  <a href={this} className="btn btn-link"> Details</a>
                  <button className="btn btn-primary btn-rounded btn-sm"> <i className="ion-bag" /> Add to cart</button>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 product">
                <a href={this} className="favorites" data-favorite="inactive"><i className="ion-ios-heart-outline" /></a>
                <a href={this}><img src="../assets/img/products/chrome-book-14.jpg" alt="HP Chromebook 14" /></a>
                <div className="content">
                  <h1 className="h4">HP Chromebook 14</h1>
                  <p className="sale">$209.99</p>
                  <p className="price through">$249.99</p>
                  <label>Laptops</label>
                  <a href={this} className="btn btn-link"> Details</a>
                  <button className="btn btn-primary btn-rounded btn-sm"> <i className="ion-bag" /> Add to cart</button>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 product">
                <a href={this} className="favorites" data-favorite="inactive"><i className="ion-ios-heart-outline" /></a>
                <a href={this}><img src="../assets/img/products/chrome-book-asus.jpg" alt="HP Chromebook 14" /></a>
                <div className="content">
                  <h1 className="h4">Asus Chromebook</h1>
                  <p className="price">$299.99</p>
                  <label>Laptops</label>
                  <a href={this} className="btn btn-link"> Details</a>
                  <button className="btn btn-primary btn-rounded btn-sm"> <i className="ion-bag" /> Add to cart</button>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 product">
                <a href={this} className="favorites" data-favorite="inactive"><i className="ion-ios-heart-outline" /></a>
                <a href={this}><img src="../assets/img/products/ipad-air.jpg" alt="iPad Air" /></a>
                <div className="content">
                  <h1 className="h4">iPad Air</h1>
                  <p className="price">$449.99</p>
                  <label>Tablets</label>
                  <a href={this} className="btn btn-link"> Details</a>
                  <button className="btn btn-primary btn-rounded btn-sm"> <i className="ion-bag" /> Add to cart</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <br /><br />
      </div>      
    )
}

export default Product