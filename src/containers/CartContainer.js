import { connect } from 'react-redux'
import Cart from '../pages/Catalog/components/Cart/Cart';

function CartContainer({cart, product}) {
    
    return (
        <Cart cart={cart} product={product}/>
    )
}
const mapSateToProps = state => {
    return {
        cart: state.Cart, 
        product: state.Catalog
    }
}
export default connect(mapSateToProps,null)(CartContainer);
