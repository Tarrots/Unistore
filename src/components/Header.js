function Header() {
  return (
    <nav className="navbar navbar-default">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#navbar"
            aria-expanded="false"
            aria-controls="navbar"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <a className="navbar-brand" href={this}>
            {" "}
            <i className="ion-cube" /> Unistore
          </a>
        </div>
        <div id="navbar" className="navbar-collapse collapse">
          <ul className="nav navbar-nav">
            <li className="active">
              <a href={this}>Home</a>
            </li>
            <li>
              <a href={this}>Catalog</a>
            </li>
            <li>
              <a href={this}>Blog</a>
            </li>
            <li>
              <a href={this}>Gallery</a>
            </li>
            <li>
              <a href={this}>Checkout</a>
            </li>
            <li className="dropdown">
              <a
                href={this}
                className="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                More <span className="caret" />
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href={this}>Product</a>
                </li>
                <li>
                  <a href={this}>Cart</a>
                </li>
                <li>
                  <a href={this}>Checkout</a>
                </li>
                <li>
                  <a href={this}>FAQ</a>
                </li>
                <li>
                  <a href={this}>Contacts</a>
                </li>
                <li role="separator" className="divider" />
                <li className="dropdown-header">Variations</li>
                <li>
                  <a href={this}>Home</a>
                </li>
                <li>
                  <a href={this}>Article Photo</a>
                </li>
                <li>
                  <a href={this}>Article Video</a>
                </li>
                <li>
                  <a href={this}>Article Review</a>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href={this}>
                {" "}
                <i className="ion-android-person" /> Login{" "}
              </a>
            </li>
            <li>
              <a href={this}> Sign Up</a>
            </li>
          </ul>
        </div>
        {/*/.nav-collapse */}
      </div>
      {/*/.container-fluid */}
    </nav>
  );
}

export default Header;
