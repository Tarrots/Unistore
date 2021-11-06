import React, { useState } from 'react'

import { Link } from "react-router-dom";

export default function Header() {
    /*
    const handleUrl = (path) => {
        setUrl(path);
        return;
    }
     */

    const [url, setUrl] = useState(window.location.pathname);
    console.log(url); // Test url

    /**
     const handleUrl = (path) => {
        setUrl(path);
        return;
    }
     */
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
                            <li onClick={() => {setUrl("/home");}} className={url === "/home" ? "active" : ""}>
                                {/* <a href="/home">Home</a> */}
                                <Link to="/home">Home</Link>
                            </li>
                            <li onClick={() => {setUrl("/catalog");}} className={url === "/catalog" ? "active" : ""}>
                                {/* <a href="/catalog">Catalog</a> */}
                                <Link to="/catalog">Catalog</Link>
                            </li>
                            <li onClick={() => {setUrl("/blog");}} className={url === "/blog" ? "active" : ""}>
                                {/* <a href="/blog">Blog</a> */}
                                <Link to="/blog">Blog</Link>
                            </li>
                            <li onClick={() => {setUrl("/gallery");}} className={url === "/gallery" ? "active" : ""}>
                                {/* <a href="/gallery">Gallery</a> */}
                                <Link to="/gallery">Gallery</Link>
                            </li>
                            <li onClick={() => {setUrl("/cart");}} className={url === "/cart" ? "active" : ""}>
                                {/* <a href="/cart">Cart</a> */}
                                <Link to="/cart">Cart</Link>
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
                            <li onClick={() => {setUrl("/login");}} className={url === "/login" ? "active" : ""}>
                                {/* <a href="/login">
                                    {" "}
                                    <i className="ion-android-person" /> Login{" "}
                                </a> */}
                                <Link to="/login"><i className="ion-android-person"/>&nbsp;Login</Link>
                            </li>
                            <li onClick={() => {setUrl("/signup");}} className={url === "/signup" ? "active" : ""}>
                                {/* <a href="/signup"> Sign Up</a> */}
                                <Link to="/signup"> Sign Up</Link>
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
