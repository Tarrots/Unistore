import React from 'react'

function Checkout({product}) {
    const Total = () => {
        var total = 0;
        return total;
    }
    return (
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
                                <p>${Total()}</p>
                                <h3 className="h4">${Total()}</h3>
                            </div>
                        </div>
                        <div className="col-xs-6 col-sm-6">
                            <a className="btn btn-primary" href={this} onClick={() => console.log('Clicked Checkout!')}>Checkout order </a>
                        </div>
                    </div>
                </div>
    )
}
export default Checkout;