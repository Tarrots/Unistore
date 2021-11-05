import React, { useEffect } from 'react'

export default function Header() {
    useEffect(() => {
        console.log(window.location.pathname);
    })
    return (
        <div>
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
                        <a className="navbar-brand" href="/home">
                            {" "}
                            <i className="ion-cube" /> Unistore
                        </a>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav">
                            <li className={window.location.pathname==="/home" ? "active" :""}>
                            <a href="/home">Home</a>
                            </li>
                            <li className={window.location.pathname==="/catalog" ? "active" :""}>
                            <a href="/catalog">Catalog</a>
                            </li>
                            <li className={window.location.pathname==="/blog" ? "active" :""}>
                            <a href="/blog">Blog</a>
                            </li>
                            <li className={window.location.pathname==="/gallery" ? "active" :""}>
                            <a href="/gallery">Gallery</a>
                            </li>
                            <li className={window.location.pathname==="/cart" ? "active" :""}>
                            <a href="/cart">Cart</a>
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
                            <a href="/login">
                                {" "}
                                <i className="ion-android-person" /> Login{" "}
                            </a>
                            </li>
                            <li>
                            <a href="/signup"> Sign Up</a>
                            </li>
                        </ul>
                    </div>
                    {/*/.nav-collapse */}
                </div>
                {/*/.container-fluid */}
            </nav>
        </div>
    )
}
