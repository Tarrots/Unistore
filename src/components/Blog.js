import React from "react";

const Blog = () => {
  return (
    <div>
      <hr className="offset-lg" />
      <div className="container tags">
        <p>Search by tags</p>
        <div className="btn-group" data-toggle="buttons">
          <label className="btn btn-default btn-xs active">
            <input type="radio" name="options" id="option1" defaultChecked />{" "}
            All items
          </label>
          <label className="btn btn-default btn-xs">
            <input type="radio" name="options" id="option2" /> Newest
          </label>
          <label className="btn btn-default btn-xs">
            <input type="radio" name="options" id="option3" /> Popular
          </label>
          <label className="btn btn-default btn-xs">
            <input type="radio" name="options" id="option4" /> News
          </label>
          <label className="btn btn-default btn-xs">
            <input type="radio" name="options" id="option5" /> Articles
          </label>
          <label className="btn btn-default btn-xs">
            <input type="radio" name="options" id="option6" /> Reviews
          </label>
        </div>
      </div>
      <hr className="offset-sm" />
      <div className="blog">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-6 item">
              <div className="body">
                <a href={this} className="view">
                  <i className="ion-ios-book-outline" />
                </a>
                <a href={this}>
                  <img
                    src="../assets/img/blog/img1.jpg"
                    title="Apple Devices"
                    alt="Apple Devices"
                  />
                </a>
                <div className="caption">
                  <h1 className="h3">The next generation of Multi-Touch</h1>
                  <label> 07.01.2017</label>
                  <hr className="offset-sm" />
                  <p>
                    The original iPhone introduced the world to Multi-Touch,
                    forever changing the way people experience technology. With
                    3D Touch, you can do things that were never possible before.
                    It senses how deeply you press the display, letting you do
                    all kinds of essential things more quickly and simply. And
                    it gives you real-time feedback in the form of subtle taps
                    from the all-new Taptic Engine.
                  </p>
                  <hr className="offset-sm" />
                  <a href={this}>
                    {" "}
                    View article <i className="ion-ios-arrow-right" />{" "}
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 item">
              <div className="body">
                <a href={this} className="view">
                  <i className="ion-ios-book-outline" />
                </a>
                <a href={this}>
                  <img
                    src="../assets/img/blog/img2.jpg"
                    title="Coffee"
                    alt="Coffee"
                  />
                </a>
                <div className="caption">
                  <h1 className="h3">
                    MacBook Pro - brand new day for business.
                  </h1>
                  <label> 02.01.2017</label>
                  <hr className="offset-sm" />
                  <p>
                    Organizations everywhere are realizing the potential that
                    Mac brings to their employees by giving them the freedom to
                    use the tools they already know and love. Software and
                    hardware made for each other. Because Apple designs both the
                    software and hardware, every Mac delivers the best possible
                    experience for employees.
                  </p>
                  <hr className="offset-sm" />
                  <a href={this}>
                    {" "}
                    View article <i className="ion-ios-arrow-right" />{" "}
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 item">
              <div className="body">
                <a href={this} className="view">
                  <i className="ion-ios-book-outline" />
                </a>
                <a href={this}>
                  <img
                    src="../assets/img/blog/img4.jpg"
                    title="HP Chromebook"
                    alt="HP Chromebook"
                  />
                </a>
                <div className="caption">
                  <h1 className="h3">HP Chromebook review.</h1>
                  <label> 02.01.2017</label>
                  <hr className="offset-sm" />
                  <p>
                    HP’s Chromebook 11 G4 ($199) has a dull-gray shell that
                    screams, “bulk education purchase” more than “buy me.”
                    Precisely because this school-oriented model can bang around
                    in backpacks, however, it could teach its consumer
                    Chromebook cousins a thing or two about build quality.
                  </p>
                  <hr className="offset-sm" />
                  <a href={this}>
                    {" "}
                    View article <i className="ion-ios-arrow-right" />{" "}
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 item">
              <div className="body">
                <a href={this} className="view">
                  <i className="ion-ios-book-outline" />
                </a>
                <a href={this}>
                  <img
                    src="../assets/img/blog/img3.jpg"
                    alt="Apple Music"
                    title="Apple Music"
                  />
                </a>
                <div className="caption">
                  <h1 className="h3">
                    Apple Music changes, Apple and SUP and more
                  </h1>
                  <label> 02.01.2017</label>
                  <hr className="offset-sm" />
                  <p>
                    Sunday is Mother’s Day. Wait, did you forget? Well, thanks
                    to Apple, you can make a “Shot on iPhone” Mother’s Day
                    video, using this site. Upload an image, enter your name,
                    and then you can post the final result so Mom can enjoy.
                  </p>
                  <hr className="offset-sm" />
                  <a href={this}>
                    {" "}
                    View article <i className="ion-ios-arrow-right" />{" "}
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 item">
              <div className="body">
                <a href={this} className="view">
                  <i className="ion-ios-book-outline" />
                </a>
                <a href={this}>
                  <img
                    src="../assets/img/blog/img2.jpg"
                    title="Coffee"
                    alt="Coffee"
                  />
                </a>
                <div className="caption">
                  <h1 className="h3">
                    MacBook Pro - brand new day for business.
                  </h1>
                  <label> 02.01.2017</label>
                  <hr className="offset-sm" />
                  <p>
                    Organizations everywhere are realizing the potential that
                    Mac brings to their employees by giving them the freedom to
                    use the tools they already know and love. Software and
                    hardware made for each other. Because Apple designs both the
                    software and hardware, every Mac delivers the best possible
                    experience for employees.
                  </p>
                  <hr className="offset-sm" />
                  <a href={this}>
                    {" "}
                    View article <i className="ion-ios-arrow-right" />{" "}
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 item">
              <div className="body">
                <a href={this} className="view">
                  <i className="ion-ios-book-outline" />
                </a>
                <a href={this}>
                  <img
                    src="../assets/img/blog/img1.jpg"
                    title="Apple Devices"
                    alt="Apple Devices"
                  />
                </a>
                <div className="caption">
                  <h1 className="h3">The next generation of Multi-Touch</h1>
                  <label> 07.01.2017</label>
                  <hr className="offset-sm" />
                  <p>
                    The original iPhone introduced the world to Multi-Touch,
                    forever changing the way people experience technology. With
                    3D Touch, you can do things that were never possible before.
                    It senses how deeply you press the display, letting you do
                    all kinds of essential things more quickly and simply. And
                    it gives you real-time feedback in the form of subtle taps
                    from the all-new Taptic Engine.
                  </p>
                  <hr className="offset-sm" />
                  <a href={this}>
                    {" "}
                    View article <i className="ion-ios-arrow-right" />{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <nav>
            <ul className="pagination">
              <li>
                <a href={this} aria-label="Previous">
                  <span aria-hidden="true">
                    <i className="ion-ios-arrow-left" />
                  </span>
                </a>
              </li>
              <li className="active">
                <a href={this}>1</a>
              </li>
              <li>
                <a href={this}>2</a>
              </li>
              <li>
                <a href={this}>3</a>
              </li>
              <li className="disabled">
                <a href={this}>..</a>
              </li>
              <li>
                <a href={this}>10</a>
              </li>
              <li>
                <a href={this} aria-label="Next">
                  <span aria-hidden="true">
                    <i className="ion-ios-arrow-right" />
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <hr className="offset-lg" />
      <hr className="offset-lg" />
    </div>
  );
};

export default Blog;
