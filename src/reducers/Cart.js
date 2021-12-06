import * as types from '../constant/ActionsType'

var carts = JSON.parse(localStorage.getItem('carts'))
const initState = carts ? carts : {
    isActive: false,
    quantity: 0,
    product: [
    ],
    total: 0
};
localStorage.setItem('carts',JSON.stringify(initState))


const Cart = (state = initState, action) => {
    var {product} = action , index = -1, products = []
    switch (action.type) {
        case types.ADD_TO_CART_SUCCESS:
            state.quantity ++
            /*--------------------------------*/
            // Tách ra hàm riêng
            if(state.product.length > 0)
            {
                for(let i = 0; i < state.product.length; i++)
                {
                    if(state.product[i].id === product)
                        index = state.product[i].id
                        products.push(index)
                }
            }
            /*--------------------------------*/
            if(index > -1 )
            {
                for(let i = 0 ; i < products.length ; i ++)
                {
                    if(index === i)
                    {
                    state.product[index].quantity ++

                    }
                }
            }
            else 
            {
                state.product.push({
                    id: product,
                    quantity: 1
                })
            }
            console.log(state) // Test data
            localStorage.setItem('carts',JSON.stringify(initState))
            return {...state}
        default:
            return {...state}
    }
}
export default Cart;