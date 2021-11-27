/** Action Store*/
import * as types from '../constant/ActionsType'

export const actAddToCart = (product, quatity) => {
    return {
        type: types.ADD_TO_CART_SUCCESS,
        product,
        quatity
    }
}