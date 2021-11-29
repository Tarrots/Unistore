import React from 'react'

export default function Pagination() {
    return (
        <nav>
            <ul className="pagination">
                <li>
                    <a href={this} aria-label="Previous">
                        <span aria-hidden="true"><i className="ion-ios-arrow-left" /></span>
                    </a>
                </li>
                <li className="active"><a href={this}>1</a></li>
                <li><a href={this}>2</a></li>
                <li><a href={this}>3</a></li>
                <li className="disabled"><a href={this}>..</a></li>
                <li><a href={this}>10</a></li>
                <li>
                    <a href={this} aria-label="Next">
                        <span aria-hidden="true"><i className="ion-ios-arrow-right" /></span>
                    </a>
                </li>
            </ul>
        </nav>
    )
}
