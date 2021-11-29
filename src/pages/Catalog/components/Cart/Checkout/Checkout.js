import React from 'react'

function Checkout({cart, product}) {
    const Total = () => {
        var result = '', total = 0;
        result = cart.product.map((prod) => {
            return parseInt(product[prod.id ].price ) * parseInt(prod.quantity)
        })
        for(let lgt = 0; lgt < cart.product.length ; lgt ++)
        {
            total += parseInt(result[lgt])
        }
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